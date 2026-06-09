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

  // ───────────────────────────────────────────────────────────────
  // 以下情境依歌德 A1/A2 官方詞彙主題（Themen）擴充。
  // 例句為手寫真實德文，附名詞陰陽性／複數與介係詞格的文法標記（marks）。
  // ───────────────────────────────────────────────────────────────
  {
    id: 'family',
    title: 'Familie & Freunde',
    titleZh: '家庭與朋友',
    emoji: '👪',
    level: 'A1',
    themePath: 'Person/Familie',
    chunks: [
      {
        id: 'family-1',
        pattern: 'Das ist mein / meine [X].',
        patternZh: '這是我的（某位家人）。',
        grammarFocus: 'gender',
        examples: [
          {
            de: 'Das ist meine Schwester.',
            zh: '這是我姊姊／妹妹。',
            en: 'This is my sister.',
            marks: [{ text: 'Schwester', pos: 'noun', gender: 'f', plural: 'Schwestern', lemma: 'Schwester' }],
          },
          {
            de: 'Das ist mein Bruder.',
            zh: '這是我哥哥／弟弟。',
            en: 'This is my brother.',
            marks: [{ text: 'Bruder', pos: 'noun', gender: 'm', plural: 'Brüder', lemma: 'Bruder' }],
          },
          {
            de: 'Das sind meine Eltern.',
            zh: '這是我的父母。',
            en: 'These are my parents.',
            marks: [{ text: 'Eltern', pos: 'noun', lemma: 'Eltern', note: '只有複數形（Pluraletantum）' }],
          },
        ],
      },
      {
        id: 'family-2',
        pattern: 'Ich habe [X] Geschwister.',
        patternZh: '我有幾個兄弟姊妹。',
        grammarFocus: 'gender',
        examples: [
          {
            de: 'Ich habe zwei Geschwister.',
            zh: '我有兩個兄弟姊妹。',
            en: 'I have two siblings.',
            marks: [{ text: 'Geschwister', pos: 'noun', lemma: 'Geschwister', note: '只有複數形' }],
          },
          {
            de: 'Mein Vater kommt aus Taiwan.',
            zh: '我爸爸來自台灣。',
            en: 'My father is from Taiwan.',
            marks: [
              { text: 'Vater', pos: 'noun', gender: 'm', plural: 'Väter', lemma: 'Vater' },
              { text: 'aus', pos: 'prep', governs: 'dat', lemma: 'aus' },
            ],
          },
        ],
      },
      {
        id: 'family-3',
        pattern: 'Ich wohne bei / mit [X].',
        patternZh: '我和某人住。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich wohne bei meinen Eltern.',
            zh: '我和父母住。',
            en: 'I live with my parents.',
            marks: [
              { text: 'bei', pos: 'prep', governs: 'dat', lemma: 'bei' },
              { text: 'Eltern', pos: 'noun', lemma: 'Eltern', note: '只有複數形' },
            ],
          },
          {
            de: 'Ich wohne mit meinem Mann zusammen.',
            zh: '我和我先生住在一起。',
            en: 'I live together with my husband.',
            marks: [
              { text: 'mit', pos: 'prep', governs: 'dat', lemma: 'mit' },
              { text: 'Mann', pos: 'noun', gender: 'm', plural: 'Männer', lemma: 'Mann' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'housing',
    title: 'Wohnung & Wohnen',
    titleZh: '居住與租屋',
    emoji: '🏠',
    level: 'A2',
    themePath: 'Wohnen',
    chunks: [
      {
        id: 'housing-1',
        pattern: 'Ich suche [X].',
        patternZh: '我在找（住處）。',
        grammarFocus: 'gender',
        examples: [
          {
            de: 'Ich suche eine Wohnung im Zentrum.',
            zh: '我在找市中心的公寓。',
            en: "I'm looking for a flat in the city centre.",
            marks: [
              { text: 'Wohnung', pos: 'noun', gender: 'f', plural: 'Wohnungen', lemma: 'Wohnung' },
              { text: 'im', pos: 'prep', governs: 'dat', lemma: 'in', note: 'in + dem（地點）' },
              { text: 'Zentrum', pos: 'noun', gender: 'n', plural: 'Zentren', lemma: 'Zentrum' },
            ],
          },
          {
            de: 'Ich suche ein möbliertes Zimmer.',
            zh: '我在找一間附家具的房間。',
            en: "I'm looking for a furnished room.",
            marks: [{ text: 'Zimmer', pos: 'noun', gender: 'n', plural: 'Zimmer', lemma: 'Zimmer' }],
          },
        ],
      },
      {
        id: 'housing-2',
        pattern: 'Die Miete kostet [X] Euro.',
        patternZh: '租金是多少。',
        grammarFocus: 'gender',
        examples: [
          {
            de: 'Die Miete kostet 600 Euro im Monat.',
            zh: '租金每月六百歐元。',
            en: 'The rent is 600 euros a month.',
            marks: [
              { text: 'Miete', pos: 'noun', gender: 'f', plural: 'Mieten', lemma: 'Miete' },
              { text: 'im', pos: 'prep', governs: 'dat', lemma: 'in', note: 'in + dem' },
              { text: 'Monat', pos: 'noun', gender: 'm', plural: 'Monate', lemma: 'Monat' },
            ],
          },
          {
            de: 'Die Wohnung hat drei Zimmer.',
            zh: '這間公寓有三個房間。',
            en: 'The flat has three rooms.',
            marks: [
              { text: 'Wohnung', pos: 'noun', gender: 'f', plural: 'Wohnungen', lemma: 'Wohnung' },
              { text: 'Zimmer', pos: 'noun', gender: 'n', plural: 'Zimmer', lemma: 'Zimmer' },
            ],
          },
        ],
      },
      {
        id: 'housing-3',
        pattern: 'Gibt es [X] in der Nähe?',
        patternZh: '附近有（某設施）嗎？',
        grammarFocus: 'gender',
        examples: [
          {
            de: 'Gibt es einen Supermarkt in der Nähe?',
            zh: '附近有超市嗎？',
            en: 'Is there a supermarket nearby?',
            marks: [
              { text: 'Supermarkt', pos: 'noun', gender: 'm', plural: 'Supermärkte', lemma: 'Supermarkt' },
              { text: 'in', pos: 'prep', governs: 'dat', kasus: 'dat', lemma: 'in', note: 'in der Nähe（地點 → Dat）' },
            ],
          },
          {
            de: 'Gibt es eine Haltestelle in der Nähe?',
            zh: '附近有公車站嗎？',
            en: 'Is there a bus stop nearby?',
            marks: [{ text: 'Haltestelle', pos: 'noun', gender: 'f', plural: 'Haltestellen', lemma: 'Haltestelle' }],
          },
        ],
      },
    ],
  },
  {
    id: 'daily',
    title: 'Tagesablauf',
    titleZh: '日常作息與時間',
    emoji: '⏰',
    level: 'A1',
    themePath: 'Person/Tagesablauf',
    chunks: [
      {
        id: 'daily-1',
        pattern: 'Ich stehe um [X] Uhr auf.',
        patternZh: '我幾點起床。',
        grammarFocus: 'praepositionen',
        examples: [
          {
            de: 'Ich stehe um sieben Uhr auf.',
            zh: '我七點起床。',
            en: 'I get up at seven.',
            marks: [
              { text: 'um', pos: 'prep', governs: 'akk', lemma: 'um' },
              { text: 'Uhr', pos: 'noun', gender: 'f', plural: 'Uhren', lemma: 'Uhr' },
            ],
          },
          {
            de: 'Am Wochenende stehe ich später auf.',
            zh: '週末我比較晚起。',
            en: 'At the weekend I get up later.',
            marks: [
              { text: 'Am', pos: 'prep', governs: 'dat', lemma: 'an', note: 'an + dem' },
              { text: 'Wochenende', pos: 'noun', gender: 'n', plural: 'Wochenenden', lemma: 'Wochenende' },
            ],
          },
        ],
      },
      {
        id: 'daily-2',
        pattern: 'Nach dem [X] gehe ich zur Arbeit.',
        patternZh: '做完某事後我去上班。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Nach dem Frühstück fahre ich ins Büro.',
            zh: '吃完早餐我去辦公室。',
            en: 'After breakfast I go to the office.',
            marks: [
              { text: 'Nach', pos: 'prep', governs: 'dat', lemma: 'nach' },
              { text: 'Frühstück', pos: 'noun', gender: 'n', plural: 'Frühstücke', lemma: 'Frühstück' },
              { text: 'ins', pos: 'prep', governs: 'akk', lemma: 'in', note: 'in + das（方向）' },
              { text: 'Büro', pos: 'noun', gender: 'n', plural: 'Büros', lemma: 'Büro' },
            ],
          },
          {
            de: 'Um acht Uhr gehe ich zur Arbeit.',
            zh: '我八點去上班。',
            en: 'At eight I go to work.',
            marks: [
              { text: 'Um', pos: 'prep', governs: 'akk', lemma: 'um' },
              { text: 'zur', pos: 'prep', governs: 'dat', lemma: 'zu', note: 'zu + der' },
              { text: 'Arbeit', pos: 'noun', gender: 'f', plural: 'Arbeiten', lemma: 'Arbeit' },
            ],
          },
        ],
      },
      {
        id: 'daily-3',
        pattern: 'Am Abend [X] ich gern.',
        patternZh: '我晚上喜歡做某事。',
        grammarFocus: 'praepositionen',
        examples: [
          {
            de: 'Am Abend koche ich für meine Familie.',
            zh: '晚上我為家人做飯。',
            en: 'In the evening I cook for my family.',
            marks: [
              { text: 'Am', pos: 'prep', governs: 'dat', lemma: 'an', note: 'an + dem' },
              { text: 'Abend', pos: 'noun', gender: 'm', plural: 'Abende', lemma: 'Abend' },
              { text: 'für', pos: 'prep', governs: 'akk', lemma: 'für' },
              { text: 'Familie', pos: 'noun', gender: 'f', plural: 'Familien', lemma: 'Familie' },
            ],
          },
          {
            de: 'Heute habe ich leider keine Zeit.',
            zh: '我今天可惜沒空。',
            en: "Unfortunately I don't have time today.",
            marks: [{ text: 'Zeit', pos: 'noun', gender: 'f', plural: 'Zeiten', lemma: 'Zeit' }],
          },
        ],
      },
    ],
  },
  {
    id: 'food',
    title: 'Essen & Einkaufen',
    titleZh: '飲食與採買',
    emoji: '🛒',
    level: 'A1',
    themePath: 'Essen und Trinken',
    chunks: [
      {
        id: 'food-1',
        pattern: 'Ich kaufe [X].',
        patternZh: '我買某食材。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich kaufe Obst und Gemüse auf dem Markt.',
            zh: '我在市場買水果和蔬菜。',
            en: 'I buy fruit and vegetables at the market.',
            marks: [
              { text: 'Obst', pos: 'noun', gender: 'n', lemma: 'Obst', note: '不可數，無複數' },
              { text: 'Gemüse', pos: 'noun', gender: 'n', lemma: 'Gemüse', note: '不可數，無複數' },
              { text: 'auf', pos: 'prep', governs: 'dat', kasus: 'dat', lemma: 'auf', note: '地點 → Dat' },
              { text: 'Markt', pos: 'noun', gender: 'm', plural: 'Märkte', lemma: 'Markt' },
            ],
          },
          {
            de: 'Ich kaufe Brot beim Bäcker.',
            zh: '我在麵包店買麵包。',
            en: 'I buy bread at the bakery.',
            marks: [
              { text: 'Brot', pos: 'noun', gender: 'n', plural: 'Brote', lemma: 'Brot' },
              { text: 'beim', pos: 'prep', governs: 'dat', lemma: 'bei', note: 'bei + dem' },
              { text: 'Bäcker', pos: 'noun', gender: 'm', plural: 'Bäcker', lemma: 'Bäcker' },
            ],
          },
        ],
      },
      {
        id: 'food-2',
        pattern: 'Zum Frühstück esse ich [X].',
        patternZh: '我早餐吃某物。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Zum Frühstück esse ich ein Brötchen.',
            zh: '我早餐吃一個小麵包。',
            en: 'For breakfast I eat a bread roll.',
            marks: [
              { text: 'Zum', pos: 'prep', governs: 'dat', lemma: 'zu', note: 'zu + dem' },
              { text: 'Brötchen', pos: 'noun', gender: 'n', plural: 'Brötchen', lemma: 'Brötchen' },
            ],
          },
          {
            de: 'Zum Mittagessen gibt es oft Suppe.',
            zh: '午餐常常是湯。',
            en: 'For lunch there is often soup.',
            marks: [
              { text: 'Mittagessen', pos: 'noun', gender: 'n', plural: 'Mittagessen', lemma: 'Mittagessen' },
              { text: 'Suppe', pos: 'noun', gender: 'f', plural: 'Suppen', lemma: 'Suppe' },
            ],
          },
        ],
      },
      {
        id: 'food-3',
        pattern: 'Ich trinke gern [X].',
        patternZh: '我喜歡喝某飲料。',
        grammarFocus: 'gender',
        examples: [
          {
            de: 'Ich trinke gern Kaffee mit Milch.',
            zh: '我喜歡喝加牛奶的咖啡。',
            en: 'I like to drink coffee with milk.',
            marks: [
              { text: 'Kaffee', pos: 'noun', gender: 'm', lemma: 'Kaffee' },
              { text: 'mit', pos: 'prep', governs: 'dat', lemma: 'mit' },
              { text: 'Milch', pos: 'noun', gender: 'f', lemma: 'Milch', note: '通常不可數' },
            ],
          },
          {
            de: 'Jeden Morgen trinke ich einen Tee.',
            zh: '我每天早上喝一杯茶。',
            en: 'Every morning I drink a cup of tea.',
            marks: [
              { text: 'Morgen', pos: 'noun', gender: 'm', plural: 'Morgen', lemma: 'Morgen' },
              { text: 'Tee', pos: 'noun', gender: 'm', plural: 'Tees', lemma: 'Tee' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'health',
    title: 'Beim Arzt',
    titleZh: '健康與看醫生',
    emoji: '🩺',
    level: 'A2',
    themePath: 'Gesundheit',
    chunks: [
      {
        id: 'health-1',
        pattern: 'Ich habe [X]schmerzen.',
        patternZh: '我哪裡痛。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich habe seit gestern Kopfschmerzen.',
            zh: '我從昨天開始頭痛。',
            en: 'I have had a headache since yesterday.',
            marks: [
              { text: 'seit', pos: 'prep', governs: 'dat', lemma: 'seit' },
              { text: 'Kopfschmerzen', pos: 'noun', lemma: 'Kopfschmerzen', note: '通常用複數' },
            ],
          },
          {
            de: 'Mir tut der Hals weh.',
            zh: '我喉嚨痛。',
            en: 'My throat hurts.',
            marks: [{ text: 'Hals', pos: 'noun', gender: 'm', plural: 'Hälse', lemma: 'Hals' }],
          },
        ],
      },
      {
        id: 'health-2',
        pattern: 'Ich möchte einen Termin bei [X].',
        patternZh: '我想跟某醫生約診。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich möchte einen Termin bei der Ärztin.',
            zh: '我想跟（女）醫生約診。',
            en: "I'd like an appointment with the doctor.",
            marks: [
              { text: 'Termin', pos: 'noun', gender: 'm', plural: 'Termine', lemma: 'Termin' },
              { text: 'bei', pos: 'prep', governs: 'dat', lemma: 'bei' },
              { text: 'Ärztin', pos: 'noun', gender: 'f', plural: 'Ärztinnen', lemma: 'Ärztin' },
            ],
          },
          {
            de: 'Morgen gehe ich zum Arzt.',
            zh: '我明天去看醫生。',
            en: 'Tomorrow I go to the doctor.',
            marks: [
              { text: 'zum', pos: 'prep', governs: 'dat', lemma: 'zu', note: 'zu + dem' },
              { text: 'Arzt', pos: 'noun', gender: 'm', plural: 'Ärzte', lemma: 'Arzt' },
            ],
          },
        ],
      },
      {
        id: 'health-3',
        pattern: 'Nehmen Sie [X].',
        patternZh: '請服用某藥。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Nehmen Sie die Tabletten dreimal am Tag.',
            zh: '請一天服用藥片三次。',
            en: 'Take the tablets three times a day.',
            marks: [
              { text: 'Tabletten', pos: 'noun', gender: 'f', plural: 'Tabletten', lemma: 'Tablette' },
              { text: 'am', pos: 'prep', governs: 'dat', lemma: 'an', note: 'an + dem' },
              { text: 'Tag', pos: 'noun', gender: 'm', plural: 'Tage', lemma: 'Tag' },
            ],
          },
          {
            de: 'Nehmen Sie das Medikament nach dem Essen.',
            zh: '請飯後服藥。',
            en: 'Take the medicine after the meal.',
            marks: [
              { text: 'Medikament', pos: 'noun', gender: 'n', plural: 'Medikamente', lemma: 'Medikament' },
              { text: 'nach', pos: 'prep', governs: 'dat', lemma: 'nach' },
              { text: 'Essen', pos: 'noun', gender: 'n', lemma: 'Essen' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'work',
    title: 'Arbeit & Beruf',
    titleZh: '工作與職業',
    emoji: '💼',
    level: 'A2',
    themePath: 'Arbeit',
    chunks: [
      {
        id: 'work-1',
        pattern: 'Ich arbeite bei / in [X].',
        patternZh: '我在某處工作。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich arbeite bei einer Firma in München.',
            zh: '我在慕尼黑的一家公司工作。',
            en: 'I work at a company in Munich.',
            marks: [
              { text: 'bei', pos: 'prep', governs: 'dat', lemma: 'bei' },
              { text: 'Firma', pos: 'noun', gender: 'f', plural: 'Firmen', lemma: 'Firma' },
            ],
          },
          {
            de: 'Ich arbeite in einem Krankenhaus.',
            zh: '我在一家醫院工作。',
            en: 'I work in a hospital.',
            marks: [
              { text: 'in', pos: 'prep', governs: 'dat', kasus: 'dat', lemma: 'in', note: '地點 → Dat' },
              { text: 'Krankenhaus', pos: 'noun', gender: 'n', plural: 'Krankenhäuser', lemma: 'Krankenhaus' },
            ],
          },
        ],
      },
      {
        id: 'work-2',
        pattern: 'Ich bin [X] von Beruf.',
        patternZh: '我的職業是某職位。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich bin Lehrerin von Beruf.',
            zh: '我的職業是老師（女）。',
            en: 'I am a teacher by profession.',
            marks: [
              { text: 'Lehrerin', pos: 'noun', gender: 'f', plural: 'Lehrerinnen', lemma: 'Lehrerin' },
              { text: 'von', pos: 'prep', governs: 'dat', lemma: 'von' },
              { text: 'Beruf', pos: 'noun', gender: 'm', plural: 'Berufe', lemma: 'Beruf' },
            ],
          },
          {
            de: 'Mein Bruder ist Ingenieur.',
            zh: '我哥哥是工程師。',
            en: 'My brother is an engineer.',
            marks: [
              { text: 'Bruder', pos: 'noun', gender: 'm', plural: 'Brüder', lemma: 'Bruder' },
              { text: 'Ingenieur', pos: 'noun', gender: 'm', plural: 'Ingenieure', lemma: 'Ingenieur' },
            ],
          },
        ],
      },
      {
        id: 'work-3',
        pattern: 'Nach der Arbeit [X] ich.',
        patternZh: '下班後我做某事。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Nach der Arbeit treffe ich Freunde.',
            zh: '下班後我和朋友見面。',
            en: 'After work I meet friends.',
            marks: [
              { text: 'Nach', pos: 'prep', governs: 'dat', lemma: 'nach' },
              { text: 'Arbeit', pos: 'noun', gender: 'f', plural: 'Arbeiten', lemma: 'Arbeit' },
              { text: 'Freunde', pos: 'noun', gender: 'm', plural: 'Freunde', lemma: 'Freund' },
            ],
          },
          {
            de: 'Ich verstehe mich gut mit meinen Kollegen.',
            zh: '我和同事相處得很好。',
            en: 'I get along well with my colleagues.',
            marks: [
              { text: 'mit', pos: 'prep', governs: 'dat', lemma: 'mit' },
              { text: 'Kollegen', pos: 'noun', gender: 'm', plural: 'Kollegen', lemma: 'Kollege', note: 'n-變化名詞' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'freetime',
    title: 'Freizeit & Hobbys',
    titleZh: '休閒與嗜好',
    emoji: '⚽',
    level: 'A1',
    themePath: 'Freizeit',
    chunks: [
      {
        id: 'freetime-1',
        pattern: 'In meiner Freizeit [X] ich gern.',
        patternZh: '我空閒時喜歡做某事。',
        grammarFocus: 'praepositionen',
        examples: [
          {
            de: 'In meiner Freizeit spiele ich gern Fußball.',
            zh: '我空閒時喜歡踢足球。',
            en: 'In my free time I like to play football.',
            marks: [
              { text: 'Freizeit', pos: 'noun', gender: 'f', lemma: 'Freizeit' },
              { text: 'Fußball', pos: 'noun', gender: 'm', plural: 'Fußbälle', lemma: 'Fußball' },
            ],
          },
          {
            de: 'In meiner Freizeit gehe ich gern ins Kino.',
            zh: '我空閒時喜歡去看電影。',
            en: 'In my free time I like to go to the cinema.',
            marks: [
              { text: 'ins', pos: 'prep', governs: 'akk', lemma: 'in', note: 'in + das（方向）' },
              { text: 'Kino', pos: 'noun', gender: 'n', plural: 'Kinos', lemma: 'Kino' },
            ],
          },
        ],
      },
      {
        id: 'freetime-2',
        pattern: 'Ich treffe mich mit [X].',
        patternZh: '我和某人見面。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich treffe mich mit Freunden im Park.',
            zh: '我和朋友在公園見面。',
            en: 'I meet up with friends in the park.',
            marks: [
              { text: 'mit', pos: 'prep', governs: 'dat', lemma: 'mit' },
              { text: 'Freunden', pos: 'noun', gender: 'm', plural: 'Freunde', lemma: 'Freund' },
              { text: 'im', pos: 'prep', governs: 'dat', lemma: 'in', note: 'in + dem（地點）' },
              { text: 'Park', pos: 'noun', gender: 'm', plural: 'Parks', lemma: 'Park' },
            ],
          },
          {
            de: 'Am Sonntag mache ich einen Ausflug.',
            zh: '我星期天去郊遊。',
            en: 'On Sunday I go on an excursion.',
            marks: [
              { text: 'Am', pos: 'prep', governs: 'dat', lemma: 'an', note: 'an + dem' },
              { text: 'Sonntag', pos: 'noun', gender: 'm', plural: 'Sonntage', lemma: 'Sonntag' },
              { text: 'Ausflug', pos: 'noun', gender: 'm', plural: 'Ausflüge', lemma: 'Ausflug' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'communication',
    title: 'Post, Bank & Telefon',
    titleZh: '郵局、銀行與電話',
    emoji: '📮',
    level: 'A2',
    themePath: 'Bank/Post/Telefon',
    chunks: [
      {
        id: 'communication-1',
        pattern: 'Ich möchte [X] schicken.',
        patternZh: '我想寄某物。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich möchte einen Brief nach Taiwan schicken.',
            zh: '我想寄一封信到台灣。',
            en: "I'd like to send a letter to Taiwan.",
            marks: [
              { text: 'Brief', pos: 'noun', gender: 'm', plural: 'Briefe', lemma: 'Brief' },
              { text: 'nach', pos: 'prep', governs: 'dat', lemma: 'nach' },
            ],
          },
          {
            de: 'Ich möchte ein Paket aufgeben.',
            zh: '我想寄一個包裹。',
            en: "I'd like to send a parcel.",
            marks: [{ text: 'Paket', pos: 'noun', gender: 'n', plural: 'Pakete', lemma: 'Paket' }],
          },
        ],
      },
      {
        id: 'communication-2',
        pattern: 'Kann ich hier [X]?',
        patternZh: '我可以在這裡做某事嗎？',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Kann ich hier Geld abheben?',
            zh: '我可以在這裡領錢嗎？',
            en: 'Can I withdraw money here?',
            marks: [{ text: 'Geld', pos: 'noun', gender: 'n', lemma: 'Geld', note: '通常不可數' }],
          },
          {
            de: 'Kann ich mit Karte bezahlen?',
            zh: '我可以用卡片付款嗎？',
            en: 'Can I pay by card?',
            marks: [
              { text: 'mit', pos: 'prep', governs: 'dat', lemma: 'mit' },
              { text: 'Karte', pos: 'noun', gender: 'f', plural: 'Karten', lemma: 'Karte' },
            ],
          },
        ],
      },
      {
        id: 'communication-3',
        pattern: 'Ich habe eine Frage zu [X].',
        patternZh: '我對某事有疑問。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich habe eine Frage zu meinem Konto.',
            zh: '我對我的帳戶有疑問。',
            en: 'I have a question about my account.',
            marks: [
              { text: 'Frage', pos: 'noun', gender: 'f', plural: 'Fragen', lemma: 'Frage' },
              { text: 'zu', pos: 'prep', governs: 'dat', lemma: 'zu' },
              { text: 'Konto', pos: 'noun', gender: 'n', plural: 'Konten', lemma: 'Konto' },
            ],
          },
          {
            de: 'Ich habe ein Problem mit dem Internet.',
            zh: '我的網路有問題。',
            en: 'I have a problem with the internet.',
            marks: [
              { text: 'Problem', pos: 'noun', gender: 'n', plural: 'Probleme', lemma: 'Problem' },
              { text: 'mit', pos: 'prep', governs: 'dat', lemma: 'mit' },
              { text: 'Internet', pos: 'noun', gender: 'n', lemma: 'Internet' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'travel',
    title: 'Reisen & Verkehr',
    titleZh: '旅行與交通',
    emoji: '🚆',
    level: 'A2',
    themePath: 'Reisen/Verkehr',
    chunks: [
      {
        id: 'travel-1',
        pattern: 'Ich fahre mit [X].',
        patternZh: '我搭某交通工具。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich fahre mit dem Zug nach Hamburg.',
            zh: '我搭火車去漢堡。',
            en: 'I travel to Hamburg by train.',
            marks: [
              { text: 'mit', pos: 'prep', governs: 'dat', lemma: 'mit' },
              { text: 'Zug', pos: 'noun', gender: 'm', plural: 'Züge', lemma: 'Zug' },
              { text: 'nach', pos: 'prep', governs: 'dat', lemma: 'nach' },
            ],
          },
          {
            de: 'Ich fahre mit dem Bus zur Arbeit.',
            zh: '我搭公車去上班。',
            en: 'I take the bus to work.',
            marks: [
              { text: 'mit', pos: 'prep', governs: 'dat', lemma: 'mit' },
              { text: 'Bus', pos: 'noun', gender: 'm', plural: 'Busse', lemma: 'Bus' },
              { text: 'zur', pos: 'prep', governs: 'dat', lemma: 'zu', note: 'zu + der' },
            ],
          },
        ],
      },
      {
        id: 'travel-2',
        pattern: 'Wann fährt [X] ab?',
        patternZh: '某交通工具幾點出發？',
        grammarFocus: 'gender',
        examples: [
          {
            de: 'Wann fährt der nächste Zug ab?',
            zh: '下一班火車幾點開？',
            en: 'When does the next train leave?',
            marks: [{ text: 'Zug', pos: 'noun', gender: 'm', plural: 'Züge', lemma: 'Zug' }],
          },
          {
            de: 'Wann fährt der Bus zum Flughafen ab?',
            zh: '往機場的公車幾點開？',
            en: 'When does the bus to the airport leave?',
            marks: [
              { text: 'Bus', pos: 'noun', gender: 'm', plural: 'Busse', lemma: 'Bus' },
              { text: 'zum', pos: 'prep', governs: 'dat', lemma: 'zu', note: 'zu + dem' },
              { text: 'Flughafen', pos: 'noun', gender: 'm', plural: 'Flughäfen', lemma: 'Flughafen' },
            ],
          },
        ],
      },
      {
        id: 'travel-3',
        pattern: 'Eine Fahrkarte nach [X], bitte.',
        patternZh: '請給我往某地的車票。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Eine Fahrkarte nach München, bitte.',
            zh: '請給我一張往慕尼黑的車票。',
            en: 'A ticket to Munich, please.',
            marks: [
              { text: 'Fahrkarte', pos: 'noun', gender: 'f', plural: 'Fahrkarten', lemma: 'Fahrkarte' },
              { text: 'nach', pos: 'prep', governs: 'dat', lemma: 'nach' },
            ],
          },
          {
            de: 'Wo ist der Bahnsteig?',
            zh: '月台在哪裡？',
            en: 'Where is the platform?',
            marks: [{ text: 'Bahnsteig', pos: 'noun', gender: 'm', plural: 'Bahnsteige', lemma: 'Bahnsteig' }],
          },
        ],
      },
    ],
  },
  {
    id: 'weather',
    title: 'Das Wetter',
    titleZh: '天氣',
    emoji: '🌦️',
    level: 'A1',
    themePath: 'Umwelt/Wetter',
    chunks: [
      {
        id: 'weather-1',
        pattern: 'Heute ist es [X].',
        patternZh: '今天天氣（某狀態）。',
        grammarFocus: 'gender',
        examples: [
          {
            de: 'Heute ist es sonnig und warm.',
            zh: '今天晴朗又溫暖。',
            en: "It's sunny and warm today.",
          },
          {
            de: 'Heute ist es kalt und windig.',
            zh: '今天又冷又有風。',
            en: "It's cold and windy today.",
          },
        ],
      },
      {
        id: 'weather-2',
        pattern: 'Es regnet / Es schneit.',
        patternZh: '下雨／下雪等天氣描述。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Es regnet seit heute Morgen.',
            zh: '從今天早上就開始下雨。',
            en: 'It has been raining since this morning.',
            marks: [
              { text: 'seit', pos: 'prep', governs: 'dat', lemma: 'seit' },
              { text: 'Morgen', pos: 'noun', gender: 'm', plural: 'Morgen', lemma: 'Morgen' },
            ],
          },
          {
            de: 'Im Winter schneit es oft.',
            zh: '冬天常常下雪。',
            en: 'In winter it often snows.',
            marks: [
              { text: 'Im', pos: 'prep', governs: 'dat', lemma: 'in', note: 'in + dem' },
              { text: 'Winter', pos: 'noun', gender: 'm', plural: 'Winter', lemma: 'Winter' },
            ],
          },
        ],
      },
      {
        id: 'weather-3',
        pattern: 'Ich nehme [X] mit.',
        patternZh: '我帶某物出門。',
        grammarFocus: 'praepositionen-dat',
        examples: [
          {
            de: 'Ich nehme einen Regenschirm mit.',
            zh: '我帶一把雨傘。',
            en: "I'll take an umbrella.",
            marks: [{ text: 'Regenschirm', pos: 'noun', gender: 'm', plural: 'Regenschirme', lemma: 'Regenschirm' }],
          },
          {
            de: 'Bei Regen bleibe ich zu Hause.',
            zh: '下雨時我待在家。',
            en: 'When it rains I stay at home.',
            marks: [
              { text: 'Bei', pos: 'prep', governs: 'dat', lemma: 'bei' },
              { text: 'Regen', pos: 'noun', gender: 'm', lemma: 'Regen' },
            ],
          },
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
