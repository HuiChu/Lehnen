/**
 * annotate-core.mjs — 句子文法標記的共用核心（名詞性別 + 介係詞格）。
 *
 * 同時供「建置期」腳本（scripts/build-chunks.mjs）與「執行期」App
 * （src/grammar/annotate.ts）使用，避免兩份邏輯各自漂移。為純 ESM、無副作用、
 * 不碰檔案系統：名詞詞庫由呼叫端以 buildVocabMap 建好後傳入。
 *
 * 規則（決定論）：
 *  - 介係詞：查 prep-case 表 → 標 governs（Wechselpräp. 不標固定格，附說明）。
 *  - 名詞：大寫開頭、在詞庫中、且不在「大寫但非名詞」停用表 → 標 gender/plural。
 *  只取每個字面第一次出現，避免重複。
 */

import { lookupPrep } from './prep-case.mjs';

/**
 * 大寫開頭但通常不是名詞的字（句首會被大寫，易誤判為名詞）。
 * 例：疑問詞 Wie/Was…、冠詞 Der/Die/Das…、代名詞、連接詞、常見副詞。
 * @type {Set<string>}
 */
export const NON_NOUN_CAPS = new Set([
  // 疑問詞
  'Wie', 'Was', 'Wer', 'Wen', 'Wem', 'Wo', 'Wann', 'Warum', 'Wieso', 'Weshalb',
  'Wohin', 'Woher', 'Welche', 'Welcher', 'Welches', 'Welchen', 'Welchem',
  // 冠詞／指示
  'Der', 'Die', 'Das', 'Den', 'Dem', 'Des', 'Ein', 'Eine', 'Einen', 'Einem',
  'Einer', 'Eines', 'Dieser', 'Diese', 'Dieses', 'Jeder', 'Jede', 'Jedes',
  // 代名詞
  'Ich', 'Du', 'Er', 'Sie', 'Es', 'Wir', 'Ihr', 'Man', 'Mir', 'Mich', 'Dir',
  'Dich', 'Ihm', 'Ihn', 'Ihnen', 'Uns', 'Euch',
  // 連接詞／常見副詞／其他功能詞
  'Und', 'Aber', 'Oder', 'Denn', 'Wenn', 'Weil', 'Dass', 'Als', 'Ob', 'Auch',
  'Doch', 'Nicht', 'Nein', 'Ja', 'So', 'Da', 'Dann', 'Hier', 'Dort', 'Heute',
  'Morgen', 'Gestern', 'Jetzt', 'Schon', 'Noch', 'Nur', 'Sehr', 'Mehr',
  'Immer', 'Endlich', 'Einmal', 'Zuletzt', 'Danach', 'Dabei', 'Dazu',
]);

/**
 * 由 goethe-vocab.json 陣列建立 lemma→{gender,plural} 對照表（只收有性別者）。
 * @param {Array<{lemma:string, gender?:string, plural?:string}>} arr
 * @returns {Map<string, {gender:string, plural?:string}>}
 */
export function buildVocabMap(arr) {
  return new Map(arr.filter((e) => e.gender).map((e) => [e.lemma, e]));
}

/**
 * 為德語句自動產生文法標記（名詞 + 介係詞）。
 * @param {string} de 德語句
 * @param {Map<string, {gender:string, plural?:string}>} vocab 名詞詞庫
 * @returns {Array<Object>} marks（形狀對應 src/types.ts 的 GrammarMark）
 */
export function annotateMarks(de, vocab) {
  const marks = [];
  const seen = new Set();
  const tokens = de.split(/\s+/);
  for (const tok of tokens) {
    const word = tok.replace(/^[^A-Za-zÄÖÜäöüß]+|[^A-Za-zÄÖÜäöüß]+$/g, '');
    if (!word || seen.has(word)) continue;

    const prep = lookupPrep(word);
    if (prep) {
      if (prep.governs === 'wechsel') {
        marks.push({ text: word, pos: 'prep', lemma: prep.lemma, note: 'Wechselpräp.（方向→Akk／地點→Dat）' });
      } else {
        marks.push({ text: word, pos: 'prep', governs: prep.governs, lemma: prep.lemma, ...(prep.note ? { note: prep.note } : {}) });
      }
      seen.add(word);
      continue;
    }

    if (/^[A-ZÄÖÜ]/.test(word) && vocab.has(word) && !NON_NOUN_CAPS.has(word)) {
      const v = vocab.get(word);
      marks.push({ text: word, pos: 'noun', gender: v.gender, ...(v.plural ? { plural: v.plural } : {}), lemma: word });
      seen.add(word);
    }
  }
  return marks;
}
