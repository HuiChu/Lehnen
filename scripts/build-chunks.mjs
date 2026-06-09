/**
 * build-chunks.mjs — 從 Tatoeba 語料產生三語語塊，寫入 src/data/topics.generated.ts。
 *
 * ⚠️ 這是「建置期手動執行」的腳本，**不進 CI、不影響 npm run build**。
 *
 * 流程：
 *   1. 讀取已解壓的 Tatoeba TSV（見下方「資料準備」），把 deu/eng/cmn 句子載入記憶體。
 *   2. 依 links 對照，找出每個德語句的 en / zh 人工譯文。
 *   3. 對 scripts/seed-patterns.mjs 的每個句型，用 match 篩選德語句、挑短句。
 *   4. 缺 en 或 zh 的，呼叫 Anthropic Claude API 批次「補譯」（只翻譯、不造德文句），
 *      並把補譯的欄位記入 aiTranslated。
 *   5. 輸出 src/data/topics.generated.ts（帶 source(CC BY) 與 aiTranslated）。
 *
 * 德文句一律取自真實語料（Tatoeba CC BY 2.0 FR），**不 AI 造句**；AI 僅用於補譯。
 *
 * ── 資料準備（需對外網路，檔案大；用系統工具解壓，避免 Node 端 bz2 依賴）──
 *   mkdir -p scripts/.cache && cd scripts/.cache
 *   curl -LO https://downloads.tatoeba.org/exports/per_language/deu/deu_sentences.tsv.bz2
 *   curl -LO https://downloads.tatoeba.org/exports/per_language/eng/eng_sentences.tsv.bz2
 *   curl -LO https://downloads.tatoeba.org/exports/per_language/cmn/cmn_sentences.tsv.bz2
 *   curl -LO https://downloads.tatoeba.org/exports/links.tar.bz2
 *   bunzip2 *.bz2 && tar -xf links.tar     # 產生 links.csv
 *   # 結果應有：deu_sentences.tsv eng_sentences.tsv cmn_sentences.tsv links.csv
 *
 * ── 執行 ──
 *   export ANTHROPIC_API_KEY=sk-ant-...        # 補譯用；若不需補譯可省略
 *   npm i -D @anthropic-ai/sdk                 # 補譯用（僅腳本需要，不影響 App）
 *   node scripts/build-chunks.mjs
 *
 * Tatoeba 句子格式： id<TAB>lang<TAB>text
 * links 格式：       sentenceId<TAB>translationId
 */

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { seeds } from './seed-patterns.mjs';
import { lookupPrep } from './data/prep-case.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE = path.join(__dirname, '.cache');
const OUT = path.join(__dirname, '..', 'src', 'data', 'topics.generated.ts');
const VOCAB = path.join(__dirname, 'data', 'goethe-vocab.json');
const MODEL = 'claude-opus-4-8';

const files = {
  deu: path.join(CACHE, 'deu_sentences.tsv'),
  eng: path.join(CACHE, 'eng_sentences.tsv'),
  cmn: path.join(CACHE, 'cmn_sentences.tsv'),
  links: path.join(CACHE, 'links.csv'),
};

function ensureInputs() {
  const missing = Object.entries(files).filter(([, f]) => !fs.existsSync(f));
  if (missing.length) {
    console.error('缺少 Tatoeba 資料檔（請見本檔頂部「資料準備」說明）：');
    for (const [k, f] of missing) console.error(`  - ${k}: ${f}`);
    process.exit(1);
  }
}

/** 讀 id→text 對照（只保留之後可能用到的，全部載入；檔案大時可加篩選） */
async function loadSentences(file) {
  const map = new Map();
  const rl = readline.createInterface({ input: fs.createReadStream(file), crlfDelay: Infinity });
  for await (const line of rl) {
    const tab1 = line.indexOf('\t');
    const tab2 = line.indexOf('\t', tab1 + 1);
    if (tab1 < 0 || tab2 < 0) continue;
    const id = line.slice(0, tab1);
    const text = line.slice(tab2 + 1).trim();
    if (id && text) map.set(id, text);
  }
  return map;
}

/** 讀 links：deuId → Set(linkedId) */
async function loadLinks(file, deuIds) {
  const adj = new Map();
  const rl = readline.createInterface({ input: fs.createReadStream(file), crlfDelay: Infinity });
  for await (const line of rl) {
    const tab = line.indexOf('\t');
    if (tab < 0) continue;
    const a = line.slice(0, tab);
    const b = line.slice(tab + 1).trim();
    if (deuIds.has(a)) {
      let s = adj.get(a);
      if (!s) adj.set(a, (s = new Set()));
      s.add(b);
    }
  }
  return adj;
}

async function aiTranslateBatch(items) {
  // items: [{ de, need: ('en'|'zh')[] }] → 回傳 [{ en?, zh? }]
  if (!items.length) return [];
  let Anthropic;
  try {
    ({ default: Anthropic } = await import('@anthropic-ai/sdk'));
  } catch {
    console.warn('未安裝 @anthropic-ai/sdk，略過 AI 補譯（缺的譯文留空）。');
    console.warn('如需補譯：npm i -D @anthropic-ai/sdk 並設定 ANTHROPIC_API_KEY。');
    return items.map(() => ({}));
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('未設定 ANTHROPIC_API_KEY，略過 AI 補譯（缺的譯文留空）。');
    return items.map(() => ({}));
  }

  const client = new Anthropic();
  const results = [];
  const BATCH = 20;
  for (let i = 0; i < items.length; i += BATCH) {
    const batch = items.slice(i, i + BATCH);
    const payload = batch.map((it, j) => ({ i: j, de: it.de, need: it.need }));
    const system =
      'You are a professional translator. Translate the given German sentences ONLY into the requested target languages. ' +
      'Do NOT alter or invent German. Return STRICT JSON: an array of objects {"i": number, "en"?: string, "zh"?: string}. ' +
      'Use "zh" for Traditional Chinese (繁體中文). Provide a field only if it was requested in that item\'s "need" list.';
    const message =
      'Translate these items. For each, only include the languages listed in "need".\n' +
      JSON.stringify(payload);

    const resp = await client.messages.create({
      model: MODEL,
      max_tokens: 4096,
      system,
      messages: [{ role: 'user', content: message }],
    });
    const text = resp.content.find((b) => b.type === 'text')?.text ?? '[]';
    let parsed = [];
    try {
      const start = text.indexOf('[');
      const end = text.lastIndexOf(']');
      parsed = JSON.parse(text.slice(start, end + 1));
    } catch {
      console.warn('AI 回傳無法解析為 JSON，此批留空。');
    }
    const byI = new Map(parsed.map((p) => [p.i, p]));
    batch.forEach((_, j) => {
      const p = byI.get(j) || {};
      results.push({ en: p.en, zh: p.zh });
    });
    console.log(`  …已補譯 ${Math.min(i + BATCH, items.length)}/${items.length}`);
  }
  return results;
}

function tatoebaSource(id) {
  return {
    name: 'Tatoeba',
    url: `https://tatoeba.org/sentences/show/${id}`,
    license: 'CC BY 2.0 FR',
    author: 'Tatoeba contributors',
  };
}

/** 載入 goethe-vocab.json（parse-goethe-wortliste.mjs 產出）→ lemma→{gender,plural} */
function loadVocab() {
  if (!fs.existsSync(VOCAB)) {
    console.warn(`未找到 ${VOCAB}，略過陰陽性自動標記（仍會標介係詞格）。`);
    console.warn('如需名詞性別標記：先跑 node scripts/parse-goethe-wortliste.mjs。');
    return new Map();
  }
  const arr = JSON.parse(fs.readFileSync(VOCAB, 'utf8'));
  return new Map(arr.filter((e) => e.gender).map((e) => [e.lemma, e]));
}

/**
 * 為德語句自動產生文法標記（marks）：
 *  - 名詞：token 對到 goethe-vocab 的 lemma（大寫開頭）→ 標 gender/plural。
 *  - 介係詞：對到 prep-case 表 → 標 governs（Wechselpräp. 不標固定格，附說明）。
 * 只取每個字面第一次出現，避免重複。
 */
function annotateMarks(de, vocab) {
  const marks = [];
  const seen = new Set();
  const tokens = de.split(/\s+/);
  for (const tok of tokens) {
    const word = tok.replace(/^[^A-Za-zÄÖÜäöüß]+|[^A-Za-zÄÖÜäöüß]+$/g, '');
    if (!word || seen.has(word)) continue;

    const prep = lookupPrep(word);
    if (prep) {
      if (prep.governs === 'wechsel') {
        marks.push({ text: word, pos: 'prep', lemma: prep.lemma, note: 'Wechselpräp.（方向→Akk／地點→Dat）' });
      } else {
        marks.push({ text: word, pos: 'prep', governs: prep.governs, lemma: prep.lemma, ...(prep.note ? { note: prep.note } : {}) });
      }
      seen.add(word);
      continue;
    }

    if (/^[A-ZÄÖÜ]/.test(word) && vocab.has(word)) {
      const v = vocab.get(word);
      marks.push({ text: word, pos: 'noun', gender: v.gender, ...(v.plural ? { plural: v.plural } : {}), lemma: word });
      seen.add(word);
    }
  }
  return marks;
}

async function main() {
  ensureInputs();
  const vocab = loadVocab();
  console.log('讀取德語句…');
  const deu = await loadSentences(files.deu);
  console.log(`  deu: ${deu.size} 句`);
  console.log('讀取英語句…');
  const eng = await loadSentences(files.eng);
  console.log('讀取中文句…');
  const cmn = await loadSentences(files.cmn);
  console.log('讀取 links…');
  const links = await loadLinks(files.links, new Set(deu.keys()));

  // 反查：德語句 id → 第一個 en / zh 譯文
  const transOf = (deuId) => {
    const linked = links.get(deuId);
    let en, zh;
    if (linked) {
      for (const id of linked) {
        if (!en && eng.has(id)) en = eng.get(id);
        if (!zh && cmn.has(id)) zh = cmn.get(id);
        if (en && zh) break;
      }
    }
    return { en, zh };
  };

  // 把德語句陣列化一次，依長度排序（短句優先，較適合初學）
  const deuList = [...deu.entries()].sort((a, b) => a[1].length - b[1].length);

  // 收集每個 seed 的候選句
  /** @type {Map<string, any>} */
  const topicMap = new Map();
  const toTranslate = []; // { ref:{topicId,chunkId,exIndex}, de, need }

  for (const seed of seeds) {
    let topic = topicMap.get(seed.topicId);
    if (!topic) {
      topic = {
        id: seed.topicId,
        title: seed.topicTitle,
        titleZh: seed.topicTitleZh,
        emoji: seed.emoji,
        level: seed.level,
        chunks: [],
      };
      topicMap.set(seed.topicId, topic);
    }
    const examples = [];
    for (const [id, de] of deuList) {
      if (examples.length >= seed.max) break;
      if (de.length > 80) continue; // 太長略過
      if (!seed.match.test(de)) continue;
      const { en, zh } = transOf(id);
      const ex = { de, zh: zh || '', en: en || undefined, source: tatoebaSource(id) };
      const need = [];
      if (!zh) need.push('zh');
      if (!en) need.push('en');
      if (need.length) toTranslate.push({ ref: ex, de, need });
      examples.push(ex);
    }
    if (examples.length) {
      topic.chunks.push({
        id: seed.chunkId,
        pattern: seed.pattern,
        patternZh: seed.patternZh,
        examples,
      });
    }
  }

  // AI 補譯
  console.log(`需補譯 ${toTranslate.length} 句…`);
  const filled = await aiTranslateBatch(toTranslate);
  toTranslate.forEach((item, i) => {
    const r = filled[i] || {};
    const ai = [];
    if (item.need.includes('zh') && r.zh) {
      item.ref.zh = r.zh;
      ai.push('zh');
    }
    if (item.need.includes('en') && r.en) {
      item.ref.en = r.en;
      ai.push('en');
    }
    if (ai.length) item.ref.aiTranslated = ai;
  });

  // 丟掉仍然完全沒有中文的例句（品質把關），並自動標文法（陰陽性 + 介係詞格）
  const topics = [...topicMap.values()]
    .map((t) => ({
      ...t,
      chunks: t.chunks
        .map((c) => ({
          ...c,
          examples: c.examples
            .filter((e) => e.zh)
            .map((e) => {
              const marks = annotateMarks(e.de, vocab);
              return marks.length ? { ...e, marks } : e;
            }),
        }))
        .filter((c) => c.examples.length),
    }))
    .filter((t) => t.chunks.length);

  const banner =
    '// 由 scripts/build-chunks.mjs 自動產生 — 請勿手動編輯。\n' +
    '// 來源：Tatoeba（CC BY 2.0 FR）；缺譯文以 AI 補譯並標記於 aiTranslated。\n';
  const body =
    `import type { Topic } from '../types';\n\n` +
    `export const generatedTopics: Topic[] = ${JSON.stringify(topics, null, 2)};\n`;
  fs.writeFileSync(OUT, banner + body, 'utf8');
  const count = topics.reduce(
    (n, t) => n + t.chunks.reduce((m, c) => m + c.examples.length, 0),
    0
  );
  console.log(`✅ 已寫入 ${OUT}：${topics.length} 主題、${count} 例句。`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
