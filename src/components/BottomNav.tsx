import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  MicIcon,
  UserIcon,
  HeartIcon,
  SettingsIcon,
} from './icons';
import { useAppStore } from '../store/useAppStore';

const items = [
  { to: '/', label: 'HOME', Icon: HomeIcon, end: true },
  { to: '/learn', label: 'LEARN', Icon: MicIcon },
  { to: '/my', label: 'MY', Icon: UserIcon },
  { to: '/saved', label: 'SAVED', Icon: HeartIcon },
  { to: '/settings', label: 'SETTING', Icon: SettingsIcon },
];

export default function BottomNav() {
  const favCount = useAppStore((s) => s.favorites.length);
  const practicedCount = useAppStore((s) => s.practiced.length);

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
              {({ isActive }) => (
                <>
                  <span className="relative">
                    <Icon
                      width={22}
                      height={22}
                      {...(label === 'SAVED' ? { filled: isActive } : {})}
                    />
                    {label === 'SAVED' && favCount > 0 && (
                      <span className="absolute -right-2 -top-1 rounded-full bg-orange px-1 text-[9px] font-bold leading-tight text-white">
                        {favCount}
                      </span>
                    )}
                    {label === 'MY' && practicedCount > 0 && (
                      <span className="absolute -right-2 -top-1 rounded-full bg-orange px-1 text-[9px] font-bold leading-tight text-white">
                        {practicedCount}
                      </span>
                    )}
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
