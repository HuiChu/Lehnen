import type { Gender } from '../types';
// 由建置腳本產出的「事實型」詞庫（歌德 Wortliste 解析 + 變位規則）。
import nounsRaw from '../../scripts/data/goethe-vocab.json';
import verbsRaw from '../../scripts/data/goethe-verbs.json';

export type Level = 'A1' | 'A2' | 'B1';

/** 名詞卡：原形 + 陰陽中性 + 複數 + 級別（中文字義日後補） */
export interface NounEntry {
  lemma: string;
  gender: Gender;
  plural?: string;
  level: Level;
  zh?: string;
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
}

export const nouns: NounEntry[] = (nounsRaw as unknown as NounEntry[]).filter(
  (n) => n.gender
);
export const verbs: VerbEntry[] = verbsRaw as unknown as VerbEntry[];

export const LEVELS: Level[] = ['A1', 'A2', 'B1'];
