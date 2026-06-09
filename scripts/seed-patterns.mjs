/**
 * 語塊「句型 + 搜尋鍵」種子清單，供 scripts/build-chunks.mjs 從 Tatoeba 語料挑句。
 *
 * 沿用 src/data/topics.ts 的 pattern 風格（[X] 為佔位）。`match` 是用來在德語句中
 * 篩選符合此句型的字串/正則；`max` 限制每個語塊收幾句。
 *
 * 注意：此檔為純 ESM（.mjs），讓 `node scripts/build-chunks.mjs` 可直接 import，
 * 不需 TS loader。對應的 TS 型別見 src/types.ts。
 *
 * chunkId 一律用 `${topicId}-gen-N`，避免與手寫 src/data/topics.ts 的 `${topicId}-N`
 * 撞號（mergeTopics 會依 chunkId 去重，撞號的會被丟掉）。
 */

/** @typedef {{ topicId:string, topicTitle:string, topicTitleZh:string, emoji:string, level:'A1'|'A2'|'B1', chunkId:string, pattern:string, patternZh:string, match:RegExp, max:number }} Seed */

/** 各情境的顯示中繼資料（與 src/data/topics.ts / scripts/data/scenario-map.mjs 對齊）。 */
const TOPICS = {
  introduction: { title: 'Sich vorstellen', titleZh: '自我介紹', emoji: '👋', level: 'A1' },
  family: { title: 'Familie & Freunde', titleZh: '家庭與朋友', emoji: '👪', level: 'A1' },
  daily: { title: 'Tagesablauf', titleZh: '日常作息與時間', emoji: '⏰', level: 'A1' },
  housing: { title: 'Wohnung & Wohnen', titleZh: '居住與租屋', emoji: '🏠', level: 'A2' },
  food: { title: 'Essen & Einkaufen', titleZh: '飲食與採買', emoji: '🛒', level: 'A1' },
  restaurant: { title: 'Im Restaurant', titleZh: '在餐廳', emoji: '🍽️', level: 'A1' },
  shopping: { title: 'Beim Einkaufen', titleZh: '購物', emoji: '🛍️', level: 'A2' },
  health: { title: 'Beim Arzt', titleZh: '健康與看醫生', emoji: '🩺', level: 'A2' },
  work: { title: 'Arbeit & Beruf', titleZh: '工作與職業', emoji: '💼', level: 'A2' },
  freetime: { title: 'Freizeit & Hobbys', titleZh: '休閒與嗜好', emoji: '⚽', level: 'A1' },
  travel: { title: 'Reisen & Verkehr', titleZh: '旅行與交通', emoji: '🚆', level: 'A2' },
  weather: { title: 'Das Wetter', titleZh: '天氣', emoji: '🌦️', level: 'A1' },
  communication: { title: 'Post, Bank & Telefon', titleZh: '郵局、銀行與電話', emoji: '📮', level: 'A2' },
  directions: { title: 'Nach dem Weg fragen', titleZh: '問路', emoji: '🧭', level: 'A1' },
  appointment: { title: 'Termine vereinbaren', titleZh: '預約與約時間', emoji: '📅', level: 'B1' },
  smalltalk: { title: 'Smalltalk', titleZh: '寒暄閒聊', emoji: '💬', level: 'A2' },
};

const _counters = {};
/** 產生一筆 seed；chunkId 自動編號為 `${topicId}-gen-N`。 */
function mk(topicId, pattern, patternZh, match, max = 20) {
  const t = TOPICS[topicId];
  if (!t) throw new Error(`未知 topicId: ${topicId}`);
  _counters[topicId] = (_counters[topicId] || 0) + 1;
  return {
    topicId,
    topicTitle: t.title,
    topicTitleZh: t.titleZh,
    emoji: t.emoji,
    level: t.level,
    chunkId: `${topicId}-gen-${_counters[topicId]}`,
    pattern,
    patternZh,
    match,
    max,
  };
}

/** @type {Seed[]} */
export const seeds = [
  // ── 自我介紹 ──
  mk('introduction', 'Ich heiße [X]. / Wie heißt du?', '說名字／問名字。', /\b(ich heiße|wie heißt du|wie heißen sie)\b/i),
  mk('introduction', 'Ich komme aus [X]. / Woher kommst du?', '說來歷／問來歷。', /\b(ich komme aus|woher kommst du|woher kommen sie)\b/i),
  mk('introduction', 'Ich bin [X] Jahre alt.', '說年齡。', /\bjahre alt\b/i),

  // ── 家庭與朋友 ──
  mk('family', 'Meine Mutter / Mein Vater …', '談父母。', /\b(Mutter|Vater)\b/),
  mk('family', 'Meine Schwester / Mein Bruder …', '談兄弟姊妹。', /\b(Schwester|Bruder)\b/),
  mk('family', 'Wir haben [X] Kinder.', '談孩子。', /\bKinder\b/),
  mk('family', 'Meine Familie …', '談家庭。', /\bFamilie\b/),

  // ── 日常作息與時間 ──
  mk('daily', 'Ich stehe … auf.', '起床／作息。', /\b(stehe ich auf|stehe auf|aufstehen)\b/i),
  mk('daily', 'Wie spät ist es?', '問現在幾點。', /\bwie spät ist es\b/i),
  mk('daily', 'Um … Uhr.', '幾點鐘。', /\bum\b.*\buhr\b/i),
  mk('daily', 'Ich gehe ins Bett.', '就寢。', /\bins bett\b/i),

  // ── 居住與租屋 ──
  mk('housing', 'Die Wohnung / Die Miete …', '談住處與租金。', /\b(Wohnung|Miete)\b/),
  mk('housing', 'Ich wohne in [X].', '我住在某處。', /\bich wohne\b/i),
  mk('housing', 'Das Zimmer / Die Küche …', '談房間與廚房。', /\b(Zimmer|Küche|Bad)\b/),
  mk('housing', 'Das Haus …', '談房子。', /\bHaus\b/),

  // ── 飲食與採買 ──
  mk('food', 'Ich esse gern Gemüse / Obst.', '飲食描述。', /\b(Gemüse|Obst|Frühstück)\b/i),
  mk('food', 'Ich esse [X].', '我吃某物。', /\bich esse\b/i),
  mk('food', 'Ich trinke [X].', '我喝某物。', /\bich trinke\b/i),
  mk('food', 'Brot / Käse / Milch …', '基本食材。', /\b(Brot|Käse|Milch|Wasser)\b/),

  // ── 在餐廳 ──
  mk('restaurant', 'Die Rechnung, bitte.', '請結帳。', /\bRechnung\b/i),
  mk('restaurant', 'Die Speisekarte, bitte.', '請給菜單。', /\bSpeisekarte\b/i),
  mk('restaurant', 'Ich möchte bestellen.', '我要點餐。', /\bbestellen\b/i),
  mk('restaurant', 'Es schmeckt gut.', '好吃／談味道。', /\bschmeckt\b/i),

  // ── 購物 ──
  mk('shopping', 'Ich möchte [X] kaufen.', '我想買某物。', /\bkaufen\b/i),
  mk('shopping', 'Was kostet das?', '這多少錢？', /\bwas kostet\b/i),
  mk('shopping', 'Wie viel kostet [X]?', '某物多少錢？', /\bwie viel kostet\b/i),
  mk('shopping', 'Ich suche [X].', '我在找某物。', /\bich suche\b/i),

  // ── 健康與看醫生 ──
  mk('health', 'Ich gehe zum Arzt.', '看醫生。', /\b(Arzt|Ärztin|Schmerzen)\b/),
  mk('health', 'Ich bin krank.', '我生病了。', /\bich bin krank\b/i),
  mk('health', '… tut weh.', '某處會痛。', /\btut\b.{0,15}\bweh\b/i),
  mk('health', 'Fieber / Husten / Erkältung …', '感冒症狀。', /\b(Fieber|Husten|Erkältung)\b/i),

  // ── 工作與職業 ──
  mk('work', 'Ich arbeite als [X].', '我的職業。', /\b(arbeite als|von Beruf)\b/i),
  mk('work', 'Ich arbeite bei [X].', '我在某處工作。', /\bich arbeite\b/i),
  mk('work', 'Mein Kollege / Meine Kollegin …', '談同事。', /\b(Kollege|Kollegen|Kollegin)\b/),
  mk('work', 'Das Büro / Der Chef …', '辦公室與主管。', /\b(Büro|Chef|Chefin)\b/),

  // ── 休閒與嗜好 ──
  mk('freetime', 'In meiner Freizeit …', '休閒嗜好。', /\b(Freizeit|Hobby|Fußball)\b/i),
  mk('freetime', 'Ich spiele [X].', '我玩／打某運動。', /\bich spiele\b/i),
  mk('freetime', 'Ich höre Musik.', '聽音樂。', /\bmusik\b/i),
  mk('freetime', 'Schwimmen / Kino / Tanzen …', '各種活動。', /\b(schwimmen|Kino|tanzen)\b/i),

  // ── 旅行與交通 ──
  mk('travel', 'Ich fahre mit [X].', '我搭乘某交通工具。', /\bich fahre mit\b/i),
  mk('travel', 'Wann fährt [X] ab?', '某交通工具幾點出發？', /\bfährt\b.*\bab\b/i),
  mk('travel', 'Zum Bahnhof / Zum Flughafen …', '車站／機場。', /\b(Fahrkarte|Bahnhof|Bahnsteig|Flughafen)\b/),
  mk('travel', 'Ich fliege nach [X].', '我搭機去某地。', /\bich fliege\b/i),
  mk('travel', 'Im Urlaub / Auf Reisen …', '度假與旅行。', /\b(Urlaub|Reise)\b/i),

  // ── 天氣 ──
  mk('weather', 'Heute ist es [X].', '今天天氣（某狀態）。', /\bheute ist es\b/i),
  mk('weather', 'Es regnet / Es schneit.', '下雨／下雪。', /\b(es regnet|es schneit)\b/i),
  mk('weather', 'Die Sonne scheint.', '出太陽。', /\bsonne\b/i),
  mk('weather', 'Es ist kalt / warm.', '冷熱描述。', /\bes ist (kalt|warm|heiß|kühl)\b/i),
  mk('weather', 'Wie ist das Wetter?', '天氣如何？', /\bwetter\b/i),

  // ── 問路 ──
  mk('directions', 'Wo ist [X]?', '某處在哪？', /\bwo ist\b/i),
  mk('directions', 'Wie komme ich zum [X]?', '怎麼去某處？', /\bwie komme ich\b/i),
  mk('directions', 'Geradeaus / nach links / nach rechts.', '直走／左轉／右轉。', /\b(geradeaus|nach links|nach rechts|links abbiegen|rechts abbiegen)\b/i),
  mk('directions', '… in der Nähe.', '在附近。', /\bin der nähe\b/i),

  // ── 預約與約時間 ──
  mk('appointment', 'Ich möchte einen Termin.', '我要預約。', /\bTermin\b/i),
  mk('appointment', 'Haben Sie Zeit?', '你有空嗎？', /\bhaben sie zeit\b/i),
  mk('appointment', 'Treffen wir uns um [X].', '我們幾點碰面。', /\btreffen wir uns\b/i),
  mk('appointment', 'Passt es dir / Ihnen?', '這時間方便嗎？', /\b(passt es|passt dir|passt ihnen)\b/i),

  // ── 寒暄閒聊 ──
  mk('smalltalk', 'Wie geht es dir?', '問候近況。', /\bwie geht\b/i),
  mk('smalltalk', 'Freut mich.', '幸會。', /\bfreut mich\b/i),
  mk('smalltalk', 'Bis bald / Bis später.', '道別用語。', /\bbis (bald|später|morgen|dann|gleich)\b/i),
  mk('smalltalk', 'Schönes Wochenende!', '祝福用語。', /\b(schönes wochenende|schönen tag|schönen abend)\b/i),

  // ── 郵局、銀行與電話 ──
  mk('communication', 'Ich rufe dich an. / am Telefon', '打電話。', /\b(Telefon|telefonier|anrufen|angerufen|Handy)\b/i),
  mk('communication', 'Ich schicke dir [X].', '寄信／寄包裹。', /\b(schicke|schicken|Brief|Paket|Post)\b/i),
  mk('communication', 'Ich bezahle / Mein Konto …', '付款與帳戶。', /\b(bezahle|bezahlen|Konto|Geld)\b/i),
  mk('communication', 'eine E-Mail / eine Nachricht', '電郵與訊息。', /\b(E-Mail|Mail|Nachricht|Internet)\b/i),
];
