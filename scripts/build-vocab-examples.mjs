/**
 * build-vocab-examples.mjs — 為每個名詞/動詞配對一句真實的 Tatoeba 例句。
 *
 * ⚠️ 建置期手動執行，不進 CI、不影響 npm run build。需要 scripts/.cache 的 Tatoeba 檔。
 *
 * 政策：德語例句一律取自真實語料（Tatoeba CC BY 2.0 FR），**不 AI 造句**；
 * 只收「有人工繁體中文對照」的句子（中文取自 Tatoeba cmn 連結，亦為人工翻譯）。
 * 配不到的字就留空（不硬湊、不生成）。
 *
 * 作法：
 *   1. 載入 goethe-vocab.json（名詞）、goethe-verbs.json（動詞）。
 *   2. 建立「表面形 → lemma」索引：
 *        名詞 = 主格原形（大小寫敏感，因德語名詞大寫）；
 *        動詞 = 不定式 + 現在式/過去式/分詞的首詞（小寫比對）。
 *   3. 串流載入 Tatoeba 德語句（只留 4–16 詞的乾淨短句）與中文句、links。
 *   4. 以「短句優先」掃過有中文對照的德語句，為每個尚未配到的 lemma 指定第一個命中的句子。
 *   5. 輸出 scripts/data/vocab-examples.json（lemma → { de, zh, id }）。
 *      由 parse-goethe-wortliste.mjs 併入 goethe-vocab/goethe-verbs 的 `example` 欄位。
 *
 * 執行：node scripts/build-vocab-examples.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import * as OpenCC from 'opencc-js';

// Tatoeba 中文多為簡體，App 一律繁體 → 轉成台灣繁中（含詞彙轉換）
const toTW = OpenCC.Converter({ from: 'cn', to: 'tw' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE = path.join(__dirname, '.cache');
const DATA = path.join(__dirname, 'data');
const SRC_DATA = path.join(__dirname, '..', 'src', 'data');
const OUT = path.join(DATA, 'vocab-examples.json');
// 詞庫 JSON 為 App 執行期資料，已移至 src/data/（產生器也寫到那裡）。
const VOCAB_JSON = path.join(SRC_DATA, 'goethe-vocab.json');
const VERBS_JSON = path.join(SRC_DATA, 'goethe-verbs.json');

/** 由 { de, zh, id } 組出帶 CC BY 來源標註的例句物件 */
function mkExample(ex) {
  return {
    de: ex.de,
    zh: ex.zh,
    source: {
      name: 'Tatoeba',
      url: `https://tatoeba.org/sentences/show/${ex.id}`,
      license: 'CC BY 2.0 FR',
      author: 'Tatoeba contributors',
    },
  };
}
const files = {
  deu: path.join(CACHE, 'deu_sentences.tsv'),
  cmn: path.join(CACHE, 'cmn_sentences.tsv'),
  links: path.join(CACHE, 'links.csv'),
};

const MIN_W = 4;
const MAX_W = 16;

function ensureInputs() {
  for (const [k, f] of Object.entries(files)) {
    if (!fs.existsSync(f)) {
      console.error(`缺少 Tatoeba 檔 ${k}：${f}（見 build-chunks.mjs 頂部「資料準備」）。`);
      process.exit(1);
    }
  }
}

const words = (s) => s.split(/\s+/).filter(Boolean);
/** 乾淨句：首字大寫、以標點結尾、長度適中、不含網址/數字編號雜訊 */
function cleanSentence(t) {
  if (!/^[A-ZÄÖÜ]/.test(t)) return false;
  if (!/[.!?]"?$/.test(t)) return false;
  if (/https?:|www\.|@/.test(t)) return false;
  const n = words(t).length;
  return n >= MIN_W && n <= MAX_W;
}

/** 串流載入德語短句：Map(id → text)，僅留乾淨短句以縮小工作集 */
async function loadDeu() {
  const map = new Map();
  const rl = readline.createInterface({ input: fs.createReadStream(files.deu), crlfDelay: Infinity });
  for await (const line of rl) {
    const t1 = line.indexOf('\t');
    const t2 = line.indexOf('\t', t1 + 1);
    if (t1 < 0 || t2 < 0) continue;
    const id = line.slice(0, t1);
    const text = line.slice(t2 + 1).trim();
    if (id && text && cleanSentence(text)) map.set(id, text);
  }
  return map;
}

async function loadCmn() {
  const map = new Map();
  const rl = readline.createInterface({ input: fs.createReadStream(files.cmn), crlfDelay: Infinity });
  for await (const line of rl) {
    const t1 = line.indexOf('\t');
    const t2 = line.indexOf('\t', t1 + 1);
    if (t1 < 0 || t2 < 0) continue;
    const id = line.slice(0, t1);
    const text = line.slice(t2 + 1).trim();
    if (id && text) map.set(id, text);
  }
  return map;
}

/** links：對每個德語 id，找出第一個有中文的連結 id → Map(deuId → zh) */
async function loadDeuZh(deuIds, cmn) {
  const zhOf = new Map();
  const rl = readline.createInterface({ input: fs.createReadStream(files.links), crlfDelay: Infinity });
  for await (const line of rl) {
    const tab = line.indexOf('\t');
    if (tab < 0) continue;
    const a = line.slice(0, tab);
    const b = line.slice(tab + 1).trim();
    // links 兩個方向都可能出現；德語句可能在 a 或 b
    if (deuIds.has(a) && cmn.has(b) && !zhOf.has(a)) zhOf.set(a, cmn.get(b));
    else if (deuIds.has(b) && cmn.has(a) && !zhOf.has(b)) zhOf.set(b, cmn.get(a));
  }
  return zhOf;
}

/** 去除字首尾標點，保留德語字母 */
const coreWord = (tok) => tok.replace(/^[^A-Za-zÄÖÜäöüß]+|[^A-Za-zÄÖÜäöüß]+$/g, '');

async function main() {
  ensureInputs();
  const nouns = JSON.parse(fs.readFileSync(VOCAB_JSON, 'utf8'));
  const verbs = JSON.parse(fs.readFileSync(VERBS_JSON, 'utf8'));

  // 名詞：表面（大小寫敏感）→ lemma
  const nounForm = new Map();
  for (const n of nouns) if (!nounForm.has(n.lemma)) nounForm.set(n.lemma, n.lemma);
  // 動詞：表面（小寫）→ lemma；收不定式與各時態首詞
  const verbForm = new Map();
  for (const v of verbs) {
    const forms = [v.lemma, v.partizip, (v.präteritum || '').split(' ')[0], (v.präsens || '').split(' ')[0]];
    for (const f of forms) {
      const w = (f || '').toLowerCase();
      if (w && !verbForm.has(w)) verbForm.set(w, v.lemma);
    }
  }

  console.log('載入德語短句…');
  const deu = await loadDeu();
  console.log(`  德語短句（4–16 詞）：${deu.size}`);
  console.log('載入中文句…');
  const cmn = await loadCmn();
  console.log(`  中文句：${cmn.size}`);
  console.log('比對 links（德↔中）…');
  const zhOf = await loadDeuZh(new Set(deu.keys()), cmn);
  console.log(`  有中文對照的德語短句：${zhOf.size}`);

  // 候選：有中文的德語短句，短句優先
  const candidates = [];
  for (const [id, zh] of zhOf) candidates.push({ id, de: deu.get(id), zh, n: words(deu.get(id)).length });
  candidates.sort((a, b) => a.n - b.n || a.de.length - b.de.length);

  const example = {}; // lemma → { de, zh, id }
  for (const c of candidates) {
    const toks = c.de.split(/\s+/);
    for (const tok of toks) {
      const w = coreWord(tok);
      if (!w) continue;
      // 名詞（大小寫敏感）
      if (/^[A-ZÄÖÜ]/.test(w)) {
        const lemma = nounForm.get(w);
        if (lemma && !example[lemma]) example[lemma] = { de: c.de, zh: c.zh, id: c.id };
      }
      // 動詞（小寫比對）
      const vl = verbForm.get(w.toLowerCase());
      if (vl && !example[vl]) example[vl] = { de: c.de, zh: c.zh, id: c.id };
    }
  }

  // 簡體 → 繁體（台灣用語）
  for (const k of Object.keys(example)) example[k].zh = toTW(example[k].zh);

  fs.writeFileSync(OUT, JSON.stringify(example, null, 2) + '\n', 'utf8');
  const nounHit = nouns.filter((n) => example[n.lemma]).length;
  const verbHit = verbs.filter((v) => example[v.lemma]).length;
  console.log(`✅ 已寫入 ${OUT}`);
  console.log(`   名詞配到例句 ${nounHit}/${nouns.length}，動詞 ${verbHit}/${verbs.length}。`);

  // 直接把例句併入詞庫 JSON（不需重跑 PDF 解析）
  for (const [file, arr] of [[VOCAB_JSON, nouns], [VERBS_JSON, verbs]]) {
    for (const e of arr) {
      if (example[e.lemma]) e.example = mkExample(example[e.lemma]);
      else delete e.example;
    }
    fs.writeFileSync(file, JSON.stringify(arr, null, 2) + '\n', 'utf8');
  }
  console.log('✅ 已把例句併入 goethe-vocab.json / goethe-verbs.json');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
