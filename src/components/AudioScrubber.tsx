interface Props {
  active: boolean;
}

/**
 * 底部播放進度條。朗讀/播放進行中時顯示流動動畫，
 * 閒置時為靜態軌道（純視覺，呼應參考圖底部播放列）。
 */
export default function AudioScrubber({ active }: Props) {
  return (
    <div className="flex items-center gap-3 px-1">
      <span className="text-ink/40">{active ? '❙❙' : '▶'}</span>
      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
        <div
          className={`absolute inset-y-0 left-0 rounded-full bg-orange ${
            active ? 'animate-[grow_2s_ease-in-out_infinite]' : 'w-1/3'
          }`}
          style={
            active
              ? undefined
              : { transition: 'width .3s' }
          }
        />
      </div>
      <span className="text-ink/40">🔊</span>
      <style>{`
        @keyframes grow {
          0% { width: 8%; }
          50% { width: 92%; }
          100% { width: 8%; }
        }
      `}</style>
    </div>
  );
}
