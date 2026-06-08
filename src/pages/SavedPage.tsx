import { Link } from 'react-router-dom';
import { topics } from '../data/topics';
import { useAppStore } from '../store/useAppStore';
import { useSpeech } from '../hooks/useSpeech';
import { SpeakerIcon, HeartIcon } from '../components/icons';

interface FlatChunk {
  topicId: string;
  topicTitle: string;
  emoji: string;
  pattern: string;
  patternZh: string;
  id: string;
  firstExample: string;
}

const allChunks: FlatChunk[] = topics.flatMap((t) =>
  t.chunks.map((c) => ({
    topicId: t.id,
    topicTitle: t.title,
    emoji: t.emoji,
    pattern: c.pattern,
    patternZh: c.patternZh,
    id: c.id,
    firstExample: c.examples[0].de,
  }))
);

export default function SavedPage() {
  const { favorites, settings, toggleFavorite } = useAppStore();
  const speech = useSpeech();
  const saved = allChunks.filter((c) => favorites.includes(c.id));

  return (
    <div className="no-scrollbar h-full overflow-y-auto px-5 pb-6 pt-5">
      <h1 className="mb-1 text-2xl font-extrabold text-ink">收藏的語塊</h1>
      <p className="mb-5 text-sm text-ink/50">{saved.length} 個已收藏</p>

      {saved.length === 0 ? (
        <div className="mt-16 text-center text-ink/40">
          <HeartIcon width={40} height={40} className="mx-auto mb-3" />
          <p>還沒有收藏。</p>
          <p className="text-sm">在練習頁點愛心 ♥ 把語塊存起來。</p>
        </div>
      ) : (
        <div className="space-y-3">
          {saved.map((c) => (
            <div key={c.id} className="rounded-3xl bg-white p-4 shadow-card">
              <div className="flex items-start justify-between gap-2">
                <Link to={`/learn?topic=${c.topicId}`} className="min-w-0 flex-1">
                  <p className="text-xs text-ink/40">
                    {c.emoji} {c.topicTitle}
                  </p>
                  <p className="mt-0.5 text-lg font-bold text-orange-deep">
                    {c.pattern}
                  </p>
                  <p className="text-sm text-ink/50">{c.patternZh}</p>
                  <p className="mt-1 truncate text-sm text-ink/70">
                    {c.firstExample}
                  </p>
                </Link>
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <button
                    onClick={() =>
                      speech.speak(c.firstExample, {
                        rate: settings.rate,
                        voiceName: settings.voiceName,
                      })
                    }
                    aria-label="朗讀"
                    className="text-orange"
                  >
                    <SpeakerIcon width={22} height={22} />
                  </button>
                  <button
                    onClick={() => toggleFavorite(c.id)}
                    aria-label="取消收藏"
                    className="text-orange"
                  >
                    <HeartIcon width={22} height={22} filled />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
