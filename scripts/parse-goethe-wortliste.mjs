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
import { scenarioForTheme } from './data/scenario-map.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE = path.join(__dirname, '.cache');
const OUT = path.join(__dirname, 'data', 'goethe-vocab.json');

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
    out += content.items.map((i) => i.str).join(' ') + '\n';
  }
  return out;
}

const GENDER = { der: 'm', die: 'f', das: 'n' };

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
  const gender = GENDER[m[2]];
  if (!gender) return null;
  // 複數提示：取冠詞後到第一個句點/雙空白前的簡短片段（如 "-n"、"¨-e"、"die Adressen"）
  const rest = (m[3] || '').trim();
  let plural;
  const pm = rest.match(/^[,;]?\s*(die\s+[A-Za-zÄÖÜäöüß-]+|[¨\-][A-Za-zÄÖÜäöüß¨-]*|-)/);
  if (pm) plural = pm[1].replace(/\s+/g, ' ').trim();
  return { lemma, pos: 'noun', gender, plural: plural || undefined };
}

/** 偵測主題標題行（粗略）：短、無冠詞、像分類名 */
function maybeTheme(line) {
  const t = line.trim();
  if (t.length < 3 || t.length > 40) return null;
  if (/\b(der|die|das)\b/.test(t)) return null;
  if (/[.!?]/.test(t)) return null;
  return scenarioForTheme(t) ? t : null;
}

function parseLevel(text, level) {
  const byLemma = new Map();
  let currentTheme = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/ /g, ' ');
    const themeHit = maybeTheme(line);
    if (themeHit) currentTheme = themeHit;
    const noun = parseNoun(line);
    if (noun && !byLemma.has(noun.lemma)) {
      byLemma.set(noun.lemma, {
        ...noun,
        level,
        theme: currentTheme ? scenarioForTheme(currentTheme) : undefined,
      });
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
  }

  if (!any) {
    console.error('scripts/.cache 內沒有任何 Wortliste PDF，請先下載。');
    process.exit(1);
  }

  const vocab = [...merged.values()].sort((a, b) => a.lemma.localeCompare(b.lemma, 'de'));
  fs.writeFileSync(OUT, JSON.stringify(vocab, null, 2) + '\n', 'utf8');
  console.log(`✅ 已寫入 ${OUT}：${vocab.length} 個名詞（含 der/die/das）。`);
  console.log('   下一步：node scripts/build-chunks.mjs（會用此庫自動標陰陽性）。');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
