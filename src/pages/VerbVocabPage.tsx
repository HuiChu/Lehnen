import { verbs, type VerbEntry } from '../data/vocab';
import { useAppStore } from '../store/useAppStore';
import { useSpeech } from '../hooks/useSpeech';
import { useVocabDeck } from '../hooks/useVocabDeck';
import { annotate } from '../grammar/annotate';
import VocabDeck from '../components/VocabDeck';
import GrammarText from '../components/GrammarText';
import SourceLine from '../components/SourceLine';

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-ink/5 py-2">
      <span className="text-xs text-ink/45">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

export default function VerbVocabPage() {
  const deck = useVocabDeck<VerbEntry>(verbs, 'verb');
  const { settings } = useAppStore();
  const speech = useSpeech();

  const speak = () => {
    const card = deck.card;
    if (!card) return;
    speech.speak(card.lemma, { rate: settings.rate, voiceName: settings.voiceName });
  };

  const renderCard = (card: VerbEntry, revealed: boolean) => (
    <>
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
          {card.example && (
            <div className="mt-3 border-t border-ink/5 pt-3">
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
          <div className="pt-2 text-center">
            <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-bold text-ink/45">
              {card.level}
            </span>
          </div>
        </div>
      )}
    </>
  );

  return (
    <VocabDeck
      controller={deck}
      kicker="背單字 · 動詞"
      title="動詞變位 ⚡"
      subtitle="看原形回想變位，點卡片看時態表。"
      footer="變位為文法事實（規則/不規則表）"
      onSpeak={speak}
      speaking={speech.speaking}
      renderCard={renderCard}
    />
  );
}
