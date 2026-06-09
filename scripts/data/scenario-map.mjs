/**
 * scenario-map.mjs — App 情境（Topic）登錄表，對應歌德官方詞彙書的 Themen。
 *
 * 用途：
 *  1. parse-goethe-wortliste.mjs 依 `themeKeywords` 把詞表的主題標題歸到對應情境。
 *  2. build-chunks.mjs / seed-patterns.mjs 依此產生各情境的 Tatoeba 取句種子。
 *
 * `themePath` 與 src/data/topics.ts 的 Topic.themePath 對齊。
 */

/** @typedef {{ id:string, title:string, titleZh:string, emoji:string, level:'A1'|'A2'|'B1', themePath:string, themeKeywords:string[] }} Scenario */

/** @type {Scenario[]} */
export const scenarios = [
  { id: 'introduction', title: 'Sich vorstellen', titleZh: '自我介紹', emoji: '👋', level: 'A1', themePath: 'Person', themeKeywords: ['Person', 'Name', 'Adresse', 'Herkunft', 'Nationalität', 'Staatsangehörigkeit'] },
  { id: 'family', title: 'Familie & Freunde', titleZh: '家庭與朋友', emoji: '👪', level: 'A1', themePath: 'Person/Familie', themeKeywords: ['Familie', 'Familienstand', 'Beziehungen', 'Freunde'] },
  { id: 'daily', title: 'Tagesablauf', titleZh: '日常作息與時間', emoji: '⏰', level: 'A1', themePath: 'Person/Tagesablauf', themeKeywords: ['Tagesablauf', 'Gewohnheiten', 'Uhrzeit', 'Zeit'] },
  { id: 'housing', title: 'Wohnung & Wohnen', titleZh: '居住與租屋', emoji: '🏠', level: 'A2', themePath: 'Wohnen', themeKeywords: ['Wohnen', 'Wohnung', 'Räume', 'Möbel', 'Einrichtung', 'Miete'] },
  { id: 'food', title: 'Essen & Einkaufen', titleZh: '飲食與採買', emoji: '🛒', level: 'A1', themePath: 'Essen und Trinken', themeKeywords: ['Essen', 'Trinken', 'Lebensmittel', 'Einkaufen', 'Geschäft'] },
  { id: 'restaurant', title: 'Im Restaurant', titleZh: '在餐廳', emoji: '🍽️', level: 'A1', themePath: 'Essen und Trinken/Restaurant', themeKeywords: ['Restaurant', 'Lokal', 'Speisekarte'] },
  { id: 'shopping', title: 'Beim Einkaufen', titleZh: '購物', emoji: '🛍️', level: 'A2', themePath: 'Einkaufen', themeKeywords: ['Einkaufen', 'Kleidung', 'Geschäfte', 'Preis'] },
  { id: 'health', title: 'Beim Arzt', titleZh: '健康與看醫生', emoji: '🩺', level: 'A2', themePath: 'Gesundheit', themeKeywords: ['Gesundheit', 'Körper', 'Krankheit', 'Arzt', 'Apotheke'] },
  { id: 'work', title: 'Arbeit & Beruf', titleZh: '工作與職業', emoji: '💼', level: 'A2', themePath: 'Arbeit', themeKeywords: ['Arbeit', 'Beruf', 'Büro', 'Kollegen'] },
  { id: 'freetime', title: 'Freizeit & Hobbys', titleZh: '休閒與嗜好', emoji: '⚽', level: 'A1', themePath: 'Freizeit', themeKeywords: ['Freizeit', 'Hobby', 'Sport', 'Unterhaltung'] },
  { id: 'travel', title: 'Reisen & Verkehr', titleZh: '旅行與交通', emoji: '🚆', level: 'A2', themePath: 'Reisen/Verkehr', themeKeywords: ['Reisen', 'Verkehr', 'Urlaub', 'Unterkunft', 'Bahn', 'Flugzeug'] },
  { id: 'weather', title: 'Das Wetter', titleZh: '天氣', emoji: '🌦️', level: 'A1', themePath: 'Umwelt/Wetter', themeKeywords: ['Wetter', 'Klima', 'Umwelt', 'Natur'] },
  { id: 'communication', title: 'Post, Bank & Telefon', titleZh: '郵局、銀行與電話', emoji: '📮', level: 'A2', themePath: 'Bank/Post/Telefon', themeKeywords: ['Post', 'Bank', 'Telefon', 'Internet', 'Kommunikation'] },
  { id: 'directions', title: 'Nach dem Weg fragen', titleZh: '問路', emoji: '🧭', level: 'A1', themePath: 'Orientierung', themeKeywords: ['Weg', 'Orientierung', 'Richtung', 'Ort'] },
  { id: 'appointment', title: 'Termine vereinbaren', titleZh: '預約與約時間', emoji: '📅', level: 'B1', themePath: 'Dienstleistungen', themeKeywords: ['Termin', 'Verabredung', 'Dienstleistung'] },
  { id: 'smalltalk', title: 'Smalltalk', titleZh: '寒暄閒聊', emoji: '💬', level: 'A2', themePath: 'Soziale Kontakte', themeKeywords: ['Kontakt', 'Meinung', 'Gefühle', 'Smalltalk'] },
];

/** 依詞表主題標題找最相符的情境 id（找不到回傳 null） */
export function scenarioForTheme(themeTitle) {
  const t = (themeTitle || '').toLowerCase();
  for (const s of scenarios) {
    if (s.themeKeywords.some((k) => t.includes(k.toLowerCase()))) return s.id;
  }
  return null;
}

export const scenarioById = Object.fromEntries(scenarios.map((s) => [s.id, s]));
