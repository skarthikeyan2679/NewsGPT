import { ArrowUpRight, Bookmark, Clock3, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const categoryColors = { AI: 'bg-violet-50 text-violet-700', Technology: 'bg-blue-50 text-blue-700', Cybersecurity: 'bg-rose-50 text-rose-700', Cloud: 'bg-sky-50 text-sky-700', DevOps: 'bg-amber-50 text-amber-700', Startups: 'bg-emerald-50 text-emerald-700', Programming: 'bg-orange-50 text-orange-700', 'Data Science': 'bg-cyan-50 text-cyan-700' }

export function CategoryPill({ category }) { return <span className={`rounded-md px-2 py-1 text-[11px] font-bold ${categoryColors[category] || 'bg-slate-100 text-slate-600'}`}>{category}</span> }

export default function NewsCard({ article, onToggleSave, compact = false }) {
  return <article className={`group panel flex flex-col p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md ${compact ? '' : 'min-h-[280px]'}`}>
    <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><CategoryPill category={article.category} /><span className="text-xs font-medium text-slate-400">{article.source}</span></div><button aria-label={article.saved ? 'Remove saved article' : 'Save article'} onClick={() => onToggleSave(article.id)} className={`rounded-lg p-2 ${article.saved ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}><Bookmark size={17} fill={article.saved ? 'currentColor' : 'none'} /></button></div>
    <Link to={`/news/${article.id}`} className="mt-4"><h3 className="text-[17px] font-semibold leading-6 tracking-[-0.02em] text-slate-800 group-hover:text-blue-700">{article.title}</h3></Link>
    <p className="mt-2 text-sm leading-6 text-slate-500">{article.summary}</p>
    {!compact && <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50/70 px-3 py-2.5 text-xs leading-5 text-slate-600"><Sparkles size={14} className="mt-0.5 shrink-0 text-blue-600" /><span><strong className="font-semibold text-slate-700">AI take:</strong> {article.whyItMatters}</span></div>}
    <div className="mt-auto flex items-center justify-between pt-5 text-xs text-slate-400"><span className="flex items-center gap-1.5"><Clock3 size={13} />{article.publishedAt} · {article.readingTime}</span><Link to={`/news/${article.id}`} className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700">Read <ArrowUpRight size={14} /></Link></div>
  </article>
}

export function NewsGrid({ articles, onToggleSave, compact = false }) { return <div className={`grid gap-4 ${compact ? 'xl:grid-cols-3' : 'md:grid-cols-2 xl:grid-cols-3'}`}>{articles.map(article => <NewsCard key={article.id} article={article} onToggleSave={onToggleSave} compact={compact} />)}</div> }

export function CategoryFilter({ value, onChange, categories }) { return <div className="flex gap-2 overflow-x-auto pb-1 thin-scrollbar">{categories.map(category => <button key={category} onClick={() => onChange(category)} className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium ${value === category ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}>{category}</button>)}</div> }
