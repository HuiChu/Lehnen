import type { ReactNode } from 'react';
import { LEVELS, type Level } from '../data/vocab';
import type { VocabDeckController } from '../hooks/useVocabDeck';
import {
  ChevronLeft,
  ChevronRight,
  RefreshIcon,
  SpeakerIcon,
} from './icons';

interface Props<T> {
  controller: VocabDeckController<T>;
  /** header 小標，如「背單字 · 名詞」。 */
  kicker: string;
  /** header 主標，如「der / die / das 🃏」。 */
  title: string;
  /** header 副標說明。 */
  subtitle: string;
  /** 底部計數後接的說明文字，如「來源：Goethe Wortliste（單字事實）」。 */
  footer: string;
  onSpeak: () => void;
  speaking: boolean;
  /** 卡面內容（正/反面由 revealed 決定，保留各頁差異）。 */
  renderCard: (card: T, revealed: boolean) => ReactNode;
}

/**
 * 背單字卡共用版型外殼：header、等級 chips、可翻面卡片、控制列、底部計數。
 * 名詞/動詞頁僅需提供 controller、文案與 renderCard。
 */
export default function VocabDeck<T>({
  controller,
  kicker,
  title,
  subtitle,
  footer,
  onSpeak,
  speaking,
  renderCard,
}: Props<T>) {
  const { level, pickLevel, deck, index, card, revealed, toggleReveal, go, reshuffle, isLearned, learnedCount, learnedId, toggleLearned } =
    controller;

  return (
    <div className="flex h-full flex-col px-5 pb-4 pt-5">
      <header className="mb-3">
        <p className="text-sm font-medium text-orange-deep">{kicker}</p>
        <h1 className="mt-1 text-2xl font-extrabold text-ink">{title}</h1>
        <p className="mt-1 text-sm text-ink/50">{subtitle}</p>
      </header>

      {/* level chips */}
      <div className="mb-3 flex items-center gap-2">
        {(['all', ...LEVELS] as const).map((l: Level | 'all') => (
          <button
            key={l}
            onClick={() => pickLevel(l)}
            className={`rounded-full px-3 py-1 text-xs font-bold transition ${
              level === l ? 'bg-orange text-white' : 'bg-ink/5 text-ink/50'
            }`}
          >
            {l === 'all' ? '全部' : l}
          </button>
        ))}
        <span className="ml-auto text-xs text-ink/40">
          會了 {learnedCount}/{deck.length}
        </span>
      </div>

      {/* card */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
        {card ? (
          <button
            onClick={toggleReveal}
            className="flex w-full flex-1 flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-card transition active:scale-[0.99]"
          >
            {renderCard(card, revealed)}
          </button>
        ) : (
          <p className="text-ink/40">這個級別暫無單字。</p>
        )}
      </div>

      {/* controls */}
      {card && (
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => go(-1)}
            aria-label="上一個"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink/50 active:scale-95"
          >
            <ChevronLeft width={22} height={22} />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={onSpeak}
              aria-label="朗讀"
              className={`flex h-11 w-11 items-center justify-center rounded-full active:scale-95 ${
                speaking ? 'bg-orange text-white' : 'bg-ink/5 text-ink/60'
              }`}
            >
              <SpeakerIcon width={22} height={22} />
            </button>
            <button
              onClick={() => toggleLearned(learnedId)}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition active:scale-95 ${
                isLearned ? 'bg-emerald-500 text-white' : 'bg-ink/5 text-ink/60'
              }`}
            >
              {isLearned ? '✓ 會了' : '標記會了'}
            </button>
            <button
              onClick={reshuffle}
              aria-label="重新洗牌"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink/50 active:scale-95"
            >
              <RefreshIcon width={20} height={20} />
            </button>
          </div>
          <button
            onClick={() => go(1)}
            aria-label="下一個"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink/50 active:scale-95"
          >
            <ChevronRight width={22} height={22} />
          </button>
        </div>
      )}
      <p className="mt-2 text-center text-xs text-ink/35">
        {deck.length ? `${index + 1} / ${deck.length}` : ''} · {footer}
      </p>
    </div>
  );
}
