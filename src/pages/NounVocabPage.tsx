import { nouns, type NounEntry } from '../data/vocab';
import { useAppStore } from '../store/useAppStore';
import { useSpeech } from '../hooks/useSpeech';
import { useVocabDeck } from '../hooks/useVocabDeck';
import { annotate } from '../grammar/annotate';
import VocabDeck from '../components/VocabDeck';
import GrammarText from '../components/GrammarText';
import SourceLine from '../components/SourceLine';

const article = { m: 'der', f: 'die', n: 'das' } as const;
const articleColor = {
  m: 'text-blue-600',
  f: 'text-rose-600',
  n: 'text-emerald-600',
} as const;
const genderZh = { m: '陽性', f: '陰性', n: '中性' } as const;

export default function NounVocabPage() {
  const deck = useVocabDeck<NounEntry>(nouns, 'noun');
  const { settings } = useAppStore();
  const speech = useSpeech();

  const speak = () => {
    const card = deck.card;
    if (!card) return;
    speech.speak(`${article[card.gender]} ${card.lemma}`, {
      rate: settings.rate,
      voiceName: settings.voiceName,
    });
  };

  const renderCard = (card: NounEntry, revealed: boolean) =>
    !revealed ? (
      <>
        <p className="text-3xl font-extrabold text-ink">{card.lemma}</p>
        <p className="mt-3 text-sm text-ink/40">點一下看 der/die/das</p>
      </>
    ) : (
      <>
        <p className="text-3xl font-extrabold">
          <span className={articleColor[card.gender]}>{article[card.gender]}</span>{' '}
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
            <SourceLine
              source={card.example.source}
              className="mt-1 text-[10px] text-ink/30"
              prefix={false}
              link={false}
            />
          </div>
        )}
      </>
    );

  return (
    <VocabDeck
      controller={deck}
      kicker="背單字 · 名詞"
      title="der / die / das 🃏"
      subtitle="看單字猜性別，點卡片翻面對答案。"
      footer="來源：Goethe Wortliste（單字事實）"
      onSpeak={speak}
      speaking={speech.speaking}
      renderCard={renderCard}
    />
  );
}
