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

  // ── 依歌德 Themen 擴充的情境（topicId 對齊 scenario-map.mjs / src/data/topics.ts）──
  { topicId: 'family', topicTitle: 'Familie & Freunde', topicTitleZh: '家庭與朋友', emoji: '👪', level: 'A1', chunkId: 'family-gen-1', pattern: 'Meine Schwester / Mein Bruder …', patternZh: '談家人。', match: /\b(Schwester|Bruder)\b/, max: 3 },
  { topicId: 'housing', topicTitle: 'Wohnung & Wohnen', topicTitleZh: '居住與租屋', emoji: '🏠', level: 'A2', chunkId: 'housing-gen-1', pattern: 'Die Wohnung / Die Miete …', patternZh: '談住處與租金。', match: /\b(Wohnung|Miete)\b/, max: 3 },
  { topicId: 'daily', topicTitle: 'Tagesablauf', topicTitleZh: '日常作息與時間', emoji: '⏰', level: 'A1', chunkId: 'daily-gen-1', pattern: 'Ich stehe … auf.', patternZh: '起床／作息。', match: /\b(stehe ich auf|stehe auf|aufstehen)\b/i, max: 3 },
  { topicId: 'food', topicTitle: 'Essen & Einkaufen', topicTitleZh: '飲食與採買', emoji: '🛒', level: 'A1', chunkId: 'food-gen-1', pattern: 'Ich esse / trinke …', patternZh: '飲食描述。', match: /\b(Gemüse|Obst|frühstück)\b/i, max: 3 },
  { topicId: 'health', topicTitle: 'Beim Arzt', topicTitleZh: '健康與看醫生', emoji: '🩺', level: 'A2', chunkId: 'health-gen-1', pattern: 'Ich gehe zum Arzt.', patternZh: '看醫生／身體不適。', match: /\b(Arzt|Ärztin|Schmerzen)\b/, max: 3 },
  { topicId: 'work', topicTitle: 'Arbeit & Beruf', topicTitleZh: '工作與職業', emoji: '💼', level: 'A2', chunkId: 'work-gen-1', pattern: 'Ich arbeite als …', patternZh: '工作與職業。', match: /\b(arbeite als|von Beruf|Kollege|Kollegen)\b/i, max: 3 },
  { topicId: 'freetime', topicTitle: 'Freizeit & Hobbys', topicTitleZh: '休閒與嗜好', emoji: '⚽', level: 'A1', chunkId: 'freetime-gen-1', pattern: 'In meiner Freizeit …', patternZh: '休閒嗜好。', match: /\b(Freizeit|Hobby|Fußball)\b/i, max: 3 },
  { topicId: 'communication', topicTitle: 'Post, Bank & Telefon', topicTitleZh: '郵局、銀行與電話', emoji: '📮', level: 'A2', chunkId: 'communication-gen-1', pattern: 'Ich möchte … schicken / bezahlen.', patternZh: '寄件／付款。', match: /\b(schicken|bezahlen|Konto)\b/i, max: 3 },
  { topicId: 'travel', topicTitle: 'Reisen & Verkehr', topicTitleZh: '旅行與交通', emoji: '🚆', level: 'A2', chunkId: 'travel-gen-1', pattern: 'Eine Fahrkarte nach …', patternZh: '買票／搭車。', match: /\b(Fahrkarte|Bahnsteig|Flughafen)\b/, max: 3 },
];
