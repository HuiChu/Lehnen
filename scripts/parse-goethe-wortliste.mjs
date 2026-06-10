/**
 * parse-goethe-wortliste.mjs — 解析歌德官方 Wortliste PDF，產出「事實型」詞彙庫。
 *
 * ⚠️ 建置期手動執行，不進 CI、不影響 npm run build。需對外網路下載 PDF。
 *
 * 為什麼只存事實欄位：歌德詞表的「例句」有版權，**不擷取、不轉存**。
 * 我們只取「字 + 冠詞(der/die/das) + 複數 + 級別 + 主題」這類事實資訊
 * （單字與其文法屬性不受著作權保護），作為文法標記（陰陽性/複數）的權威來源。
 * 例句一律改由 Tatoeba（CC BY）或手寫取得（見 build-chunks.mjs）。
 *
 * ── 資料準備 ──
 *   mkdir -p scripts/.cache && cd scripts/.cache
 *   curl -LO https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf
 *   curl -LO https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf
 *   curl -LO https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf
 *
 * ── 執行 ──
 *   # 建議先安裝 poppler 以取得 pdftotext（欄位處理最穩）：
 *   #   macOS: brew install poppler   /   Debian: apt-get install poppler-utils
 *   node scripts/parse-goethe-wortliste.mjs
 *   # 若無 pdftotext，會嘗試動態載入 pdfjs-dist（npm i -D pdfjs-dist）。
 *
 * 輸出：scripts/data/goethe-vocab.json
 *   [{ lemma, pos, gender?, plural?, level, theme? }]
 *
 * 註：PDF 抽取的文字排版因版本而異，下方解析以啟發式為主，
 *     必要時依實際輸出微調 regex（檔案內已標出可調處）。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { conjugate, isStrong, GLOSS } from './data/conjugate.mjs';
import { NOUN_GLOSS, VERB_GLOSS } from './data/glosses.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE = path.join(__dirname, '.cache');
const OUT = path.join(__dirname, 'data', 'goethe-vocab.json');
const OUT_VERBS = path.join(__dirname, 'data', 'goethe-verbs.json');

/** PDF 檔名 → 級別 */
const SOURCES = [
  { file: 'A1_SD1_Wortliste_02.pdf', level: 'A1' },
  { file: 'Goethe-Zertifikat_A2_Wortliste.pdf', level: 'A2' },
  { file: 'Goethe-Zertifikat_B1_Wortliste.pdf', level: 'B1' },
];

/** 用 pdftotext -layout 取文字；失敗則回傳 null 讓呼叫端走 pdfjs 後備 */
function pdftotext(file) {
  try {
    return execFileSync('pdftotext', ['-layout', '-enc', 'UTF-8', file, '-'], {
      maxBuffer: 64 * 1024 * 1024,
    }).toString('utf8');
  } catch {
    return null;
  }
}

async function pdfjsText(file) {
  let pdfjs;
  try {
    pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  } catch {
    console.error('找不到 pdftotext，也未安裝 pdfjs-dist。請擇一安裝後重試。');
    console.error('  poppler:  brew install poppler / apt-get install poppler-utils');
    console.error('  或 node:  npm i -D pdfjs-dist');
    process.exit(1);
  }
  const data = new Uint8Array(fs.readFileSync(file));
  const doc = await pdfjs.getDocument({ data }).promise;
  let out = '';
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    out += reconstructLines(content.items) + '\n';
  }
  return out;
}

/**
 * 由 text item 的座標重建近似原始排版的「行」。
 * pdfjs 預設會把整頁 item 串成一段，導致 parseNoun() 的「行首」regex 全部失效；
 * 這裡依 Y（transform[5]，容差 LINE_TOL）分桶成行、行內依 X（transform[4]）由左到右排序，
 * 行再依 Y 由大到小（頁面由上到下）輸出，還原成逐行文字。
 */
function reconstructLines(items) {
  const LINE_TOL = 3; // 同一行的 Y 容差
  const rows = []; // { y, parts: [{ x, str }] }
  for (const it of items) {
    if (!it.str) continue;
    const x = it.transform[4];
    const y = it.transform[5];
    let row = rows.find((r) => Math.abs(r.y - y) <= LINE_TOL);
    if (!row) rows.push((row = { y, parts: [] }));
    row.parts.push({ x, str: it.str });
  }
  rows.sort((a, b) => b.y - a.y);
  return rows
    .map((r) =>
      r.parts
        .sort((a, b) => a.x - b.x)
        .map((p) => p.str)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()
    )
    .join('\n');
}

const GENDER = { der: 'm', die: 'f', das: 'n' };

/**
 * PDF 抽取造成的名詞碎片 / 截斷（含 ß 被吃掉、換行碎片、名物化形容詞、複數型當原形），
 * 非真實單字，從詞庫剔除以免出現在背單字卡。
 */
const NOUN_STOP = new Set([
  'Auf', 'Bearbeiten', 'Caf', 'Der', 'Eck', 'Erdgescho', 'Fu', 'Gru', 'Hat',
  'Hend', 'Hör', 'Ihnen', 'Ist', 'Ja', 'Kühl', 'Kranken', 'Lebens', 'Mach',
  'Men', 'Mobil', 'Nach', 'Nord', 'Pädagogische', 'Postleit', 'Schwimm', 'So',
  'Spa', 'Spazier', 'Sprech', 'Stipen', 'Über', 'Umweltver', 'Untergescho',
  'Veranstal', 'Verkehrs', 'Wie', 'Allgemeinbildende', 'Berufsbildende',
  'Europäische', 'Angaben', 'Getränke', 'Interessen', 'Senioren', 'Wörter',
]);

/**
 * 從一行文字嘗試抽取名詞條目（lemma + 冠詞 + 可能的複數）。
 * 同時相容「Lemma, der」與「der Lemma」兩種排版。可依實際 PDF 微調。
 */
function parseNoun(line) {
  // 形式 A：headword 在前，冠詞在後 → "Adresse, die"  /  "Adresse die  -n"
  let m = line.match(/^\s*([A-ZÄÖÜ][A-Za-zÄÖÜäöüß-]+)\s*,?\s+(der|die|das)\b(.*)$/);
  if (!m) {
    // 形式 B：冠詞在前 → "der Computer, -"
    m = line.match(/^\s*(der|die|das)\s+([A-ZÄÖÜ][A-Za-zÄÖÜäöüß-]+)\b(.*)$/);
    if (m) m = [m[0], m[2], m[1], m[3]];
  }
  if (!m) return null;
  const lemma = m[1];
  if (NOUN_STOP.has(lemma)) return null;
  const gender = GENDER[m[2]];
  if (!gender) return null;
  // 複數提示：取冠詞後到第一個句點/雙空白前的簡短片段（如 "-n"、"¨-e"、"die Adressen"）
  const rest = (m[3] || '').trim();
  let plural;
  const pm = rest.match(/^[,;]?\s*(die\s+[A-Za-zÄÖÜäöüß-]+|[¨\-][A-Za-zÄÖÜäöüß¨-]*|-)/);
  if (pm) plural = pm[1].replace(/\s+/g, ' ').trim();
  return { lemma, pos: 'noun', gender, plural: plural || undefined };
}

/** 不以 -en 結尾的動詞不定式 */
const INF_SPECIAL = new Set(['sein', 'tun']);

/**
 * 小寫、以 -en/-eln/-ern 結尾但「不是動詞」的常見詞，避免誤判為動詞原形。
 * 含介係詞、副詞/方位、數詞，以及換行續行例句常見的「變格形容詞」。
 */
const VERB_STOP = new Set([
  // 介係詞 / 連接詞
  'gegen', 'neben', 'zwischen', 'wegen', 'binnen', 'entlang', 'außen', 'innen',
  // 副詞 / 方位 / 時間
  'morgen', 'übermorgen', 'gestern', 'vorgestern', 'oben', 'unten', 'hinten',
  'vorne', 'drüben', 'eben', 'heute', 'immer', 'gerne', 'gern', 'wieder',
  'vorbei', 'daneben', 'nebenan', 'zusammen', 'draußen', 'drinnen', 'mitten',
  // 數詞 / 其他
  'sieben', 'eigen', 'offen',
  // 限定詞 / 代名詞 / 不定代詞的變格形（例句續行常見，非動詞）
  'allen', 'anderen', 'vielen', 'einigen', 'manchen', 'solchen', 'welchen',
  'welchem', 'diesen', 'jenen', 'jeden', 'jedem', 'keinen', 'keinem',
  'deinen', 'seinen', 'ihren', 'unseren', 'euren', 'meisten', 'denen',
  'denselben', 'demselben',
  // 換行續行常見的變格形容詞（非動詞）
  'alphabetischen', 'automatischen', 'praktischen', 'politischen',
  'wirtschaftlichen', 'persönlichen', 'möglichen', 'verschiedenen',
  // 換行續行常見的變格形容詞（避免把例句中間的形容詞當動詞）
  'großen', 'kleinen', 'guten', 'neuen', 'alten', 'jungen', 'schönen', 'langen',
  'kurzen', 'hohen', 'roten', 'blauen', 'grünen', 'gelben', 'schwarzen',
  'weißen', 'ersten', 'zweiten', 'letzten', 'ganzen', 'halben', 'nächsten',
  'gleichen', 'beiden', 'meisten', 'besten', 'eigenen', 'richtigen', 'wichtigen',
  'teuren', 'billigen', 'warmen', 'kalten', 'frischen', 'sauberen',
  'dritten', 'europäischen', 'fremden', 'öffentlichen', 'schnellsten',
  'schrecklichen', 'schriftlichen', 'ständigen', 'übergeordneten',
  'vorderen', 'vorherigen', 'virtuellen', 'verschieden', 'unentschieden',
  'einverstanden', 'willkommen', 'zufrieden', 'trocken', 'modern',
  // 過去分詞 / 例句片語（無 ge- 的不可分動詞分詞，易被誤判為原形）
  'verboten', 'beschlossen', 'bestanden', 'entschieden', 'entschlossen',
  'unterschieden', 'überwiesen', 'verstanden', 'wiedergefunden', 'gaben',
  // 副詞 / 連接詞 / 助詞 / 非原形動詞形
  'bisschen', 'dagegen', 'inzwischen', 'meinetwegen', 'selten', 'sondern',
  'möchten', 'einen', 'einzeln', 'fern',
  // 斷詞造成的碎片（換行把字尾留在行首）
  'chen', 'den', 'dungen', 'ern', 'gruppen', 'hörden', 'itäten', 'lichen',
  'men', 'nen', 'schen', 'schieden', 'sprochen', 'sten', 'ten', 'tern',
  'teuergeschichten',
]);

/**
 * 從一行嘗試抽取動詞原形。歌德詞表的動詞條目為「小寫原形 + 例句」。
 * 相容前導反身代詞 "sich"；以停用表濾掉常見非動詞。
 */
/** 可確認為真實動詞、但以 ge- 開頭（避免被過去分詞濾規則誤刪） */
const GE_VERBS = new Set([
  'gehen', 'geben', 'gefallen', 'gehören', 'gewinnen', 'geschehen',
  'genießen', 'gebrauchen', 'gestehen', 'gelingen', 'geraten', 'gelten',
  'gewöhnen', 'genehmigen', 'gestalten', 'gelangen', 'gestatten', 'gewähren',
]);
/** 可分前綴（供過去分詞 / zu-不定式濾規則用） */
const SEP_RE =
  'ab|an|auf|aus|bei|ein|los|mit|nach|um|vor|weg|zu|zurück|zusammen|her|hin|fort|teil|fest|frei';

function parseVerb(line) {
  const parts = line.trim().split(/\s+/);
  let i = 0;
  if (parts[i] === 'sich') i++;
  const tok = (parts[i] ?? '').replace(/[.,;:!?–—-]+$/, '');
  if (!/^[a-zäöü][a-zäöüß]+$/.test(tok)) return null;
  const isInf = /(?:eln|ern|en)$/.test(tok) || INF_SPECIAL.has(tok);
  if (!isInf || VERB_STOP.has(tok)) return null;
  // 排除 zu-不定式（例句中的「(ab)zu…en」，如 anzurufen、abzuschließen）
  if (new RegExp(`^(?:${SEP_RE})zu[a-zäöüß]+e?n$`).test(tok)) return null;
  // 排除可分前綴 + ge 的過去分詞（如 angefangen、aufgeschrieben、angekommen）
  if (new RegExp(`^(?:${SEP_RE})ge[a-zäöüß]+(?:en|t)$`).test(tok)) return null;
  // 排除無前綴的 ge-過去分詞（gegangen、gekommen…），保留真實 ge-動詞
  if (/^ge[a-zäöüß]+(?:en|t)$/.test(tok) && !GE_VERBS.has(tok)) return null;
  return tok;
}

/** 蒐集一份文字中的動詞原形（去重）。 */
function parseVerbLevel(text) {
  const set = new Set();
  for (const raw of text.split(/\r?\n/)) {
    const lemma = parseVerb(raw.replace(/ /g, ' '));
    if (lemma) set.add(lemma);
  }
  return set;
}

function parseLevel(text, level) {
  const byLemma = new Map();
  // 註：歌德 Wortliste 為「字母順序」清單，無主題分節，因此不推斷 theme
  // （先前的標題啟發式在字母清單上只會誤判，例如把含 "Ort" 的字判成情境）。
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/ /g, ' ');
    const noun = parseNoun(line);
    if (noun && !byLemma.has(noun.lemma)) {
      byLemma.set(noun.lemma, { ...noun, level });
    }
  }
  return [...byLemma.values()];
}

async function main() {
  if (!fs.existsSync(CACHE)) {
    console.error(`找不到 ${CACHE}，請先依本檔頂部「資料準備」下載 PDF。`);
    process.exit(1);
  }
  /** @type {Map<string, any>} */
  const merged = new Map(); // lemma → entry（保留最低級別）
  /** @type {Map<string, 'A1'|'A2'|'B1'>} */
  const mergedVerbs = new Map(); // 動詞 lemma → 最低級別
  const rank = { A1: 1, A2: 2, B1: 3 };
  let any = false;

  for (const { file, level } of SOURCES) {
    const full = path.join(CACHE, file);
    if (!fs.existsSync(full)) {
      console.warn(`略過（找不到）：${file}`);
      continue;
    }
    any = true;
    console.log(`解析 ${file}（${level}）…`);
    const text = pdftotext(full) ?? (await pdfjsText(full));
    const entries = parseLevel(text, level);
    console.log(`  擷取名詞 ${entries.length} 筆`);
    for (const e of entries) {
      const prev = merged.get(e.lemma);
      if (!prev || rank[e.level] < rank[prev.level]) merged.set(e.lemma, e);
    }
    const verbSet = parseVerbLevel(text);
    console.log(`  擷取動詞 ${verbSet.size} 筆`);
    for (const lemma of verbSet) {
      const prev = mergedVerbs.get(lemma);
      if (!prev || rank[level] < rank[prev]) mergedVerbs.set(lemma, level);
    }
  }

  if (!any) {
    console.error('scripts/.cache 內沒有任何 Wortliste PDF，請先下載。');
    process.exit(1);
  }

  const vocab = [...merged.values()]
    .map((e) => (NOUN_GLOSS[e.lemma] ? { ...e, zh: NOUN_GLOSS[e.lemma] } : e))
    .sort((a, b) => a.lemma.localeCompare(b.lemma, 'de'));
  fs.writeFileSync(OUT, JSON.stringify(vocab, null, 2) + '\n', 'utf8');
  const nWithZh = vocab.filter((e) => e.zh).length;
  console.log(`✅ 已寫入 ${OUT}：${vocab.length} 個名詞（含 der/die/das；${nWithZh} 帶中文）。`);

  // 動詞：附上關鍵變位（事實型，由 conjugate.mjs 規則/不規則表產生）與中文字義。
  const verbs = [...mergedVerbs.entries()]
    .map(([lemma, level]) => {
      const { präsens, präteritum, partizip, aux } = conjugate(lemma);
      return {
        lemma,
        pos: 'verb',
        level,
        präsens,
        präteritum,
        partizip,
        aux,
        irregular: isStrong(lemma),
        ...((GLOSS[lemma] ?? VERB_GLOSS[lemma])
          ? { zh: GLOSS[lemma] ?? VERB_GLOSS[lemma] }
          : {}),
      };
    })
    .sort((a, b) => a.lemma.localeCompare(b.lemma, 'de'));
  fs.writeFileSync(OUT_VERBS, JSON.stringify(verbs, null, 2) + '\n', 'utf8');
  console.log(`✅ 已寫入 ${OUT_VERBS}：${verbs.length} 個動詞（含變位）。`);
  console.log('   下一步：node scripts/build-chunks.mjs（會用名詞庫自動標陰陽性）。');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
