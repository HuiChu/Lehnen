import { useMemo, useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { shuffle } from '../lib/shuffle';
import type { Level } from '../data/vocab';

/** 背單字卡共用的牌組控制器（名詞/動詞頁共用）。 */
export interface VocabDeckController<T> {
  level: Level | 'all';
  pickLevel: (l: Level | 'all') => void;
  deck: T[];
  index: number;
  card: T | undefined;
  revealed: boolean;
  toggleReveal: () => void;
  go: (dir: number) => void;
  reshuffle: () => void;
  isLearned: boolean;
  learnedCount: number;
  learnedId: string;
  toggleLearned: (id: string) => void;
}

/**
 * 背單字卡牌組邏輯：依等級篩選＋洗牌、翻面、前後切換、與 store 的「會了」接線。
 * 名詞與動詞頁共用，差異只在 pool 與 id 前綴（noun:/verb:）。
 */
export function useVocabDeck<T extends { lemma: string; level: Level }>(
  pool: T[],
  idPrefix: 'noun' | 'verb'
): VocabDeckController<T> {
  const [level, setLevel] = useState<Level | 'all'>('A1');
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { learned, toggleLearned } = useAppStore();

  const deck = useMemo(() => {
    const filtered = level === 'all' ? pool : pool.filter((e) => e.level === level);
    return shuffle(filtered);
    // seed 只用來觸發重新洗牌
  }, [level, seed, pool]);

  const card = deck[index] as T | undefined;
  const learnedId = card ? `${idPrefix}:${card.lemma}` : '';
  const isLearned = card ? learned.includes(learnedId) : false;
  const learnedCount = useMemo(
    () => deck.filter((e) => learned.includes(`${idPrefix}:${e.lemma}`)).length,
    [deck, learned, idPrefix]
  );

  const pickLevel = (l: Level | 'all') => {
    setLevel(l);
    setIndex(0);
    setRevealed(false);
  };
  const reshuffle = () => {
    setSeed((s) => s + 1);
    setIndex(0);
    setRevealed(false);
  };
  const go = (dir: number) => {
    if (!deck.length) return;
    setIndex((i) => (i + dir + deck.length) % deck.length);
    setRevealed(false);
  };
  const toggleReveal = () => setRevealed((r) => !r);

  return {
    level,
    pickLevel,
    deck,
    index,
    card,
    revealed,
    toggleReveal,
    go,
    reshuffle,
    isLearned,
    learnedCount,
    learnedId,
    toggleLearned,
  };
}
