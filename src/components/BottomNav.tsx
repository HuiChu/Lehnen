import { NavLink } from 'react-router-dom';
import { BookIcon, MicIcon, LayersIcon, ActivityIcon } from './icons';

const items = [
  { to: '/explore', label: '童話', Icon: BookIcon },
  { to: '/', label: '情境練習', Icon: MicIcon, end: true },
  { to: '/vocab/nouns', label: '名詞', Icon: LayersIcon },
  { to: '/vocab/verbs', label: '動詞', Icon: ActivityIcon },
];

export default function BottomNav() {
  return (
    <nav className="shrink-0 border-t border-black/5 bg-cream/95 px-2 pb-[env(safe-area-inset-bottom)] pt-1.5 backdrop-blur">
      <ul className="flex items-stretch justify-between">
        {items.map(({ to, label, Icon, end }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-1 text-[10px] font-medium tracking-wide transition-colors ${
                  isActive ? 'text-orange-deep' : 'text-ink/40'
                }`
              }
            >
              <Icon width={22} height={22} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
