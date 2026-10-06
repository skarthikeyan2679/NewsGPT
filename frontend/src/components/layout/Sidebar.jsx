import { Bell, BookMarked, CircleHelp, Clock3, LayoutDashboard, Mail, Menu, Newspaper, Settings, Sparkles, Tags, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const nav = [
  { to: '/overview', label: 'Overview', icon: LayoutDashboard },
  { to: '/news', label: 'News Feed', icon: Newspaper },
  { to: '/saved', label: 'Saved Articles', icon: BookMarked },
  { to: '/interests', label: 'My Interests', icon: Tags },
  { to: '/digest', label: 'Email Digest', icon: Mail },
]

export function Sidebar({ open, onClose }) {
  return <>
    {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-slate-200 bg-white px-4 py-5 transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between px-2">
        <NavLink to="/overview" className="flex items-center gap-2.5" onClick={onClose}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200"><Sparkles size={18} fill="currentColor" /></span>
          <span className="text-lg font-bold tracking-[-0.04em] text-slate-900">NewsGPT</span>
        </NavLink>
        <button onClick={onClose} className="rounded-md p-2 text-slate-500 hover:bg-slate-100 lg:hidden"><X size={19} /></button>
      </div>
      <p className="px-2 pt-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Workspace</p>
      <nav className="mt-3 space-y-1">
        {nav.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} onClick={onClose} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
          <Icon size={18} strokeWidth={1.9} />{label}
        </NavLink>)}
      </nav>
      <div className="mt-auto space-y-3">
        <div className="rounded-xl bg-slate-900 p-4 text-white">
          <div className="flex items-center gap-2 text-sm font-semibold"><Sparkles size={15} className="text-blue-300" />NewsGPT Pro</div>
          <p className="mt-1 text-xs leading-5 text-slate-300">Your focused daily briefing, curated by AI.</p>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-300"><Clock3 size={13} />Next briefing in 16h</div>
        </div>
        <div className="space-y-1 border-t border-slate-100 pt-3">
          <NavLink to="/settings" onClick={onClose} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"><Settings size={18} />Settings</NavLink>
          <button onClick={onClose} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"><CircleHelp size={18} />Help &amp; support</button>
        </div>
      </div>
    </aside>
  </>
}

export function TopNavbar({ title, onMenu }) {
  return <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-slate-200 bg-slate-50/90 px-5 backdrop-blur lg:px-9">
    <div className="flex items-center gap-3">
      <button onClick={onMenu} className="rounded-lg p-2 text-slate-600 hover:bg-white lg:hidden" aria-label="Open navigation"><Menu size={21} /></button>
      <div><p className="hidden text-xs text-slate-400 sm:block">Workspace / <span className="text-slate-500">{title}</span></p><h1 className="text-base font-semibold text-slate-800 sm:hidden">{title}</h1></div>
    </div>
    <div className="flex items-center gap-3">
      <span className="hidden items-center gap-2 text-xs font-medium text-slate-500 sm:flex"><span className="h-2 w-2 rounded-full bg-emerald-500" />All systems operational</span>
      <button className="relative rounded-lg p-2 text-slate-500 hover:bg-white" aria-label="Notifications"><Bell size={19} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 ring-2 ring-slate-50" /></button>
      <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-xs font-bold text-white">KM</div>
    </div>
  </header>
}
