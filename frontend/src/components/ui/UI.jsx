import { Check, Inbox, Loader2, X } from 'lucide-react'

export function Toast({ message, onClose }) {
  if (!message) return null
  return <div role="status" className="fixed bottom-5 right-5 z-50 flex max-w-sm items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-xl"><span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-600"><Check size={16} /></span>{message}<button onClick={onClose} className="ml-2 text-slate-400 hover:text-slate-600"><X size={16} /></button></div>
}

export function EmptyState({ title, description, action }) { return <div className="panel grid min-h-[280px] place-items-center px-6 text-center"><div><span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600"><Inbox size={23} /></span><h3 className="mt-4 font-semibold text-slate-800">{title}</h3><p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-slate-500">{description}</p>{action && <div className="mt-5">{action}</div>}</div></div> }

export function LoadingSkeleton() { return <div className="animate-pulse space-y-3"><div className="h-4 w-20 rounded bg-slate-100" /><div className="h-6 w-4/5 rounded bg-slate-100" /><div className="h-4 w-full rounded bg-slate-100" /><div className="h-4 w-3/4 rounded bg-slate-100" /></div> }

export function RefreshIcon({ loading }) { return loading && <Loader2 size={17} className="animate-spin" /> }
