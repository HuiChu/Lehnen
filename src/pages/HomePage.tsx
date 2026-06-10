import { Link } from 'react-router-dom';
import { topics } from '../data/topics';
import { useAppStore } from '../store/useAppStore';
import TopicCard from '../components/TopicCard';
import { HeartIcon, UserIcon, SettingsIcon } from '../components/icons';

export default function HomePage() {
  const practiced = useAppStore((s) => s.practiced);

  const practicedIn = (topicId: string) =>
    topics
      .find((t) => t.id === topicId)!
      .chunks.filter((c) => practiced.includes(c.id)).length;

  return (
    <div className="no-scrollbar h-full overflow-y-auto px-5 pb-6 pt-5">
      <header className="mb-5">
        <div className="flex items-start justify-between">
          <p className="text-sm font-medium text-orange-deep">語塊學德文 · Lehnen</p>
          <div className="flex items-center gap-1 text-ink/40">
            <Link to="/my" aria-label="我的進度" className="p-1.5 hover:text-orange">
              <UserIcon width={20} height={20} />
            </Link>
            <Link to="/saved" aria-label="收藏" className="p-1.5 hover:text-orange">
              <HeartIcon width={20} height={20} />
            </Link>
            <Link to="/settings" aria-label="設定" className="p-1.5 hover:text-orange">
              <SettingsIcon width={20} height={20} />
            </Link>
          </div>
        </div>
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
