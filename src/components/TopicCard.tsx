import { Link } from 'react-router-dom';
import type { Topic } from '../types';

interface Props {
  topic: Topic;
  practicedCount: number;
}

export default function TopicCard({ topic, practicedCount }: Props) {
  const total = topic.chunks.length;
  const pct = total ? Math.round((practicedCount / total) * 100) : 0;

  return (
    <Link
      to={`/learn?topic=${topic.id}`}
      className="block rounded-3xl bg-white p-4 shadow-card transition active:scale-[0.98]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream-deep text-3xl">
          {topic.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-lg font-bold text-ink">{topic.title}</h3>
            <span className="shrink-0 rounded-full bg-orange-soft/50 px-2 py-0.5 text-[11px] font-bold text-orange-deep">
              {topic.level}
            </span>
          </div>
          <p className="text-sm text-ink/50">
            {topic.titleZh} · {total} 個語塊
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-orange transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
