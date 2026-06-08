export interface Example {
  /** 德語例句 */
  de: string;
  /** 中文翻譯 */
  zh: string;
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
