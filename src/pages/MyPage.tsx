import { topics } from '../data/topics';
import { useAppStore } from '../store/useAppStore';

export default function MyPage() {
  const { practiced, favorites } = useAppStore();
  const totalChunks = topics.reduce((n, t) => n + t.chunks.length, 0);
  const pct = totalChunks ? Math.round((practiced.length / totalChunks) * 100) : 0;

  const stats = [
    { label: '已練習語塊', value: practiced.length },
    { label: '已收藏', value: favorites.length },
    { label: '完成度', value: `${pct}%` },
  ];

  return (
    <div className="no-scrollbar h-full overflow-y-auto px-5 pb-6 pt-5">
      <h1 className="mb-5 text-2xl font-extrabold text-ink">我的學習</h1>

      <div className="mb-6 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-white p-4 text-center shadow-card"
          >
            <p className="text-2xl font-extrabold text-orange-deep">{s.value}</p>
            <p className="mt-1 text-xs text-ink/50">{s.label}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-3 text-sm font-bold text-ink/60">各情境進度</h2>
      <div className="space-y-3">
        {topics.map((t) => {
          const done = t.chunks.filter((c) => practiced.includes(c.id)).length;
          const p = Math.round((done / t.chunks.length) * 100);
          return (
            <div key={t.id} className="rounded-2xl bg-white p-4 shadow-card">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-ink">
                  {t.emoji} {t.title}
                </span>
                <span className="text-ink/45">
                  {done}/{t.chunks.length}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full rounded-full bg-orange transition-all"
                  style={{ width: `${p}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
