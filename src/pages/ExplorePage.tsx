import { Link } from 'react-router-dom';
import { resources } from '../data/resources';
import { stories } from '../data/stories';
import ResourceCard from '../components/ResourceCard';

export default function ExplorePage() {
  return (
    <div className="no-scrollbar h-full overflow-y-auto px-5 pb-6 pt-5">
      <header className="mb-5">
        <p className="text-sm font-medium text-orange-deep">童話 · 故事閱讀</p>
        <h1 className="mt-1 text-2xl font-extrabold text-ink">
          格林童話 · 讀故事學德文 📖
        </h1>
        <p className="mt-1 text-sm text-ink/50">
          在 App 內讀公共領域格林童話（逐句朗讀＋文法上色），下方另附官方新聞/課程/podcast 外連。
        </p>
      </header>

      {/* 故事閱讀（App 內，公共領域） */}
      <section className="mb-6">
        <h2 className="mb-2 px-1 text-sm font-bold text-ink/60">
          📖 故事閱讀（格林童話 · 公共領域）
        </h2>
        <div className="space-y-3">
          {stories.map((story) => (
            <Link
              key={story.id}
              to={`/story/${story.id}`}
              className="block rounded-3xl bg-white p-4 shadow-card transition active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream-deep text-2xl">
                  {story.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-base font-bold text-ink">{story.title}</h3>
                    <span className="shrink-0 rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-bold text-ink/45">
                      {story.level}
                    </span>
                  </div>
                  <p className="text-sm text-ink/50">{story.titleZh}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/40">{story.blurb}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 官方來源（外連，不轉存內文） */}
      <section>
        <h2 className="mb-2 px-1 text-sm font-bold text-ink/60">
          🔗 官方來源（外連 · 新聞/課程/Podcast）
        </h2>
        <div className="space-y-3">
          {resources.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </section>

      <p className="mt-6 px-1 text-center text-[11px] leading-relaxed text-ink/30">
        公廣新聞與 podcast 版權所有，本頁僅連結官方來源、不複製內文。
        故事文字取自公共領域（格林童話）。
      </p>
    </div>
  );
}
