import type { GrammarMark } from '../types';
// 與建置腳本共用同一份標記邏輯（純 ESM，node 與 Vite 皆可載入）；
// .mjs 以 JSDoc 推型別，回傳形狀對應 GrammarMark。
import { annotateMarks, buildVocabMap } from './annotate-core.mjs';
import vocabData from '../data/goethe-vocab.json';

type VocabEntry = { lemma: string; gender?: string; plural?: string };

// 整個 App 只建一次名詞詞庫對照表
const vocab = buildVocabMap(vocabData as VocabEntry[]);

/**
 * 即時為德語句產生名詞性別 / 介係詞格標記。
 * 供「沒有預先標記」的內容（如童話、手寫例句）在算繪時補上一致的文法上色。
 * 動詞時態標記不在此自動產生（見計畫線 B/C：以背單字-動詞卡為主）。
 */
export function annotate(de: string): GrammarMark[] {
  return annotateMarks(de, vocab) as GrammarMark[];
}
