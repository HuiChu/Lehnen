import type { ResourceLink } from '../types';

/**
 * 探索頁的精選外部資源（Tier 2）。
 *
 * 原則：公廣新聞 / podcast / 課程版權所有 → 一律外連官方頁/官方 RSS，
 * **不在 App 內轉存內文**。每筆附來源標註，卡片開新分頁（rel="noopener"）。
 */
export const resources: ResourceLink[] = [
  // ── 課程 / 慢速新聞（Deutsche Welle，公廣，可免費學習） ──
  {
    id: 'dw-nicos-weg',
    title: "Nico's Weg (A1–B1)",
    titleZh: 'DW 免費德語課程',
    url: 'https://learngerman.dw.com/de/nicos-weg/c-36519789',
    type: 'course',
    level: 'A1–B1',
    desc: 'Deutsche Welle 官方免費互動課程，影集式情境對話，含練習與字幕。',
    source: { name: 'Deutsche Welle', url: 'https://learngerman.dw.com/', license: '© DW（官方免費）' },
  },
  {
    id: 'dw-langsam',
    title: 'Langsam gesprochene Nachrichten',
    titleZh: 'DW 慢速新聞（含逐字稿）',
    url: 'https://learngerman.dw.com/de/langsam-gesprochene-nachrichten/s-9747',
    type: 'news',
    level: 'B1',
    desc: '每日慢速朗讀新聞，附完整德語逐字稿，適合跟讀與聽力。',
    source: { name: 'Deutsche Welle', url: 'https://learngerman.dw.com/', license: '© DW（官方免費）' },
  },
  // ── 簡易語言新聞（Deutschlandfunk nachrichtenleicht） ──
  {
    id: 'nachrichtenleicht',
    title: 'nachrichtenleicht',
    titleZh: '簡易德語週新聞',
    url: 'https://www.nachrichtenleicht.de/',
    type: 'news',
    level: 'A2',
    desc: 'Deutschlandfunk 以「einfache Sprache」撰寫的每週新聞，句子短、用詞淺。',
    source: { name: 'Deutschlandfunk', url: 'https://www.nachrichtenleicht.de/', license: '© Deutschlandradio' },
  },
  {
    id: 'nachrichtenleicht-podcast',
    title: 'nachrichtenleicht — Podcast',
    titleZh: '簡易德語新聞 Podcast',
    url: 'https://www.nachrichtenleicht.de/podcast-100.html',
    type: 'podcast',
    level: 'A2',
    desc: '上述週新聞的官方 podcast，可訂閱收聽朗讀版。',
    source: { name: 'Deutschlandfunk', url: 'https://www.nachrichtenleicht.de/', license: '© Deutschlandradio' },
  },
  // ── 主流新聞 ──
  {
    id: 'tagesschau',
    title: 'tagesschau',
    titleZh: '德國公視新聞',
    url: 'https://www.tagesschau.de/',
    type: 'news',
    level: 'B1',
    desc: '德國最具代表性的公視新聞，標準德語，可搭配影音練聽力。',
    source: { name: 'ARD / tagesschau', url: 'https://www.tagesschau.de/', license: '© ARD' },
  },
  // ── 官方詞表 ──
  {
    id: 'goethe-a1-wortliste',
    title: 'Goethe-Zertifikat A1 — Wortliste',
    titleZh: 'Goethe 官方 A1 詞表',
    url: 'https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf',
    type: 'wordlist',
    level: 'A1',
    desc: 'Goethe-Institut 官方 A1 考試詞彙清單（PDF）。',
    source: { name: 'Goethe-Institut', url: 'https://www.goethe.de/', license: '© Goethe-Institut' },
  },
  {
    id: 'goethe-a2-wortliste',
    title: 'Goethe-Zertifikat A2 — Wortliste',
    titleZh: 'Goethe 官方 A2 詞表',
    url: 'https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf',
    type: 'wordlist',
    level: 'A2',
    desc: 'Goethe-Institut 官方 A2 考試詞彙清單（PDF）。',
    source: { name: 'Goethe-Institut', url: 'https://www.goethe.de/', license: '© Goethe-Institut' },
  },
  {
    id: 'goethe-b1-wortliste',
    title: 'Goethe-Zertifikat B1 — Wortliste',
    titleZh: 'Goethe 官方 B1 詞表',
    url: 'https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf',
    type: 'wordlist',
    level: 'B1',
    desc: 'Goethe-Institut 官方 B1 考試詞彙清單（PDF）。',
    source: { name: 'Goethe-Institut', url: 'https://www.goethe.de/', license: '© Goethe-Institut' },
  },
  // ── Podcast ──
  {
    id: 'coffee-break-german',
    title: 'Coffee Break German',
    titleZh: 'Podcast：循序漸進',
    url: 'https://coffeebreaklanguages.com/coffeebreakgerman/',
    type: 'podcast',
    level: 'A1–B1',
    desc: '人氣德語學習 podcast，從零開始、節奏輕鬆，適合通勤跟讀。',
    source: { name: 'Coffee Break Languages', url: 'https://coffeebreaklanguages.com/' },
  },
];

/** 資源類型 → 中文標籤 / emoji */
export const resourceTypeMeta: Record<
  ResourceLink['type'],
  { label: string; emoji: string }
> = {
  news: { label: '新聞', emoji: '📰' },
  story: { label: '故事', emoji: '📖' },
  podcast: { label: 'Podcast', emoji: '🎧' },
  course: { label: '課程', emoji: '🎓' },
  wordlist: { label: '詞表', emoji: '📋' },
};
