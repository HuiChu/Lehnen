import type { Topic } from '../types';

/**
 * 由 `scripts/build-chunks.mjs` 自動產生並覆寫的語塊資料（來自 Tatoeba CC BY 語料）。
 *
 * 此檔為「佔位」版本：尚未執行匯入腳本時為空陣列，App 只顯示手寫 topics。
 * 執行 `node scripts/build-chunks.mjs`（需對外網路下載 Tatoeba 檔案，
 * 缺譯文時需 ANTHROPIC_API_KEY 做 AI 補譯）後，本檔會被替換為帶
 * `source`（CC BY 標註）與 `aiTranslated`（標記 AI 補譯欄位）的真實語料。
 *
 * 產生的例句一律帶 `source`；AI 補譯的 zh/en 會記入 `aiTranslated`，
 * 由 ExampleCarousel 顯示「AI 翻譯」徽章與來源小字。
 */
export const generatedTopics: Topic[] = [];
