import { useMemo, useState } from 'react';
import { verbs, LEVELS, type Level } from '../data/vocab';
import { useAppStore } from '../store/useAppStore';
import { useSpeech } from '../hooks/useSpeech';
import {
  ChevronLeft,
  ChevronRight,
  RefreshIcon,
  SpeakerIcon,
} from '../components/icons';

function shuffle<T>(arr: T[]): T[] {
  const r = [...arr];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-ink/5 py-2">
      <span className="text-xs text-ink/45">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

export default function VerbVocabPage() {
  const [level, setLevel] = useState<Level | 'all'>('A1');
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { settings, learned, toggleLearned } = useAppStore();
  const speech = useSpeech();

  const deck = useMemo(() => {
    const pool = level === 'all' ? verbs : verbs.filter((v) => v.level === level);
    return shuffle(pool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, seed]);

  const card = deck[index];
  const learnedId = card ? `verb:${card.lemma}` : '';
  const isLearned = card ? learned.includes(learnedId) : false;
  const learnedCount = useMemo(
    () => deck.filter((v) => learned.includes(`verb:${v.lemma}`)).length,
    [deck, learned]
  );

  const pickLevel = (l: Level | 'all') => {
    setLevel(l);
    setIndex(0);
    setRevealed(false);
  };
  const reshuffle = () => {
    setSeed((s) => s + 1);
    setIndex(0);
    setRevealed(false);
  };
  const go = (dir: number) => {
    if (!deck.length) return;
    setIndex((i) => (i + dir + deck.length) % deck.length);
    setRevealed(false);
  };
  const speak = () => {
    if (!card) return;
    speech.speak(card.lemma, { rate: settings.rate, voiceName: settings.voiceName });
  };

  return (
    <div className="flex h-full flex-col px-5 pb-4 pt-5">
      <header className="mb-3">
        <p className="text-sm font-medium text-orange-deep">背單字 · 動詞</p>
        <h1 className="mt-1 text-2xl font-extrabold text-ink">動詞變位 ⚡</h1>
        <p className="mt-1 text-sm text-ink/50">看原形回想變位，點卡片看時態表。</p>
      </header>

      <div className="mb-3 flex items-center gap-2">
        {(['all', ...LEVELS] as const).map((l) => (
          <button
            key={l}
            onClick={() => pickLevel(l)}
            className={`rounded-full px-3 py-1 text-xs font-bold transition ${
              level === l ? 'bg-orange text-white' : 'bg-ink/5 text-ink/50'
            }`}
          >
            {l === 'all' ? '全部' : l}
          </button>
        ))}
        <span className="ml-auto text-xs text-ink/40">
          會了 {learnedCount}/{deck.length}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
        {card ? (
          <button
            onClick={() => setRevealed((r) => !r)}
            className="flex w-full flex-1 flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-card transition active:scale-[0.99]"
          >
            <div className="flex items-center gap-2">
              <p className="text-3xl font-extrabold text-indigo-600">{card.lemma}</p>
              {card.irregular && (
                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-600">
                  不規則
                </span>
              )}
            </div>
            {card.zh && <p className="mt-1 text-sm text-ink/50">{card.zh}</p>}

            {!revealed ? (
              <p className="mt-3 text-sm text-ink/40">點一下看變位</p>
            ) : (
              <div className="mt-4 w-full max-w-xs text-left">
                <Row label="現在式 (er/sie/es)" value={card.präsens} />
                <Row label="過去式 (Präteritum)" value={card.präteritum} />
                <Row label="完成式 (Perfekt)" value={`${card.aux} … ${card.partizip}`} />
                <div className="pt-2 text-center">
                  <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-bold text-ink/45">
                    {card.level}
                  </span>
                </div>
              </div>
            )}
          </button>
        ) : (
          <p className="text-ink/40">這個級別暫無單字。</p>
        )}
      </div>

      {card && (
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => go(-1)}
            aria-label="上一個"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink/50 active:scale-95"
          >
            <ChevronLeft width={22} height={22} />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={speak}
              aria-label="朗讀"
              className={`flex h-11 w-11 items-center justify-center rounded-full active:scale-95 ${
                speech.speaking ? 'bg-orange text-white' : 'bg-ink/5 text-ink/60'
              }`}
            >
              <SpeakerIcon width={22} height={22} />
            </button>
            <button
              onClick={() => toggleLearned(learnedId)}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition active:scale-95 ${
                isLearned ? 'bg-emerald-500 text-white' : 'bg-ink/5 text-ink/60'
              }`}
            >
              {isLearned ? '✓ 會了' : '標記會了'}
            </button>
            <button
              onClick={reshuffle}
              aria-label="重新洗牌"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink/50 active:scale-95"
            >
              <RefreshIcon width={20} height={20} />
            </button>
          </div>
          <button
            onClick={() => go(1)}
            aria-label="下一個"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink/50 active:scale-95"
          >
            <ChevronRight width={22} height={22} />
          </button>
        </div>
      )}
      <p className="mt-2 text-center text-xs text-ink/35">
        {deck.length ? `${index + 1} / ${deck.length}` : ''} · 變位為文法事實（規則/不規則表）
      </p>
    </div>
  );
}
