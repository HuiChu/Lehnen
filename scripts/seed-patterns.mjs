/**
 * 語塊「句型 + 搜尋鍵」種子清單，供 scripts/build-chunks.mjs 從 Tatoeba 語料挑句。
 *
 * 沿用 src/data/topics.ts 的 pattern 風格（[X] 為佔位）。`match` 是用來在德語句中
 * 篩選符合此句型的字串/正則；`max` 限制每個語塊收幾句。
 *
 * 注意：此檔為純 ESM（.mjs），讓 `node scripts/build-chunks.mjs` 可直接 import，
 * 不需 TS loader。對應的 TS 型別見 src/types.ts。
 */

/** @typedef {{ topicId:string, topicTitle:string, topicTitleZh:string, emoji:string, level:'A1'|'A2'|'B1', chunkId:string, pattern:string, patternZh:string, match:RegExp, max:number }} Seed */

/** @type {Seed[]} */
export const seeds = [
  // 既有主題的擴充語塊（同 topicId → 併入既有主題）
  {
    topicId: 'restaurant',
    topicTitle: 'Im Restaurant',
    topicTitleZh: '在餐廳',
    emoji: '🍽️',
    level: 'A2',
    chunkId: 'restaurant-gen-1',
    pattern: 'Die Rechnung, bitte.',
    patternZh: '請結帳 / 相關用語。',
    match: /\bRechnung\b/i,
    max: 3,
  },
  {
    topicId: 'shopping',
    topicTitle: 'Beim Einkaufen',
    topicTitleZh: '購物',
    emoji: '🛍️',
    level: 'A2',
    chunkId: 'shopping-gen-1',
    pattern: 'Ich möchte [X] kaufen.',
    patternZh: '我想買某物。',
    match: /\bkaufen\b/i,
    max: 3,
  },
  // 新主題：旅行 / 交通
  {
    topicId: 'travel',
    topicTitle: 'Reisen',
    topicTitleZh: '旅行與交通',
    emoji: '🚆',
    level: 'A2',
    chunkId: 'travel-1',
    pattern: 'Ich fahre mit [X].',
    patternZh: '我搭乘某交通工具。',
    match: /\bich fahre mit\b/i,
    max: 3,
  },
  {
    topicId: 'travel',
    topicTitle: 'Reisen',
    topicTitleZh: '旅行與交通',
    emoji: '🚆',
    level: 'A2',
    chunkId: 'travel-2',
    pattern: 'Wann fährt [X] ab?',
    patternZh: '某交通工具幾點出發？',
    match: /\bfährt\b.*\bab\b/i,
    max: 3,
  },
  // 新主題：天氣
  {
    topicId: 'weather',
    topicTitle: 'Das Wetter',
    topicTitleZh: '天氣',
    emoji: '🌦️',
    level: 'A1',
    chunkId: 'weather-1',
    pattern: 'Heute ist es [X].',
    patternZh: '今天天氣（某狀態）。',
    match: /\bheute ist es\b/i,
    max: 3,
  },
  {
    topicId: 'weather',
    topicTitle: 'Das Wetter',
    topicTitleZh: '天氣',
    emoji: '🌦️',
    level: 'A1',
    chunkId: 'weather-2',
    pattern: 'Es regnet / Es schneit.',
    patternZh: '下雨／下雪等天氣描述。',
    match: /\b(es regnet|es schneit)\b/i,
    max: 3,
  },
];
