/**
 * prep-case.mjs — 德語介係詞 → 支配格（Kasus）對照表。
 *
 * 供 scripts/build-chunks.mjs 自動為例句中的介係詞標 `governs`。
 * 為決定論靜態資料，不需網路、不會出錯。
 *
 * - 固定支配 Dativ / Akkusativ 的介係詞：直接對應。
 * - Wechselpräpositionen（雙向介係詞）：方向用 Akk、地點用 Dat，
 *   無法只靠單字判斷，標為 'wechsel'，由呼叫端視後接冠詞推格或標註說明。
 */

/** @type {Record<string, 'dat'|'akk'|'gen'|'wechsel'>} */
export const prepCase = {
  // 支配 Dativ
  mit: 'dat',
  nach: 'dat',
  aus: 'dat',
  zu: 'dat',
  von: 'dat',
  bei: 'dat',
  seit: 'dat',
  gegenüber: 'dat',
  ab: 'dat',
  // 支配 Akkusativ
  für: 'akk',
  ohne: 'akk',
  um: 'akk',
  durch: 'akk',
  gegen: 'akk',
  bis: 'akk',
  // 支配 Genitiv（B1+）
  wegen: 'gen',
  während: 'gen',
  trotz: 'gen',
  // Wechselpräpositionen（Akk 方向 / Dat 地點）
  an: 'wechsel',
  auf: 'wechsel',
  in: 'wechsel',
  über: 'wechsel',
  unter: 'wechsel',
  vor: 'wechsel',
  hinter: 'wechsel',
  neben: 'wechsel',
  zwischen: 'wechsel',
};

/** 縮合形 → { lemma, governs, note }。方向/地點不定者標 wechsel。 */
export const contractions = {
  zum: { lemma: 'zu', governs: 'dat', note: 'zu + dem' },
  zur: { lemma: 'zu', governs: 'dat', note: 'zu + der' },
  im: { lemma: 'in', governs: 'dat', note: 'in + dem（地點）' },
  ins: { lemma: 'in', governs: 'akk', note: 'in + das（方向）' },
  am: { lemma: 'an', governs: 'dat', note: 'an + dem' },
  ans: { lemma: 'an', governs: 'akk', note: 'an + das（方向）' },
  beim: { lemma: 'bei', governs: 'dat', note: 'bei + dem' },
  vom: { lemma: 'von', governs: 'dat', note: 'von + dem' },
  aufs: { lemma: 'auf', governs: 'akk', note: 'auf + das（方向）' },
};

/**
 * 回傳該 token 的介係詞標記資料，若非介係詞回傳 null。
 * @param {string} token 句中的字面（可能含大小寫）
 * @returns {{ lemma:string, governs:'dat'|'akk'|'gen', note?:string }|{ lemma:string, governs:'wechsel' }|null}
 */
export function lookupPrep(token) {
  const low = token.toLowerCase();
  if (contractions[low]) return contractions[low];
  const g = prepCase[low];
  if (!g) return null;
  return { lemma: low, governs: g };
}
