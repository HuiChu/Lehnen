# 語塊學德文 · Lehnen

用「**語塊（lexical chunks）**」學德文的跟讀練習工具。不背單字，而是記住「可重複套用的句型框架」，
配上大量情境例句內化，再透過跟讀（shadowing）矯正發音。內容聚焦德語 **A1–B1 日常情境**。

## 功能

- **語塊句型卡**：德語句型（含 `[X]` 佔位）＋中文釋義
- **例句輪播**：每個語塊 2–3 句，可左右滑動／點箭頭切換
- **跟讀練習**
  - 🔴 **錄音** — `MediaRecorder` 錄下自己的發音
  - ▶ **聽我** — 回放剛剛的錄音
  - 🗣 **聽 AI** — `speechSynthesis` 以德語朗讀例句
- **三語對照**（德 / 中 / 英）切換、**收藏**語塊（存 localStorage）
- **探索德語內容**：App 內讀公共領域格林童話（逐句朗讀），外連官方新聞/課程/podcast
- 五個分頁：HOME / LEARN / MY（進度統計）/ SAVED / SETTING（語速、語音選擇）
- **PWA**：可加到主畫面、離線可用

## 技術

Vite + React 18 + TypeScript · Tailwind CSS · React Router · Zustand（persist）·
Web Speech API（朗讀＋錄音，零金鑰）· vite-plugin-pwa

## 開發

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 型別檢查 + 打包到 dist/
npm run preview  # 預覽 production build
```

> **提示**：朗讀品質取決於作業系統安裝的德語語音（`de-DE`）。
> 若系統未安裝德語語音，會退回瀏覽器預設語音；可在系統設定安裝德語語音包以獲得最佳效果。
> 錄音功能需要麥克風權限，且僅在本機處理、不會上傳。

## 探索德語內容（探索頁）

首頁「探索德語內容」入口（`/explore`）整理了**正式來源**：

- **App 內可讀**：公共領域的**格林童話**（`src/data/stories.ts`），逐句德/中/英對照、點句朗讀。
- **外連官方來源**（不轉存內文）：Deutsche Welle（Nico's Weg、慢速新聞）、
  Deutschlandfunk *nachrichtenleicht*（簡易語言週新聞 + podcast）、tagesschau、
  Goethe-Institut 官方 A1/A2/B1 詞表、精選 podcast——見 `src/data/resources.ts`。

## 資料來源與授權

例句採「**雙軌 + 三語（de + zh + en）**」：

- **可收錄進 App 的文字**僅限**公共領域 / CC 授權**語料：
  - **Tatoeba**（CC BY 2.0 FR，需標作者/授權）— 由匯入腳本產生。
  - **格林童話**（公共領域）— 故事閱讀全文。
- **德文句一律取自真實語料，不 AI 造句。** 缺 en 或 zh 譯文時才用 **AI 批量補譯**，
  並在資料與 UI 以「**AI 翻譯**」徽章標記該欄（人工譯文不標）。
- **公廣新聞/podcast**（DW、Deutschlandfunk、tagesschau）版權所有 → 一律**外連官方來源**。

## 匯入更多語塊（Tatoeba，建置期手動執行）

`scripts/build-chunks.mjs` 會從 Tatoeba 語料挑出符合句型的德語句，帶入人工 en/zh 譯文，
缺的用 AI 補譯，產出 `src/data/topics.generated.ts`（與手寫 `topics.ts` 自動合併）。
此腳本**不進 CI、不影響 `npm run build`**。

```bash
# 1. 準備資料（需對外網路，用系統工具解壓）
mkdir -p scripts/.cache && cd scripts/.cache
curl -LO https://downloads.tatoeba.org/exports/per_language/deu/deu_sentences.tsv.bz2
curl -LO https://downloads.tatoeba.org/exports/per_language/eng/eng_sentences.tsv.bz2
curl -LO https://downloads.tatoeba.org/exports/per_language/cmn/cmn_sentences.tsv.bz2
curl -LO https://downloads.tatoeba.org/exports/links.tar.bz2
bunzip2 *.bz2 && tar -xf links.tar
cd ../..

# 2. （選用）AI 補譯：需 SDK 與金鑰
npm i -D @anthropic-ai/sdk
export ANTHROPIC_API_KEY=sk-ant-...

# 3. 產生
node scripts/build-chunks.mjs
```

> 編輯句型/搜尋鍵：改 `scripts/seed-patterns.mjs`。
> 環境無網路/金鑰時，腳本會給出提示並略過補譯——`topics.generated.ts` 預設為空，App 仍正常運作。

## 新增語塊內容（手寫）

編輯 `src/data/topics.ts`，依 `src/types.ts` 的 `Topic / Chunk / Example` 型別新增即可
（例句建議補上 `en` 維持三語對照）。

## 之後可擴充

發音評分（`SpeechRecognition` 比對逐字稿）、間隔複習排程（SRS）、雲端帳號同步、
AI 生成新語塊、雲端德語 TTS。
