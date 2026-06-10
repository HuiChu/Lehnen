import type { Gender } from '../types';
// 由建置腳本產出的「事實型」詞庫（歌德 Wortliste 解析 + 變位規則）。
import nounsRaw from './goethe-vocab.json';
import verbsRaw from './goethe-verbs.json';

export type Level = 'A1' | 'A2' | 'B1';

/** 例句（取自 Tatoeba 真實語料，附 CC BY 來源標註） */
export interface VocabExample {
  de: string;
  zh: string;
  source: { name: string; url?: string; license?: string; author?: string };
}

/** 名詞卡：原形 + 陰陽中性 + 複數 + 級別 + 中文 + 例句 */
export interface NounEntry {
  lemma: string;
  gender: Gender;
  plural?: string;
  level: Level;
  zh?: string;
  example?: VocabExample;
}

/** 動詞卡：原形 + 關鍵變位 + 助動詞 + 級別 + 是否不規則 + 中文字義 */
export interface VerbEntry {
  lemma: string;
  level: Level;
  präsens: string;
  präteritum: string;
  partizip: string;
  aux: 'haben' | 'sein';
  irregular: boolean;
  zh?: string;
  example?: VocabExample;
}

export const nouns: NounEntry[] = (nounsRaw as unknown as NounEntry[]).filter(
  (n) => n.gender
);
export const verbs: VerbEntry[] = verbsRaw as unknown as VerbEntry[];

export const LEVELS: Level[] = ['A1', 'A2', 'B1'];
