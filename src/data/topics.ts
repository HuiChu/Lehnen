import type { Topic } from '../types';
import { generatedTopics } from './topics.generated';

/**
 * 內建德語語塊資料（A1–B1 日常情境）。
 * 每個語塊以「可重複套用的句型框架」為核心，[X] 為可替換成分，
 * 搭配 2–3 個真實情境例句，供跟讀練習。
 *
 * 例句為三語對照（de + zh + en）。手寫例句的 zh/en 皆為人工翻譯，
 * 故不帶 `aiTranslated` 標記；匯入語料（topics.generated.ts）才會帶來源與 AI 標記。
 */
const baseTopics: Topic[] = [
  {
    id: 'restaurant',
    title: 'Im Restaurant',
    titleZh: '在餐廳',
    emoji: '🍽️',
    level: 'A1',
    chunks: [
      {
        id: 'restaurant-1',
        pattern: 'Ich hätte gern [X].',
        patternZh: '我想要（點）某物。',
        examples: [
          { de: 'Ich hätte gern einen Kaffee.', zh: '我想要一杯咖啡。', en: "I'd like a coffee." },
          { de: 'Ich hätte gern die Speisekarte, bitte.', zh: '請給我菜單。', en: "I'd like the menu, please." },
          { de: 'Ich hätte gern ein Glas Wasser.', zh: '我想要一杯水。', en: "I'd like a glass of water." },
        ],
      },
      {
        id: 'restaurant-2',
        pattern: 'Könnte ich bitte [X] haben?',
        patternZh: '我可以要某物嗎？（更禮貌）',
        examples: [
          { de: 'Könnte ich bitte die Rechnung haben?', zh: '可以給我帳單嗎？', en: 'Could I have the bill, please?' },
          { de: 'Könnte ich bitte noch ein Bier haben?', zh: '可以再給我一杯啤酒嗎？', en: 'Could I have another beer, please?' },
        ],
      },
      {
        id: 'restaurant-3',
        pattern: 'Was können Sie mir [X] empfehlen?',
        patternZh: '您能推薦我什麼（某類）？',
        examples: [
          { de: 'Was können Sie mir zum Essen empfehlen?', zh: '您能推薦我什麼餐點？', en: 'What can you recommend me to eat?' },
          { de: 'Was können Sie mir als Nachtisch empfehlen?', zh: '您能推薦我什麼甜點？', en: 'What can you recommend me for dessert?' },
        ],
      },
      {
        id: 'restaurant-4',
        pattern: 'Ich nehme [X].',
        patternZh: '我要點某物（決定時）。',
        examples: [
          { de: 'Ich nehme das Schnitzel mit Pommes.', zh: '我要炸肉排配薯條。', en: "I'll take the schnitzel with fries." },
          { de: 'Ich nehme lieber den Salat.', zh: '我比較想要沙拉。', en: "I'd rather take the salad." },
        ],
      },
    ],
  },
  {
    id: 'directions',
    title: 'Nach dem Weg fragen',
    titleZh: '問路',
    emoji: '🧭',
    level: 'A1',
    chunks: [
      {
        id: 'directions-1',
        pattern: 'Entschuldigung, wo ist [X]?',
        patternZh: '不好意思，某地在哪裡？',
        examples: [
          { de: 'Entschuldigung, wo ist der Bahnhof?', zh: '不好意思，火車站在哪裡？', en: 'Excuse me, where is the train station?' },
          { de: 'Entschuldigung, wo ist die Toilette?', zh: '不好意思，廁所在哪裡？', en: 'Excuse me, where is the toilet?' },
        ],
      },
      {
        id: 'directions-2',
        pattern: 'Wie komme ich zum / zur [X]?',
        patternZh: '我要怎麼去某地？',
        examples: [
          { de: 'Wie komme ich zum Hauptbahnhof?', zh: '我要怎麼去中央車站？', en: 'How do I get to the main station?' },
          { de: 'Wie komme ich zur Innenstadt?', zh: '我要怎麼去市中心？', en: 'How do I get to the city centre?' },
        ],
      },
      {
        id: 'directions-3',
        pattern: 'Ist es weit bis [X]?',
        patternZh: '到某地遠嗎？',
        examples: [
          { de: 'Ist es weit bis zum Museum?', zh: '到博物館遠嗎？', en: 'Is it far to the museum?' },
          { de: 'Ist es weit bis zur Haltestelle?', zh: '到車站遠嗎？', en: 'Is it far to the stop?' },
        ],
      },
      {
        id: 'directions-4',
        pattern: 'Können Sie mir [X] zeigen?',
        patternZh: '您能指給我看某物嗎？',
        examples: [
          { de: 'Können Sie mir das auf der Karte zeigen?', zh: '您能在地圖上指給我看嗎？', en: 'Can you show me that on the map?' },
          { de: 'Können Sie mir den Weg zeigen?', zh: '您能指給我看路嗎？', en: 'Can you show me the way?' },
        ],
      },
    ],
  },
  {
    id: 'introduction',
    title: 'Sich vorstellen',
    titleZh: '自我介紹',
    emoji: '👋',
    level: 'A1',
    chunks: [
      {
        id: 'introduction-1',
        pattern: 'Ich heiße [X].',
        patternZh: '我叫某名字。',
        examples: [
          { de: 'Ich heiße Anna und komme aus Taiwan.', zh: '我叫 Anna，來自台灣。', en: "My name is Anna and I'm from Taiwan." },
          { de: 'Ich heiße Wei und wohne in Berlin.', zh: '我叫 Wei，住在柏林。', en: 'My name is Wei and I live in Berlin.' },
        ],
      },
      {
        id: 'introduction-2',
        pattern: 'Ich komme aus [X].',
        patternZh: '我來自某地。',
        examples: [
          { de: 'Ich komme aus Taipeh.', zh: '我來自台北。', en: "I'm from Taipei." },
          { de: 'Ich komme aus einer kleinen Stadt.', zh: '我來自一個小城市。', en: "I'm from a small town." },
        ],
      },
      {
        id: 'introduction-3',
        pattern: 'Ich arbeite als [X].',
        patternZh: '我的職業是某職位。',
        examples: [
          { de: 'Ich arbeite als Ingenieurin.', zh: '我是工程師。', en: 'I work as an engineer.' },
          { de: 'Ich arbeite als Lehrer an einer Schule.', zh: '我在一所學校當老師。', en: 'I work as a teacher at a school.' },
        ],
      },
      {
        id: 'introduction-4',
        pattern: 'In meiner Freizeit [X] ich gern.',
        patternZh: '我空閒時喜歡做某事。',
        examples: [
          { de: 'In meiner Freizeit koche ich gern.', zh: '我空閒時喜歡做菜。', en: 'In my free time I like to cook.' },
          { de: 'In meiner Freizeit lese ich gern.', zh: '我空閒時喜歡閱讀。', en: 'In my free time I like to read.' },
        ],
      },
    ],
  },
  {
    id: 'shopping',
    title: 'Beim Einkaufen',
    titleZh: '購物',
    emoji: '🛍️',
    level: 'A2',
    chunks: [
      {
        id: 'shopping-1',
        pattern: 'Was kostet [X]?',
        patternZh: '某物多少錢？',
        examples: [
          { de: 'Was kostet dieses T-Shirt?', zh: '這件 T 恤多少錢？', en: 'How much is this T-shirt?' },
          { de: 'Was kostet das alles zusammen?', zh: '這些全部一共多少錢？', en: 'How much is all this together?' },
        ],
      },
      {
        id: 'shopping-2',
        pattern: 'Haben Sie [X] in einer anderen Größe?',
        patternZh: '您有別的尺寸的某物嗎？',
        examples: [
          { de: 'Haben Sie die Schuhe in einer anderen Größe?', zh: '這雙鞋您有別的尺寸嗎？', en: 'Do you have these shoes in another size?' },
          { de: 'Haben Sie die Jacke in einer anderen Farbe?', zh: '這件外套您有別的顏色嗎？', en: 'Do you have this jacket in another colour?' },
        ],
      },
      {
        id: 'shopping-3',
        pattern: 'Kann ich [X] anprobieren?',
        patternZh: '我可以試穿某物嗎？',
        examples: [
          { de: 'Kann ich die Hose anprobieren?', zh: '我可以試穿這條褲子嗎？', en: 'Can I try on these trousers?' },
          { de: 'Kann ich das mal anprobieren?', zh: '我可以試穿一下這個嗎？', en: 'Can I try this on?' },
        ],
      },
      {
        id: 'shopping-4',
        pattern: 'Ich suche [X].',
        patternZh: '我在找某物。',
        examples: [
          { de: 'Ich suche ein Geschenk für meine Mutter.', zh: '我在找給我媽媽的禮物。', en: "I'm looking for a present for my mother." },
          { de: 'Ich suche etwas Warmes für den Winter.', zh: '我在找冬天穿的保暖衣物。', en: "I'm looking for something warm for the winter." },
        ],
      },
    ],
  },
  {
    id: 'appointment',
    title: 'Termine vereinbaren',
    titleZh: '預約與約時間',
    emoji: '📅',
    level: 'B1',
    chunks: [
      {
        id: 'appointment-1',
        pattern: 'Ich möchte einen Termin für [X] vereinbaren.',
        patternZh: '我想預約某事的時間。',
        examples: [
          { de: 'Ich möchte einen Termin für nächste Woche vereinbaren.', zh: '我想預約下週的時間。', en: "I'd like to arrange an appointment for next week." },
          { de: 'Ich möchte einen Termin beim Arzt vereinbaren.', zh: '我想預約看醫生的時間。', en: "I'd like to arrange an appointment with the doctor." },
        ],
      },
      {
        id: 'appointment-2',
        pattern: 'Passt es Ihnen am [X]?',
        patternZh: '您某時間方便嗎？',
        examples: [
          { de: 'Passt es Ihnen am Montagvormittag?', zh: '您週一上午方便嗎？', en: 'Does Monday morning suit you?' },
          { de: 'Passt es Ihnen am Wochenende?', zh: '您週末方便嗎？', en: 'Does the weekend suit you?' },
        ],
      },
      {
        id: 'appointment-3',
        pattern: 'Leider muss ich den Termin [X].',
        patternZh: '很抱歉，我必須（改/取消）這個約。',
        examples: [
          { de: 'Leider muss ich den Termin verschieben.', zh: '很抱歉，我必須改期。', en: 'Unfortunately I have to postpone the appointment.' },
          { de: 'Leider muss ich den Termin absagen.', zh: '很抱歉，我必須取消這個約。', en: 'Unfortunately I have to cancel the appointment.' },
        ],
      },
    ],
  },
  {
    id: 'smalltalk',
    title: 'Smalltalk',
    titleZh: '寒暄閒聊',
    emoji: '💬',
    level: 'A2',
    chunks: [
      {
        id: 'smalltalk-1',
        pattern: 'Wie geht es Ihnen [X]?',
        patternZh: '您（某情況下）過得如何？',
        examples: [
          { de: 'Wie geht es Ihnen heute?', zh: '您今天過得如何？', en: 'How are you today?' },
          { de: 'Wie geht es Ihnen nach dem Urlaub?', zh: '您度假後過得如何？', en: 'How are you after the holiday?' },
        ],
      },
      {
        id: 'smalltalk-2',
        pattern: 'Was hältst du von [X]?',
        patternZh: '你覺得某事怎麼樣？',
        examples: [
          { de: 'Was hältst du von dem neuen Film?', zh: '你覺得那部新電影怎麼樣？', en: 'What do you think of the new film?' },
          { de: 'Was hältst du von dem Wetter heute?', zh: '你覺得今天的天氣怎麼樣？', en: 'What do you think of the weather today?' },
        ],
      },
      {
        id: 'smalltalk-3',
        pattern: 'Ich finde, dass [X].',
        patternZh: '我覺得某想法。',
        examples: [
          { de: 'Ich finde, dass das eine gute Idee ist.', zh: '我覺得這是個好主意。', en: 'I think that this is a good idea.' },
          { de: 'Ich finde, dass wir uns öfter treffen sollten.', zh: '我覺得我們應該更常見面。', en: 'I think that we should meet more often.' },
        ],
      },
      {
        id: 'smalltalk-4',
        pattern: 'Hast du am [X] Zeit?',
        patternZh: '你某時間有空嗎？',
        examples: [
          { de: 'Hast du am Wochenende Zeit?', zh: '你週末有空嗎？', en: 'Do you have time at the weekend?' },
          { de: 'Hast du am Abend Zeit für einen Kaffee?', zh: '你晚上有空喝杯咖啡嗎？', en: 'Do you have time for a coffee in the evening?' },
        ],
      },
    ],
  },
];

/**
 * 合併手寫 topics 與匯入產生的 topics（topics.generated.ts，由 scripts/build-chunks.mjs 產出）。
 * 同 id 主題 → 併入新語塊（去重）；新主題 → 追加。
 */
function mergeTopics(base: Topic[], extra: Topic[]): Topic[] {
  const byId = new Map<string, Topic>(
    base.map((t) => [t.id, { ...t, chunks: [...t.chunks] }])
  );
  for (const t of extra) {
    const existing = byId.get(t.id);
    if (existing) {
      const seen = new Set(existing.chunks.map((c) => c.id));
      existing.chunks.push(...t.chunks.filter((c) => !seen.has(c.id)));
    } else {
      byId.set(t.id, { ...t, chunks: [...t.chunks] });
    }
  }
  return [...byId.values()];
}

export const topics: Topic[] = mergeTopics(baseTopics, generatedTopics);

export const findTopic = (id: string): Topic | undefined =>
  topics.find((t) => t.id === id);
