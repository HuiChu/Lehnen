// 由 scripts/build-chunks.mjs 自動產生 — 請勿手動編輯。
// 來源：Tatoeba（CC BY 2.0 FR）；缺譯文以 AI 補譯並標記於 aiTranslated。
import type { Topic } from '../types';

export const generatedTopics: Topic[] = [
  {
    "id": "restaurant",
    "title": "Im Restaurant",
    "titleZh": "在餐廳",
    "emoji": "🍽️",
    "level": "A2",
    "chunks": [
      {
        "id": "restaurant-gen-1",
        "pattern": "Die Rechnung, bitte.",
        "patternZh": "請結帳 / 相關用語。",
        "examples": [
          {
            "de": "Die Rechnung bitte.",
            "zh": "买单。",
            "en": "The check, please.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/368050",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "Rechnung",
                "pos": "noun",
                "gender": "f",
                "plural": "-en",
                "lemma": "Rechnung"
              }
            ]
          },
          {
            "de": "Die Rechnung bitte!",
            "zh": "請結帳。",
            "en": "Check, please.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/547376",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "Rechnung",
                "pos": "noun",
                "gender": "f",
                "plural": "-en",
                "lemma": "Rechnung"
              }
            ]
          },
          {
            "de": "Die Rechnung, bitte.",
            "zh": "买单。",
            "en": "The check, please.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/656406",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "Rechnung",
                "pos": "noun",
                "gender": "f",
                "plural": "-en",
                "lemma": "Rechnung"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "shopping",
    "title": "Beim Einkaufen",
    "titleZh": "購物",
    "emoji": "🛍️",
    "level": "A2",
    "chunks": [
      {
        "id": "shopping-gen-1",
        "pattern": "Ich möchte [X] kaufen.",
        "patternZh": "我想買某物。",
        "examples": [
          {
            "de": "Kaufen!",
            "zh": "買吧！",
            "en": "Buy!",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/6048144",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ]
          },
          {
            "de": "Wir kaufen.",
            "zh": "我們買。",
            "en": "We are buying.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/8320631",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ]
          },
          {
            "de": "Sie kaufen.",
            "zh": "他們買。",
            "en": "They are buying.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/8320633",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "travel",
    "title": "Reisen",
    "titleZh": "旅行與交通",
    "emoji": "🚆",
    "level": "A2",
    "chunks": [
      {
        "id": "travel-1",
        "pattern": "Ich fahre mit [X].",
        "patternZh": "我搭乘某交通工具。",
        "examples": [
          {
            "de": "Ich fahre mit dir mit.",
            "zh": "我跟你一起搭車去。",
            "en": "I'll come along with you.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/801047",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ],
            "marks": [
              {
                "text": "mit",
                "pos": "prep",
                "governs": "dat",
                "lemma": "mit"
              }
            ]
          },
          {
            "de": "Ich fahre mit dem Bus.",
            "zh": "我搭公車。",
            "en": "I'll take the bus.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/5835738",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "mit",
                "pos": "prep",
                "governs": "dat",
                "lemma": "mit"
              },
              {
                "text": "Bus",
                "pos": "noun",
                "gender": "m",
                "plural": "-se",
                "lemma": "Bus"
              }
            ]
          },
          {
            "de": "Ich fahre mit dem Zug.",
            "zh": "我搭火車。",
            "en": "I'll take the train.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/9950474",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "mit",
                "pos": "prep",
                "governs": "dat",
                "lemma": "mit"
              },
              {
                "text": "Zug",
                "pos": "noun",
                "gender": "m",
                "plural": "-ü",
                "lemma": "Zug"
              }
            ]
          }
        ]
      },
      {
        "id": "travel-2",
        "pattern": "Wann fährt [X] ab?",
        "patternZh": "某交通工具幾點出發？",
        "examples": [
          {
            "de": "Wann fährt der Bus ab?",
            "zh": "公車幾點發車？",
            "en": "What time does the bus leave?",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/817806",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Bus",
                "pos": "noun",
                "gender": "m",
                "plural": "-se",
                "lemma": "Bus"
              },
              {
                "text": "ab",
                "pos": "prep",
                "governs": "dat",
                "lemma": "ab"
              }
            ]
          },
          {
            "de": "Der Zug fährt bald ab.",
            "zh": "火車快要開了。",
            "en": "The train is leaving soon.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/900936",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Der",
                "pos": "noun",
                "gender": "m",
                "lemma": "Der"
              },
              {
                "text": "Zug",
                "pos": "noun",
                "gender": "m",
                "plural": "-ü",
                "lemma": "Zug"
              },
              {
                "text": "ab",
                "pos": "prep",
                "governs": "dat",
                "lemma": "ab"
              }
            ]
          },
          {
            "de": "Der Bus fährt bald ab.",
            "zh": "公車快要開了。",
            "en": "The bus will be leaving soon.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/13376408",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Der",
                "pos": "noun",
                "gender": "m",
                "lemma": "Der"
              },
              {
                "text": "Bus",
                "pos": "noun",
                "gender": "m",
                "plural": "-se",
                "lemma": "Bus"
              },
              {
                "text": "ab",
                "pos": "prep",
                "governs": "dat",
                "lemma": "ab"
              }
            ]
          }
        ]
      },
      {
        "id": "travel-gen-1",
        "pattern": "Eine Fahrkarte nach …",
        "patternZh": "買票／搭車。",
        "examples": [
          {
            "de": "Zum Flughafen bitte.",
            "zh": "請到機場。",
            "en": "To the airport, please.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/11653696",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ],
            "marks": [
              {
                "text": "Zum",
                "pos": "prep",
                "governs": "dat",
                "lemma": "zu",
                "note": "zu + dem"
              },
              {
                "text": "Flughafen",
                "pos": "noun",
                "gender": "m",
                "lemma": "Flughafen"
              }
            ]
          },
          {
            "de": "Er ist am Flughafen.",
            "zh": "他在機場。",
            "en": "He is at the airport.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/12537437",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ],
            "marks": [
              {
                "text": "am",
                "pos": "prep",
                "governs": "dat",
                "lemma": "an",
                "note": "an + dem"
              },
              {
                "text": "Flughafen",
                "pos": "noun",
                "gender": "m",
                "lemma": "Flughafen"
              }
            ]
          },
          {
            "de": "Wo ist der Flughafen?",
            "zh": "機場在哪裏？",
            "en": "Where's the airport?",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/403052",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "Flughafen",
                "pos": "noun",
                "gender": "m",
                "lemma": "Flughafen"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "weather",
    "title": "Das Wetter",
    "titleZh": "天氣",
    "emoji": "🌦️",
    "level": "A1",
    "chunks": [
      {
        "id": "weather-1",
        "pattern": "Heute ist es [X].",
        "patternZh": "今天天氣（某狀態）。",
        "examples": [
          {
            "de": "Heute ist es kühl.",
            "zh": "今天天氣涼。",
            "en": "It's cool today.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/338267",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ]
          },
          {
            "de": "Heute ist es heiß.",
            "zh": "今天很熱。",
            "en": "It's hot today.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/352998",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ]
          },
          {
            "de": "Heute ist es kalt.",
            "zh": "今天很冷。",
            "en": "It's cold today.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/352999",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            }
          }
        ]
      },
      {
        "id": "weather-2",
        "pattern": "Es regnet / Es schneit.",
        "patternZh": "下雨／下雪等天氣描述。",
        "examples": [
          {
            "de": "Es regnet.",
            "zh": "下雨了。",
            "en": "It is raining.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/673",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            }
          },
          {
            "de": "Es regnet!",
            "zh": "下雨了！",
            "en": "It's raining!",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/11241379",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ]
          },
          {
            "de": "Es schneit.",
            "zh": "下雪了。",
            "en": "Snow is falling.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/373081",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "family",
    "title": "Familie & Freunde",
    "titleZh": "家庭與朋友",
    "emoji": "👪",
    "level": "A1",
    "chunks": [
      {
        "id": "family-gen-1",
        "pattern": "Meine Schwester / Mein Bruder …",
        "patternZh": "談家人。",
        "examples": [
          {
            "de": "Friede, Bruder!",
            "zh": "兄弟，和平！",
            "en": "Peace, brother.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/6971921",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Friede",
                "pos": "noun",
                "gender": "m",
                "lemma": "Friede"
              },
              {
                "text": "Bruder",
                "pos": "noun",
                "gender": "m",
                "plural": "-ü",
                "lemma": "Bruder"
              }
            ]
          },
          {
            "de": "Vater und Bruder.",
            "zh": "父親和兄弟。",
            "en": "Father and brother.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/1317910",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Vater",
                "pos": "noun",
                "gender": "m",
                "plural": "-ä",
                "lemma": "Vater"
              },
              {
                "text": "Bruder",
                "pos": "noun",
                "gender": "m",
                "plural": "-ü",
                "lemma": "Bruder"
              }
            ]
          },
          {
            "de": "Ruf deinen Bruder.",
            "zh": "打電話給你的兄弟。",
            "en": "Call your brother.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/2994883",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Bruder",
                "pos": "noun",
                "gender": "m",
                "plural": "-ü",
                "lemma": "Bruder"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "housing",
    "title": "Wohnung & Wohnen",
    "titleZh": "居住與租屋",
    "emoji": "🏠",
    "level": "A2",
    "chunks": [
      {
        "id": "housing-gen-1",
        "pattern": "Die Wohnung / Die Miete …",
        "patternZh": "談住處與租金。",
        "examples": [
          {
            "de": "Er hat eine Wohnung.",
            "zh": "他有一間公寓。",
            "en": "He lives in a flat.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/2797807",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Wohnung",
                "pos": "noun",
                "gender": "f",
                "plural": "-en",
                "lemma": "Wohnung"
              }
            ]
          },
          {
            "de": "Es ist eure Wohnung.",
            "zh": "這是你們的公寓。",
            "en": "It's your home.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/2884598",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Wohnung",
                "pos": "noun",
                "gender": "f",
                "plural": "-en",
                "lemma": "Wohnung"
              }
            ]
          },
          {
            "de": "Es ist Ihre Wohnung.",
            "zh": "這是您的公寓。",
            "en": "It's your home.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/2884600",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Wohnung",
                "pos": "noun",
                "gender": "f",
                "plural": "-en",
                "lemma": "Wohnung"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "daily",
    "title": "Tagesablauf",
    "titleZh": "日常作息與時間",
    "emoji": "⏰",
    "level": "A1",
    "chunks": [
      {
        "id": "daily-gen-1",
        "pattern": "Ich stehe … auf.",
        "patternZh": "起床／作息。",
        "examples": [
          {
            "de": "Stehe auf.",
            "zh": "起来吧！",
            "en": "Get up.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/914131",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "en"
            ],
            "marks": [
              {
                "text": "auf",
                "pos": "prep",
                "lemma": "auf",
                "note": "Wechselpräp.（方向→Akk／地點→Dat）"
              }
            ]
          },
          {
            "de": "Stehe auf!",
            "zh": "起床!",
            "en": "Get up!",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/1923381",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "auf",
                "pos": "prep",
                "lemma": "auf",
                "note": "Wechselpräp.（方向→Akk／地點→Dat）"
              }
            ]
          },
          {
            "de": "Aufstehen!",
            "zh": "起立！",
            "en": "Stand up!",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/7188587",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "food",
    "title": "Essen & Einkaufen",
    "titleZh": "飲食與採買",
    "emoji": "🛒",
    "level": "A1",
    "chunks": [
      {
        "id": "food-gen-1",
        "pattern": "Ich esse / trinke …",
        "patternZh": "飲食描述。",
        "examples": [
          {
            "de": "Iss Obst!",
            "zh": "吃水果！",
            "en": "Eat fruits!",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/6886357",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Obst",
                "pos": "noun",
                "gender": "n",
                "lemma": "Obst"
              }
            ]
          },
          {
            "de": "Frühstück!",
            "zh": "早餐！",
            "en": "Breakfast!",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/4698153",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Frühstück",
                "pos": "noun",
                "gender": "n",
                "lemma": "Frühstück"
              }
            ]
          },
          {
            "de": "Er mag Obst.",
            "zh": "他喜歡水果。",
            "en": "He likes fruit.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/4329567",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Obst",
                "pos": "noun",
                "gender": "n",
                "lemma": "Obst"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "health",
    "title": "Beim Arzt",
    "titleZh": "健康與看醫生",
    "emoji": "🩺",
    "level": "A2",
    "chunks": [
      {
        "id": "health-gen-1",
        "pattern": "Ich gehe zum Arzt.",
        "patternZh": "看醫生／身體不適。",
        "examples": [
          {
            "de": "Er ist Arzt.",
            "zh": "他是医生。",
            "en": "He is a doctor.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/561080",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "Arzt",
                "pos": "noun",
                "gender": "m",
                "plural": "-Ä",
                "lemma": "Arzt"
              }
            ]
          },
          {
            "de": "Ist er Arzt?",
            "zh": "他是醫生嗎？",
            "en": "Is he a doctor?",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/2270971",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "Ist",
                "pos": "noun",
                "gender": "n",
                "plural": "die Anmeldung",
                "lemma": "Ist"
              },
              {
                "text": "Arzt",
                "pos": "noun",
                "gender": "m",
                "plural": "-Ä",
                "lemma": "Arzt"
              }
            ]
          },
          {
            "de": "Ich bin Arzt.",
            "zh": "我是医生。",
            "en": "I'm a doctor.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/360804",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "Arzt",
                "pos": "noun",
                "gender": "m",
                "plural": "-Ä",
                "lemma": "Arzt"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "work",
    "title": "Arbeit & Beruf",
    "titleZh": "工作與職業",
    "emoji": "💼",
    "level": "A2",
    "chunks": [
      {
        "id": "work-gen-1",
        "pattern": "Ich arbeite als …",
        "patternZh": "工作與職業。",
        "examples": [
          {
            "de": "Er ist mein Kollege.",
            "zh": "他是我的同事。",
            "en": "He is my colleague.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/2765848",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Kollege",
                "pos": "noun",
                "gender": "m",
                "plural": "-n",
                "lemma": "Kollege"
              }
            ]
          },
          {
            "de": "Wir werden Kollegen.",
            "zh": "我們會成為同事。",
            "en": "We'll be colleagues.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/10745734",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ]
          },
          {
            "de": "Er war mein Kollege.",
            "zh": "他曾是我的同事。",
            "en": "He was my colleague.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/10816993",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Kollege",
                "pos": "noun",
                "gender": "m",
                "plural": "-n",
                "lemma": "Kollege"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "freetime",
    "title": "Freizeit & Hobbys",
    "titleZh": "休閒與嗜好",
    "emoji": "⚽",
    "level": "A1",
    "chunks": [
      {
        "id": "freetime-gen-1",
        "pattern": "In meiner Freizeit …",
        "patternZh": "休閒嗜好。",
        "examples": [
          {
            "de": "Er mag Fußball.",
            "zh": "他喜歡足球。",
            "en": "He likes soccer.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/1900266",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Fußball",
                "pos": "noun",
                "gender": "m",
                "lemma": "Fußball"
              }
            ]
          },
          {
            "de": "So ist Fußball.",
            "zh": "足球就是這樣。",
            "en": "That's football.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/12910841",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh",
              "en"
            ],
            "marks": [
              {
                "text": "So",
                "pos": "noun",
                "gender": "n",
                "lemma": "So"
              },
              {
                "text": "Fußball",
                "pos": "noun",
                "gender": "m",
                "lemma": "Fußball"
              }
            ]
          },
          {
            "de": "Tom mag Fußball.",
            "zh": "汤姆喜欢足球。",
            "en": "Tom likes soccer.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/6619058",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "marks": [
              {
                "text": "Fußball",
                "pos": "noun",
                "gender": "m",
                "lemma": "Fußball"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "communication",
    "title": "Post, Bank & Telefon",
    "titleZh": "郵局、銀行與電話",
    "emoji": "📮",
    "level": "A2",
    "chunks": [
      {
        "id": "communication-gen-1",
        "pattern": "Ich möchte … schicken / bezahlen.",
        "patternZh": "寄件／付款。",
        "examples": [
          {
            "de": "Sie bezahlen.",
            "zh": "他們付錢。",
            "en": "You're paying.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/2204147",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ]
          },
          {
            "de": "Wir bezahlen.",
            "zh": "我們付錢。",
            "en": "We're paying.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/2204148",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ]
          },
          {
            "de": "Öffne ein Konto!",
            "zh": "開一個帳戶！",
            "en": "Open an account.",
            "source": {
              "name": "Tatoeba",
              "url": "https://tatoeba.org/sentences/show/3462493",
              "license": "CC BY 2.0 FR",
              "author": "Tatoeba contributors"
            },
            "aiTranslated": [
              "zh"
            ],
            "marks": [
              {
                "text": "Konto",
                "pos": "noun",
                "gender": "n",
                "lemma": "Konto"
              }
            ]
          }
        ]
      }
    ]
  }
];
