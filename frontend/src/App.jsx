import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Sidebar, TopNavbar } from './components/layout/Sidebar'
import { Toast } from './components/ui/UI'
import { initialNews } from './data/mockNews'
import ArticleDetail from './pages/ArticleDetail'
import Digest from './pages/Digest'
import Interests from './pages/Interests'
import News from './pages/News'
import Overview from './pages/Overview'
import Saved from './pages/Saved'
import Settings from './pages/Settings'

const pageNames = { overview: 'Overview', news: 'News Feed', saved: 'Saved Articles', interests: 'My Interests', digest: 'Email Digest', settings: 'Settings' }
export default function App() { const location = useLocation(); const [articles, setArticles] = useState(initialNews); const [mobileOpen, setMobileOpen] = useState(false); const [toast, setToast] = useState(''); const page = location.pathname.split('/')[1] || 'overview'; useEffect(() => { setMobileOpen(false) }, [location.pathname]); useEffect(() => { if (!toast) return; const timeout = setTimeout(() => setToast(''), 3500); return () => clearTimeout(timeout) }, [toast]); const toggleSave = id => { const wasSaved = articles.find(article => article.id === id)?.saved; setArticles(current => current.map(article => article.id === id ? { ...article, saved: !article.saved } : article)); setToast(wasSaved ? 'Article removed from your reading list.' : 'Article saved to your reading list.') }; const props = { articles, onToggleSave: toggleSave, showToast: setToast }; return <div className="min-h-screen"><Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} /><div className="lg:pl-[272px]"><TopNavbar title={pageNames[page] || 'Overview'} onMenu={() => setMobileOpen(true)} /><main><Routes><Route path="/" element={<Navigate to="/overview" replace />} /><Route path="/overview" element={<Overview {...props} />} /><Route path="/news" element={<News {...props} />} /><Route path="/news/:id" element={<ArticleDetail {...props} />} /><Route path="/saved" element={<Saved {...props} />} /><Route path="/interests" element={<Interests {...props} />} /><Route path="/digest" element={<Digest {...props} />} /><Route path="/settings" element={<Settings {...props} />} /><Route path="*" element={<Navigate to="/overview" replace />} /></Routes></main></div><Toast message={toast} onClose={() => setToast('')} /></div> }
