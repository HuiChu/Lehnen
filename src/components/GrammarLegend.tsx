/** 文法標記顏色圖例：der/die/das 與介係詞格 */
export default function GrammarLegend() {
  const items: { label: string; cls: string }[] = [
    { label: 'der（陽）', cls: 'text-blue-600' },
    { label: 'die（陰）', cls: 'text-rose-600' },
    { label: 'das（中）', cls: 'text-emerald-600' },
    { label: '介係詞+格', cls: 'text-amber-600' },
    { label: '動詞+時態', cls: 'text-indigo-600' },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-ink/40">
      {items.map((it) => (
        <span key={it.label} className="flex items-center gap-1">
          <span className={`font-bold ${it.cls}`}>Aa</span>
          {it.label}
        </span>
      ))}
      <span className="text-ink/30">· 點單字看說明</span>
    </div>
  );
}
