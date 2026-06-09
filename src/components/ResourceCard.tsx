import type { ResourceLink } from '../types';
import { resourceTypeMeta } from '../data/resources';
import { ExternalLinkIcon } from './icons';

interface Props {
  resource: ResourceLink;
}

export default function ResourceCard({ resource }: Props) {
  const meta = resourceTypeMeta[resource.type];

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-3xl bg-white p-4 shadow-card transition active:scale-[0.98]"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream-deep text-2xl">
          {meta.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-bold text-ink">{resource.title}</h3>
            <ExternalLinkIcon
              width={15}
              height={15}
              className="shrink-0 text-ink/30"
            />
          </div>
          <p className="text-sm text-ink/50">{resource.titleZh}</p>
          <p className="mt-1 text-xs leading-relaxed text-ink/40">{resource.desc}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="rounded-full bg-orange-soft/50 px-2 py-0.5 text-[10px] font-bold text-orange-deep">
              {meta.label}
            </span>
            {resource.level && (
              <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-bold text-ink/45">
                {resource.level}
              </span>
            )}
            <span className="ml-auto truncate text-[10px] text-ink/30">
              {resource.source.name}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
