import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findStory } from '../data/stories';
import { useAppStore } from '../store/useAppStore';
import { useSpeech } from '../hooks/useSpeech';
import { annotate } from '../grammar/annotate';
import AudioScrubber from '../components/AudioScrubber';
import GrammarText from '../components/GrammarText';
import GrammarLegend from '../components/GrammarLegend';
import { CloseIcon, GlobeIcon, GrammarIcon, SpeakerIcon } from '../components/icons';

export default function StoryPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const story = id ? findStory(id) : undefined;

  const { settings, updateSettings } = useAppStore();
  const speech = useSpeech();
  const [active, setActive] = useState<number | null>(null);

  // 童話原本沒有預存 marks：依設定即時補上名詞/介係詞標記，與情境例句一致。
  const segMarks = useMemo(
    () => (story ? story.segments.map((s) => s.marks ?? annotate(s.de)) : []),
    [story]
  );

  if (!story) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="text-ink/50">找不到這篇故事。</p>
        <button
          onClick={() => navigate('/explore')}
          className="rounded-full bg-orange px-4 py-2 text-sm font-bold text-white"
        >
          回探索頁
        </button>
      </div>
    );
  }

  const speakSegment = (de: string, i: number) => {
    setActive(i);
    speech.speak(de, { rate: settings.rate, voiceName: settings.voiceName });
  };

  const readAll = () => {
    // 依序朗讀全篇（簡單串接，speechSynthesis 會自行排隊）
    story.segments.forEach((seg) => {
      speech.speak(seg.de, { rate: settings.rate, voiceName: settings.voiceName });
    });
  };

  return (
    <div className="flex h-full flex-col">
      {/* header */}
      <header className="relative flex items-center justify-center px-4 pt-3 pb-1">
        <button
          onClick={() => navigate('/explore')}
          aria-label="關閉"
          className="absolute left-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 text-ink/60"
        >
          <CloseIcon width={18} height={18} />
        </button>
        <h1 className="text-lg font-bold text-orange-deep">
          {story.emoji} {story.title}
        </h1>
        <div className="absolute right-4 flex items-center gap-3">
          <button
            onClick={() => updateSettings({ showGrammar: !settings.showGrammar })}
            aria-label="切換文法標記"
            className={settings.showGrammar ? 'text-orange' : 'text-ink/40'}
          >
            <GrammarIcon width={22} height={22} />
          </button>
          <button
            onClick={() =>
              updateSettings({ showTranslation: !settings.showTranslation })
            }
            aria-label="切換對照翻譯"
            className={settings.showTranslation ? 'text-orange' : 'text-ink/40'}
          >
            <GlobeIcon width={22} height={22} />
          </button>
        </div>
      </header>
      <p className="mb-2 text-center text-xs text-ink/40">
        {story.titleZh} · {story.level} · 點句子朗讀
      </p>

      {/* body */}
      <div className="no-scrollbar flex-1 space-y-3 overflow-y-auto px-5 pt-2">
        {story.segments.map((seg, i) => (
          <button
            key={i}
            onClick={() => speakSegment(seg.de, i)}
            className={`block w-full rounded-2xl bg-white p-4 text-left shadow-card transition active:scale-[0.99] ${
              active === i ? 'ring-2 ring-orange' : ''
            }`}
          >
            <div className="flex items-start gap-2">
              <SpeakerIcon
                width={18}
                height={18}
                className={`mt-1 shrink-0 ${active === i && speech.speaking ? 'text-orange' : 'text-ink/30'}`}
              />
              <div className="min-w-0 flex-1">
                <p className="font-semibold leading-snug text-ink">
                  <GrammarText
                    text={seg.de}
                    marks={segMarks[i]}
                    enabled={settings.showGrammar}
                  />
                </p>
                {settings.showTranslation && (
                  <div className="mt-2 space-y-1">
                    {seg.zh && <p className="text-sm text-ink/50">{seg.zh}</p>}
                    {seg.en && <p className="text-sm italic text-ink/40">{seg.en}</p>}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}

        {settings.showGrammar && (
          <div className="pt-1">
            <GrammarLegend />
          </div>
        )}

        {/* source */}
        <p className="px-1 pt-1 text-center text-[11px] leading-relaxed text-ink/30">
          來源：
          <a
            href={story.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange"
          >
            {story.source.name}
          </a>
          {story.source.license && ` · ${story.source.license}`}
        </p>

        <div className="flex justify-center pb-2">
          <button
            onClick={readAll}
            className="flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-card active:scale-95"
          >
            <SpeakerIcon width={18} height={18} />
            朗讀全篇
          </button>
        </div>

        {speech.supported && !speech.hasGermanVoice && (
          <p className="pb-2 text-center text-xs text-amber-600/80">
            未偵測到德語語音，朗讀可能使用預設語音。
          </p>
        )}
      </div>

      {/* footer scrubber */}
      <div className="shrink-0 px-5 pb-2 pt-1">
        <AudioScrubber active={speech.speaking} />
      </div>
    </div>
  );
}
