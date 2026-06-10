import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { topics, findTopic } from '../data/topics';
import { useAppStore } from '../store/useAppStore';
import { useSpeech } from '../hooks/useSpeech';
import { useRecorder } from '../hooks/useRecorder';
import ChunkCard from '../components/ChunkCard';
import ExampleCarousel from '../components/ExampleCarousel';
import PracticeControls from '../components/PracticeControls';
import AudioScrubber from '../components/AudioScrubber';
import VoiceWarning from '../components/VoiceWarning';
import { ChevronLeft, ChevronRight, CloseIcon, RefreshIcon } from '../components/icons';

export default function LearnPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const topicId = params.get('topic') ?? topics[0].id;
  const topic = findTopic(topicId) ?? topics[0];

  const [chunkIndex, setChunkIndex] = useState(0);
  const [exampleIndex, setExampleIndex] = useState(0);

  const { settings, updateSettings, isFavorite, toggleFavorite, markPracticed } =
    useAppStore();
  const speech = useSpeech();
  const recorder = useRecorder();

  const chunk = topic.chunks[chunkIndex];
  const example = chunk.examples[exampleIndex];
  const favorite = isFavorite(chunk.id);

  // 切換語塊時重置例句索引
  useEffect(() => setExampleIndex(0), [chunkIndex, topicId]);

  const hint = useMemo(() => {
    if (recorder.error) return recorder.error;
    if (recorder.status === 'recording') return '錄音中… 再按一次紅鈕停止';
    if (recorder.status === 'denied') return '無法取得麥克風權限，請檢查瀏覽器設定';
    if (recorder.hasRecording) return '按「聽我」回放你的錄音，再與 AI 比較';
    return '請點擊 🔴 進行錄音';
  }, [recorder.status, recorder.hasRecording, recorder.error]);

  const listenAI = () => {
    speech.speak(example.de, { rate: settings.rate, voiceName: settings.voiceName });
    markPracticed(chunk.id);
  };

  const speakPattern = () =>
    speech.speak(chunk.pattern.replace(/\[[^\]]+\]/g, ''), {
      rate: settings.rate,
      voiceName: settings.voiceName,
    });

  const handleRecord = () => {
    if (recorder.status === 'recording') {
      recorder.stop();
    } else {
      recorder.start();
      markPracticed(chunk.id);
    }
  };

  const goChunk = (dir: number) =>
    setChunkIndex((i) => (i + dir + topic.chunks.length) % topic.chunks.length);

  return (
    <div className="flex h-full flex-col">
      {/* header */}
      <header className="relative flex items-center justify-center px-4 pt-3 pb-1">
        <button
          onClick={() => navigate('/')}
          aria-label="關閉"
          className="absolute left-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 text-ink/60"
        >
          <CloseIcon width={18} height={18} />
        </button>
        <h1 className="text-lg font-bold text-orange-deep">
          # {topic.title}
        </h1>
      </header>
      <p className="mb-2 text-center text-xs text-ink/40">
        {topic.titleZh} · 語塊 {chunkIndex + 1} / {topic.chunks.length}
      </p>

      {/* scrollable body */}
      <div className="no-scrollbar flex-1 space-y-5 overflow-y-auto px-5 pt-2">
        <ChunkCard
          pattern={chunk.pattern}
          patternZh={chunk.patternZh}
          onSpeak={speakPattern}
          speaking={speech.speaking}
        />

        <ExampleCarousel
          examples={chunk.examples}
          index={exampleIndex}
          onIndexChange={setExampleIndex}
          showTranslation={settings.showTranslation}
          onToggleTranslation={() =>
            updateSettings({ showTranslation: !settings.showTranslation })
          }
          showGrammar={settings.showGrammar}
          onToggleGrammar={() =>
            updateSettings({ showGrammar: !settings.showGrammar })
          }
          favorite={favorite}
          onToggleFavorite={() => toggleFavorite(chunk.id)}
        />

        <PracticeControls
          recording={recorder.status === 'recording'}
          hasRecording={recorder.hasRecording}
          speaking={speech.speaking}
          onRecord={handleRecord}
          onPlayMine={recorder.play}
          onListenAI={listenAI}
          hint={hint}
        />

        {/* chunk navigation */}
        <div className="flex items-center justify-center gap-8 pb-2">
          <button
            onClick={() => goChunk(-1)}
            aria-label="上一個語塊"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-card active:scale-95"
          >
            <ChevronLeft width={26} height={26} />
          </button>
          <button
            onClick={() => setExampleIndex(0)}
            aria-label="重來"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange bg-white text-orange active:scale-95"
          >
            <RefreshIcon width={24} height={24} />
          </button>
          <button
            onClick={() => goChunk(1)}
            aria-label="下一個語塊"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-card active:scale-95"
          >
            <ChevronRight width={26} height={26} />
          </button>
        </div>

        <VoiceWarning supported={speech.supported} hasGermanVoice={speech.hasGermanVoice} />
      </div>

      {/* footer scrubber */}
      <div className="shrink-0 px-5 pb-2 pt-1">
        <AudioScrubber
          active={speech.speaking || recorder.playing}
          progress={recorder.playing ? recorder.progress : undefined}
        />
      </div>
    </div>
  );
}
