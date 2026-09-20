import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 550)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <div className="grid min-h-screen place-items-center bg-slate-950 text-center text-white"><div><p className="text-3xl font-bold text-cyan-300">Tausif Portfolio</p><div className="mx-auto mt-5 h-1 w-48 overflow-hidden rounded bg-white/20"><div className="h-full w-1/2 animate-pulse rounded bg-cyan-300" /></div></div></div>

  return <main className={`min-h-screen bg-[length:300%_300%] ${darkMode ? 'animate-bg-shift bg-[linear-gradient(135deg,#111827,#312e81,#155e75)]' : 'animate-bg-shift bg-[linear-gradient(135deg,#f597b2,#a633aa,#00eaff)]'}`}><ScrollProgress /><Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} /><Profile /><Skills /><Certificates /><Education /><Projects /><Contact /><Footer /></main>
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])
  return <div className="fixed left-0 top-0 z-[60] h-1 bg-cyan-300 transition-[width]" style={{ width: `${progress}%` }} />
}

export default App
