import { topics } from '../data/topics';
import { useAppStore } from '../store/useAppStore';
import TopicCard from '../components/TopicCard';

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
