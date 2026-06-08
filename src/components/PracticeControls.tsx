import { PlayIcon, SpeakerIcon } from './icons';

interface Props {
  recording: boolean;
  hasRecording: boolean;
  speaking: boolean;
  onRecord: () => void;
  onPlayMine: () => void;
  onListenAI: () => void;
  hint: string;
}

export default function PracticeControls({
  recording,
  hasRecording,
  speaking,
  onRecord,
  onPlayMine,
  onListenAI,
  hint,
}: Props) {
  return (
    <div className="text-center">
      <div className="flex items-end justify-center gap-10">
        {/* 錄音 */}
        <button onClick={onRecord} className="flex flex-col items-center gap-1.5">
          <span
            className={`flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-500 bg-white ${
              recording ? 'recording' : ''
            }`}
          >
            <span
              className={`bg-red-500 transition-all ${
                recording ? 'h-5 w-5 rounded-md' : 'h-7 w-7 rounded-full'
              }`}
            />
          </span>
          <span className="text-sm font-semibold text-orange-deep">錄音</span>
        </button>

        {/* 聽我 */}
        <button
          onClick={onPlayMine}
          disabled={!hasRecording}
          className="flex flex-col items-center gap-1.5 disabled:opacity-35"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange text-white shadow-card">
            <PlayIcon width={28} height={28} />
          </span>
          <span className="text-sm font-semibold text-orange-deep">聽我</span>
        </button>

        {/* 聽 AI */}
        <button onClick={onListenAI} className="flex flex-col items-center gap-1.5">
          <span
            className={`flex h-16 w-16 items-center justify-center rounded-full transition ${
              speaking ? 'bg-orange text-white' : 'bg-ink/10 text-ink/60'
            }`}
          >
            <SpeakerIcon width={28} height={28} />
          </span>
          <span className="text-sm font-semibold text-orange-deep">聽 AI</span>
        </button>
      </div>
      <p className="mt-4 text-sm text-ink/45">{hint}</p>
    </div>
  );
}
