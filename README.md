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
- **中德對照**切換、**收藏**語塊（存 localStorage）
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

## 新增語塊內容

編輯 `src/data/topics.ts`，依 `src/types.ts` 的 `Topic / Chunk / Example` 型別新增即可。

## 之後可擴充

發音評分（`SpeechRecognition` 比對逐字稿）、間隔複習排程（SRS）、雲端帳號同步、
AI 生成新語塊、雲端德語 TTS。
