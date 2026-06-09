import { useMemo, useRef } from 'react';
import type { Example } from '../types';
import { annotate } from '../grammar/annotate';
import GrammarText from './GrammarText';
import GrammarLegend from './GrammarLegend';
import {
  ChevronLeft,
  ChevronRight,
  GlobeIcon,
  GrammarIcon,
  HeartIcon,
  SlidersIcon,
} from './icons';

interface Props {
  examples: Example[];
  index: number;
  onIndexChange: (i: number) => void;
  showTranslation: boolean;
  onToggleTranslation: () => void;
  showGrammar: boolean;
  onToggleGrammar: () => void;
  favorite: boolean;
  onToggleFavorite: () => void;
}

/** 「AI 翻譯」小徽章：標記該欄譯文為 AI 補譯（人工譯文不顯示） */
function AiBadge() {
  return (
    <span className="ml-1.5 inline-flex items-center rounded-full bg-orange-soft/60 px-1.5 py-0.5 align-middle text-[10px] font-bold leading-none text-orange-deep">
      AI 翻譯
    </span>
  );
}

export default function ExampleCarousel({
  examples,
  index,
  onIndexChange,
  showTranslation,
  onToggleTranslation,
  showGrammar,
  onToggleGrammar,
  favorite,
  onToggleFavorite,
}: Props) {
  const touchX = useRef<number | null>(null);
  const current = examples[index];
  const count = examples.length;

  // 缺 marks 的例句（如部分手寫/匯入語料）即時補名詞/介係詞標記，全站一致。
  const marks = useMemo(
    () => current.marks ?? annotate(current.de),
    [current]
  );

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

  const aiZh = current.aiTranslated?.includes('zh');
  const aiEn = current.aiTranslated?.includes('en');

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
            onClick={onToggleGrammar}
            aria-label="切換文法標記"
            className={showGrammar ? 'text-orange' : 'hover:text-orange'}
          >
            <GrammarIcon width={22} height={22} />
          </button>
          <button
            onClick={onToggleTranslation}
            aria-label="切換對照翻譯"
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
            <GrammarText text={current.de} marks={marks} enabled={showGrammar} />
          </p>
          {showGrammar && marks.length ? (
            <div className="mt-2">
              <GrammarLegend />
            </div>
          ) : null}
          {showTranslation && (
            <div className="mt-3 space-y-1">
              <p className="text-sm text-ink/50">
                {current.zh}
                {aiZh && <AiBadge />}
              </p>
              {current.en && (
                <p className="text-sm italic text-ink/40">
                  {current.en}
                  {aiEn && <AiBadge />}
                </p>
              )}
            </div>
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

      {/* source attribution（匯入語料才有） */}
      {current.source && (
        <p className="mt-3 text-center text-[11px] text-ink/30">
          來源：
          {current.source.url ? (
            <a
              href={current.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-orange"
            >
              {current.source.name}
            </a>
          ) : (
            current.source.name
          )}
          {current.source.license && ` · ${current.source.license}`}
          {current.source.author && ` · ${current.source.author}`}
        </p>
      )}
    </div>
  );
}
