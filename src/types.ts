/** 來源標註（公共領域 / CC 授權語料需標明出處、授權、作者） */
export interface SourceAttribution {
  /** 來源名稱，如 "Tatoeba"、"Grimm: Kinder- und Hausmärchen" */
  name: string;
  /** 來源連結 */
  url?: string;
  /** 授權，如 "CC BY 2.0 FR"、"Public Domain" */
  license?: string;
  /** 作者（CC BY 需標示貢獻者） */
  author?: string;
}

/** 名詞性別（der/die/das） */
export type Gender = 'm' | 'f' | 'n';
/** 德語四格 */
export type Kasus = 'nom' | 'akk' | 'dat' | 'gen';
/** 詞類（本輪只用到 noun / prep，其餘預留） */
export type Wortart = 'noun' | 'prep' | 'verb' | 'adj' | 'pron';

/**
 * 句中單字的文法標記，供行內上色與小提示用。
 * 本輪聚焦：名詞陰陽性（gender/plural）與介係詞支配的格（governs）。
 * 動詞時態等欄位日後再擴充。
 */
export interface GrammarMark {
  /** 句中字面（取首次出現處比對高亮） */
  text: string;
  pos: Wortart;
  /** 名詞陰陽性 der/die/das */
  gender?: Gender;
  /** 名詞複數形（取自歌德詞表，為事實資料） */
  plural?: string;
  /** 介係詞支配的格 */
  governs?: Kasus;
  /** 該名詞在此處所在的格（可選） */
  kasus?: Kasus;
  /** 原形：名詞主格單數 / 介係詞原形 */
  lemma?: string;
  /** 中文小提示 */
  note?: string;
}

export interface Example {
  /** 德語例句（一律取自真實語料，不 AI 造句） */
  de: string;
  /** 中文翻譯 */
  zh: string;
  /** 英文翻譯 */
  en?: string;
  /** 來源標註（手寫範例可省略；匯入語料必填） */
  source?: SourceAttribution;
  /** 標記哪些譯文是 AI 補譯的（人工譯文不列入） */
  aiTranslated?: ('zh' | 'en')[];
  /** 文法標記（名詞性別、介係詞格…），供行內上色 */
  marks?: GrammarMark[];
}

export interface Chunk {
  id: string;
  /** 句型，含佔位符，如 "Ich hätte gern [X]" */
  pattern: string;
  /** 句型釋義，如 "我想要（點）某物" */
  patternZh: string;
  /** 此語塊的文法重點標籤，如 "präpositionen-dat" */
  grammarFocus?: string;
  examples: Example[];
}

export interface Topic {
  id: string;
  /** 德語情境名，如 "Im Restaurant" */
  title: string;
  /** 中文情境名，如 "在餐廳" */
  titleZh: string;
  emoji: string;
  /** CEFR 等級 */
  level: 'A1' | 'A2' | 'B1';
  /** 對應的歌德主題路徑，如 "Person/Familie" */
  themePath?: string;
  chunks: Chunk[];
}

/** 公共領域故事的逐句切段 */
export interface StorySegment {
  /** 德語原句 */
  de: string;
  /** 中文對照 */
  zh?: string;
  /** 英文對照 */
  en?: string;
  /** 文法標記（名詞性別、介係詞格…），供行內上色 */
  marks?: GrammarMark[];
}

/** 公共領域故事閱讀（可內含全文） */
export interface Story {
  id: string;
  /** 德語標題 */
  title: string;
  /** 中文標題 */
  titleZh: string;
  emoji: string;
  /** CEFR 概略等級 */
  level: 'A1' | 'A2' | 'B1';
  /** 一句話簡介 */
  blurb: string;
  segments: StorySegment[];
  source: SourceAttribution;
}

/** 探索頁的外部資源連結（公廣新聞 / podcast / 課程 / 詞表，連官方來源不轉存內文） */
export interface ResourceLink {
  id: string;
  /** 資源標題 */
  title: string;
  /** 中文標題 */
  titleZh: string;
  url: string;
  type: 'news' | 'story' | 'podcast' | 'course' | 'wordlist';
  /** CEFR 等級（適用時） */
  level?: 'A1' | 'A2' | 'B1' | 'A1–B1';
  /** 簡短說明 */
  desc: string;
  source: SourceAttribution;
}
