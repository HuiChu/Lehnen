interface Props {
  /** 是否正在播放（朗讀或回放錄音） */
  active: boolean;
  /** 錄音回放的實際進度 0–1；朗讀（無進度）時不傳 */
  progress?: number;
}

/**
 * 底部播放進度條。
 * - 回放錄音時：依 `progress` 顯示真實進度（0→100%）。
 * - 朗讀（聽 AI，無進度）時：顯示輕微脈動；`active` 為 false 立即靜止歸位。
 */
export default function AudioScrubber({ active, progress }: Props) {
  const hasProgress = typeof progress === 'number';
  const width = hasProgress ? `${Math.round((progress ?? 0) * 100)}%` : active ? '100%' : '0%';

  return (
    <div className="flex items-center gap-3 px-1">
      <span className="text-ink/40">{active ? '❙❙' : '▶'}</span>
      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
        <div
          className={`absolute inset-y-0 left-0 rounded-full bg-orange ${
            active && !hasProgress ? 'opacity-60' : ''
          }`}
          style={{ width, transition: 'width .15s linear' }}
        />
      </div>
      <span className="text-ink/40">🔊</span>
    </div>
  );
}
