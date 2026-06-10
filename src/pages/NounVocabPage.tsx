import { useMemo, useState } from 'react';
import { nouns, LEVELS, type Level } from '../data/vocab';
import { useAppStore } from '../store/useAppStore';
import { useSpeech } from '../hooks/useSpeech';
import { annotate } from '../grammar/annotate';
import GrammarText from '../components/GrammarText';
import {
  ChevronLeft,
  ChevronRight,
  RefreshIcon,
  SpeakerIcon,
} from '../components/icons';

const article = { m: 'der', f: 'die', n: 'das' } as const;
const articleColor = {
  m: 'text-blue-600',
  f: 'text-rose-600',
  n: 'text-emerald-600',
} as const;
const genderZh = { m: '陽性', f: '陰性', n: '中性' } as const;

function shuffle<T>(arr: T[]): T[] {
  const r = [...arr];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

export default function NounVocabPage() {
  const [level, setLevel] = useState<Level | 'all'>('A1');
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { settings, learned, toggleLearned } = useAppStore();
  const speech = useSpeech();

  const deck = useMemo(() => {
    const pool = level === 'all' ? nouns : nouns.filter((n) => n.level === level);
    return shuffle(pool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, seed]);

  const card = deck[index];
  const learnedId = card ? `noun:${card.lemma}` : '';
  const isLearned = card ? learned.includes(learnedId) : false;
  const learnedCount = useMemo(
    () => deck.filter((n) => learned.includes(`noun:${n.lemma}`)).length,
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
    speech.speak(`${article[card.gender]} ${card.lemma}`, {
      rate: settings.rate,
      voiceName: settings.voiceName,
    });
  };

  return (
    <div className="flex h-full flex-col px-5 pb-4 pt-5">
      <header className="mb-3">
        <p className="text-sm font-medium text-orange-deep">背單字 · 名詞</p>
        <h1 className="mt-1 text-2xl font-extrabold text-ink">
          der / die / das 🃏
        </h1>
        <p className="mt-1 text-sm text-ink/50">看單字猜性別，點卡片翻面對答案。</p>
      </header>

      {/* level chips */}
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

      {/* card */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
        {card ? (
          <button
            onClick={() => setRevealed((r) => !r)}
            className="flex w-full flex-1 flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-card transition active:scale-[0.99]"
          >
            {!revealed ? (
              <>
                <p className="text-3xl font-extrabold text-ink">{card.lemma}</p>
                <p className="mt-3 text-sm text-ink/40">點一下看 der/die/das</p>
              </>
            ) : (
              <>
                <p className="text-3xl font-extrabold">
                  <span className={articleColor[card.gender]}>
                    {article[card.gender]}
                  </span>{' '}
                  <span className="text-ink">{card.lemma}</span>
                </p>
                <p className="mt-2 text-sm text-ink/50">
                  {genderZh[card.gender]}
                  {card.plural ? ` · 複數 ${card.plural}` : ' · 無複數提示'}
                </p>
                {card.zh && <p className="mt-1 text-sm text-ink/50">{card.zh}</p>}
                <span className="mt-3 rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-bold text-ink/45">
                  {card.level}
                </span>
                {card.example && (
                  <div className="mt-4 w-full border-t border-ink/5 pt-3 text-left">
                    <p className="mb-1 text-[11px] font-medium text-ink/40">例句</p>
                    <p className="leading-snug text-ink">
                      <GrammarText
                        text={card.example.de}
                        marks={annotate(card.example.de)}
                        enabled={settings.showGrammar}
                      />
                    </p>
                    <p className="mt-1 text-sm text-ink/50">{card.example.zh}</p>
                    <p className="mt-1 text-[10px] text-ink/30">
                      {card.example.source.name} · {card.example.source.license}
                    </p>
                  </div>
                )}
              </>
            )}
          </button>
        ) : (
          <p className="text-ink/40">這個級別暫無單字。</p>
        )}
      </div>

      {/* controls */}
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
        {deck.length ? `${index + 1} / ${deck.length}` : ''} · 來源：Goethe Wortliste（單字事實）
      </p>
    </div>
  );
}
