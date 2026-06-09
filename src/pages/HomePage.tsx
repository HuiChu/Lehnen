import { Link } from 'react-router-dom';
import { topics } from '../data/topics';
import { useAppStore } from '../store/useAppStore';
import TopicCard from '../components/TopicCard';
import { CompassIcon, ChevronRight } from '../components/icons';

export default function HomePage() {
  const practiced = useAppStore((s) => s.practiced);

  const practicedIn = (topicId: string) =>
    topics
      .find((t) => t.id === topicId)!
      .chunks.filter((c) => practiced.includes(c.id)).length;

  return (
    <div className="no-scrollbar h-full overflow-y-auto px-5 pb-6 pt-5">
      <header className="mb-5">
        <p className="text-sm font-medium text-orange-deep">語塊學德文 · Lehnen</p>
        <h1 className="mt-1 text-2xl font-extrabold text-ink">
          選一個情境開始跟讀 👇
        </h1>
        <p className="mt-1 text-sm text-ink/50">
          用「可重複套用的句型」學德文，配例句大量輸入、跟讀矯正發音。
        </p>
      </header>

      {/* 探索入口 */}
      <Link
        to="/explore"
        className="mb-4 flex items-center gap-3 rounded-3xl bg-orange p-4 text-white shadow-card transition active:scale-[0.98]"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
          <CompassIcon width={26} height={26} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold">探索德語內容</h3>
          <p className="text-sm text-white/80">新聞 · 故事 · Podcast（正式來源）</p>
        </div>
        <ChevronRight width={22} height={22} className="shrink-0 text-white/80" />
      </Link>

      <div className="space-y-3">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            practicedCount={practicedIn(topic.id)}
          />
        ))}
      </div>
    </div>
  );
}
