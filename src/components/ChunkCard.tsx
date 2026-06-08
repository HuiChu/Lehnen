import { SpeakerIcon } from './icons';

interface Props {
  pattern: string;
  patternZh: string;
  onSpeak: () => void;
  speaking: boolean;
}

/** 高亮句型中的 [X] 佔位符 */
function renderPattern(pattern: string) {
  const parts = pattern.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <span key={i} className="text-orange-deep">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ChunkCard({ pattern, patternZh, onSpeak, speaking }: Props) {
  return (
    <div className="relative">
      <span className="absolute -top-3 left-5 z-10 rounded-full bg-orange px-4 py-1.5 text-sm font-bold text-white shadow-card">
        Chunk Practice
      </span>
      <div className="rounded-3xl border-2 border-orange bg-white px-6 pb-6 pt-8 shadow-card">
        <button
          onClick={onSpeak}
          aria-label="朗讀句型"
          className={`absolute right-5 top-7 text-orange transition ${
            speaking ? 'scale-110 text-orange-deep' : 'hover:text-orange-deep'
          }`}
        >
          <SpeakerIcon width={26} height={26} />
        </button>
        <p className="pr-8 text-2xl font-extrabold leading-snug text-orange-deep">
          {renderPattern(pattern)}
        </p>
        <p className="mt-2 text-base text-ink/55">{patternZh}</p>
      </div>
    </div>
  );
}
