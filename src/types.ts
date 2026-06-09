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
}

export interface Chunk {
  id: string;
  /** 句型，含佔位符，如 "Ich hätte gern [X]" */
  pattern: string;
  /** 句型釋義，如 "我想要（點）某物" */
  patternZh: string;
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
