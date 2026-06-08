import { useRef } from 'react';
import type { Example } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  GlobeIcon,
  HeartIcon,
  SlidersIcon,
} from './icons';

interface Props {
  examples: Example[];
  index: number;
  onIndexChange: (i: number) => void;
  showTranslation: boolean;
  onToggleTranslation: () => void;
  favorite: boolean;
  onToggleFavorite: () => void;
}

export default function ExampleCarousel({
  examples,
  index,
  onIndexChange,
  showTranslation,
  onToggleTranslation,
  favorite,
  onToggleFavorite,
}: Props) {
  const touchX = useRef<number | null>(null);
  const current = examples[index];
  const count = examples.length;

  const go = (dir: number) =>
    onIndexChange((index + dir + count) % count);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <div className="rounded-3xl bg-white p-5 shadow-card">
      {/* header */}
      <div className="flex items-center justify-between text-ink/40">
        <span className="text-sm font-medium">例句</span>
        <div className="flex items-center gap-4">
          <button aria-label="顯示設定" className="hover:text-orange">
            <SlidersIcon width={22} height={22} />
          </button>
          <button
            onClick={onToggleTranslation}
            aria-label="切換中文對照"
            className={showTranslation ? 'text-orange' : 'hover:text-orange'}
          >
            <GlobeIcon width={22} height={22} />
          </button>
          <button
            onClick={onToggleFavorite}
            aria-label="收藏"
            className={favorite ? 'text-orange' : 'hover:text-orange'}
          >
            <HeartIcon width={22} height={22} filled={favorite} />
          </button>
        </div>
      </div>

      {/* sentence */}
      <div
        className="flex min-h-[150px] items-center gap-1 py-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={() => go(-1)}
          aria-label="上一句"
          className="shrink-0 text-ink/25 hover:text-orange"
        >
          <ChevronLeft width={28} height={28} />
        </button>
        <div className="flex-1 text-center">
          <p className="text-xl font-semibold leading-snug text-ink">
            {current.de}
          </p>
          {showTranslation && (
            <p className="mt-3 text-sm text-ink/50">{current.zh}</p>
          )}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="下一句"
          className="shrink-0 text-ink/25 hover:text-orange"
        >
          <ChevronRight width={28} height={28} />
        </button>
      </div>

      {/* dots */}
      <div className="flex justify-center gap-2">
        {examples.map((_, i) => (
          <button
            key={i}
            onClick={() => onIndexChange(i)}
            aria-label={`例句 ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-2 bg-orange' : 'w-2 bg-ink/15'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
