import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  DollarSign,
  Users,
  Settings2,
  TrendingUp,
  ChevronLeft,
} from 'lucide-react';
import clsx from 'clsx';
import { IS_STATIC, getManifest } from '../../services/staticData';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Revenue', href: '/revenue', icon: DollarSign },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Operations', href: '/operations', icon: Settings2 },
  { name: 'Forecasting', href: '/forecasting', icon: TrendingUp },
];

interface SidebarProps {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

export function Sidebar({ collapsed, onCollapsedChange }: SidebarProps) {
  return (
    <aside
      className={clsx(
        'fixed left-0 top-0 z-40 h-screen border-r border-emerald-950/10 bg-white/95 text-zinc-800 shadow-xl shadow-emerald-950/5 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-zinc-950/90 dark:text-white dark:shadow-2xl dark:shadow-black/20',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-14 items-center justify-between border-b border-emerald-950/10 px-4 dark:border-white/10">
        {!collapsed ? (
          <>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src="/analytics.svg"
                alt="InsightForge Logo"
                className="h-8 w-8 flex-shrink-0 rounded-lg shadow-md shadow-emerald-500/20"
              />
              <div className="min-w-0">
                <span className="block truncate text-sm font-bold text-zinc-900 dark:text-white">InsightForge</span>
                <span className="block truncate text-[11px] font-medium text-emerald-700 dark:text-zinc-400">Analytics cockpit</span>
              </div>
            </div>
            <button
              onClick={() => onCollapsedChange(true)}
              className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-emerald-50 hover:text-emerald-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button
            onClick={() => onCollapsedChange(false)}
            className="mx-auto flex items-center justify-center rounded-lg p-1 transition-transform hover:scale-105"
            aria-label="Expand sidebar"
            title="Expand sidebar"
          >
            <img
              src="/analytics.svg"
              alt="InsightForge Logo"
              className="h-8 w-8 rounded-lg shadow-md shadow-emerald-500/20"
            />
          </button>
        )}
      </div>

      <nav className="flex flex-col gap-1 p-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              clsx(
                'group relative flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 dark:bg-white dark:text-zinc-950 dark:shadow-white/10'
                  : 'text-zinc-600 hover:bg-emerald-50/80 hover:text-emerald-950 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white'
              )
            }
          >
            <item.icon className="h-4 w-4 flex-shrink-0" />
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 border-t border-emerald-950/10 px-3 py-3 dark:border-white/10">
          <div className="rounded-lg bg-emerald-50/60 border border-emerald-900/10 px-3 py-2 text-xs text-zinc-600 dark:bg-white/[0.04] dark:border-white/5 dark:text-zinc-400">
            <p className="font-semibold text-emerald-900 dark:font-medium dark:text-zinc-200">FastAPI intelligence layer</p>
            {/*
              The demo's data is frozen at the date it was generated, and its
              date presets resolve against that date. Saying so is the honest
              thing: without it the dashboard silently claims to be current.
            */}
            {IS_STATIC && getManifest() && (
              <p className="mt-1 text-emerald-700/80 dark:text-zinc-500">
                Static demo &middot; data as of {getManifest()!.snapshotDate}
              </p>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
