import { useState } from 'react';
import type { GrammarMark, Gender, Kasus, Tempus } from '../types';

interface Props {
  text: string;
  marks?: GrammarMark[];
  /** 是否啟用文法標記（關閉時顯示純文字） */
  enabled?: boolean;
  className?: string;
}

const genderArticle: Record<Gender, string> = { m: 'der', f: 'die', n: 'das' };

/** 名詞依性別上色；介係詞用琥珀色 */
function markClass(mark: GrammarMark): string {
  if (mark.pos === 'noun' && mark.gender) {
    return {
      m: 'text-blue-600 decoration-blue-400',
      f: 'text-rose-600 decoration-rose-400',
      n: 'text-emerald-600 decoration-emerald-400',
    }[mark.gender];
  }
  if (mark.pos === 'prep') return 'text-amber-600 decoration-amber-400';
  if (mark.pos === 'verb') return 'text-indigo-600 decoration-indigo-400';
  return 'text-violet-600 decoration-violet-400';
}

const kasusZh: Record<Kasus, string> = {
  nom: 'Nom 主格',
  akk: 'Akk 第四格',
  dat: 'Dat 第三格',
  gen: 'Gen 第二格',
};

const tenseZh: Record<Tempus, string> = {
  präsens: '現在式 Präsens',
  präteritum: '過去式 Präteritum',
  perfekt: '現在完成式 Perfekt',
  plusquamperfekt: '過去完成式 Plusquamperfekt',
  futur1: '未來式 Futur I',
  konjunktiv2: '虛擬二式 Konjunktiv II',
};

/** 找出每個 mark 在句中的第一個（不重疊）出現位置，回傳已排序的片段 */
function buildRanges(text: string, marks: GrammarMark[]) {
  const ranges: { start: number; end: number; mark: GrammarMark }[] = [];
  for (const mark of marks) {
    if (!mark.text) continue;
    let from = 0;
    // 找尚未被佔用的第一個出現位置
    while (from <= text.length) {
      const idx = text.indexOf(mark.text, from);
      if (idx < 0) break;
      const end = idx + mark.text.length;
      const overlaps = ranges.some((r) => idx < r.end && end > r.start);
      if (!overlaps) {
        ranges.push({ start: idx, end, mark });
        break;
      }
      from = idx + 1;
    }
  }
  return ranges.sort((a, b) => a.start - b.start);
}

function MarkPopover({ mark }: { mark: GrammarMark }) {
  return (
    <span
      role="tooltip"
      className="absolute left-1/2 top-full z-10 mt-1 w-max max-w-[14rem] -translate-x-1/2 rounded-xl bg-ink px-3 py-2 text-left text-xs leading-relaxed text-white shadow-lg"
    >
      {mark.pos === 'noun' && mark.gender && (
        <span className="block font-bold">
          {genderArticle[mark.gender]} {mark.lemma ?? mark.text}
          {mark.plural && (
            <span className="font-normal text-white/70">，複數 {mark.plural}</span>
          )}
        </span>
      )}
      {mark.pos === 'prep' && (
        <span className="block font-bold">
          介係詞 {mark.lemma ?? mark.text}
          {mark.governs && (
            <span className="font-normal text-white/70">
              {' '}→ 支配 {kasusZh[mark.governs]}
            </span>
          )}
        </span>
      )}
      {mark.pos === 'verb' && (
        <span className="block font-bold">
          動詞 {mark.infinitive ?? mark.lemma ?? mark.text}
          {mark.tense && (
            <span className="font-normal text-white/70">
              {' '}· {tenseZh[mark.tense]}
            </span>
          )}
        </span>
      )}
      {mark.pos === 'verb' && (mark.partizip || mark.aux) && (
        <span className="block text-white/70">
          {mark.aux ? `${mark.aux} + ` : ''}
          {mark.partizip ?? ''}
        </span>
      )}
      {mark.kasus && (
        <span className="block text-white/70">此處：{kasusZh[mark.kasus]}</span>
      )}
      {mark.note && <span className="block text-white/80">{mark.note}</span>}
    </span>
  );
}

/**
 * 把德語句子中被標記的單字上色，點擊顯示文法小卡。
 * 無 marks 或關閉時，退回純文字。
 */
export default function GrammarText({ text, marks, enabled = true, className }: Props) {
  const [active, setActive] = useState<number | null>(null);

  if (!enabled || !marks?.length) {
    return <span className={className}>{text}</span>;
  }

  const ranges = buildRanges(text, marks);
  if (!ranges.length) return <span className={className}>{text}</span>;

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach((r, i) => {
    if (r.start > cursor) nodes.push(text.slice(cursor, r.start));
    const isActive = active === i;
    nodes.push(
      <span key={`m${i}`} className="relative inline-block">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActive(isActive ? null : i);
          }}
          className={`cursor-pointer font-semibold underline decoration-dotted underline-offset-4 ${markClass(
            r.mark
          )}`}
        >
          {text.slice(r.start, r.end)}
        </button>
        {isActive && <MarkPopover mark={r.mark} />}
      </span>
    );
    cursor = r.end;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));

  return <span className={className}>{nodes}</span>;
}
