import type { SourceAttribution } from '../types';

interface Props {
  source: SourceAttribution;
  /** 外層 <p> 的樣式（呼叫端決定間距/字級）。 */
  className?: string;
  /** 是否顯示「來源：」前綴，預設 true。 */
  prefix?: boolean;
  /** 有 url 時是否把來源名做成連結，預設 true。 */
  link?: boolean;
}

/**
 * 統一的來源標註行：「來源：名稱（連結）· 授權 · 作者」。
 * 依 url/license/author 是否存在自動增減欄位，取代各頁手刻版本。
 */
export default function SourceLine({
  source,
  className = 'text-center text-[11px] text-ink/30',
  prefix = true,
  link = true,
}: Props) {
  return (
    <p className={className}>
      {prefix && '來源：'}
      {link && source.url ? (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-orange"
        >
          {source.name}
        </a>
      ) : (
        source.name
      )}
      {source.license && ` · ${source.license}`}
      {source.author && ` · ${source.author}`}
    </p>
  );
}
