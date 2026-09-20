import { useState } from 'react'

const navigation = ['Home', 'Certificates', 'Education', 'Projects', 'Contact']

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const goTo = (label) => {
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between bg-black/45 px-4 backdrop-blur-md sm:px-6 lg:h-20 lg:px-10">
      <h2 className="text-lg font-bold sm:text-2xl lg:text-3xl">Tausif's Portfolio</h2>
      <div className="flex items-center gap-2"><button onClick={toggleTheme} className="rounded p-2 text-lg transition hover:bg-white/10" aria-label="Toggle dark mode">{darkMode ? '☀️' : '🌙'}</button><button onClick={() => setMenuOpen(!menuOpen)} className="rounded p-2 text-2xl md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button></div>
      <ul className={`${menuOpen ? 'absolute left-0 top-16 flex w-full flex-col gap-1 border-t border-white/15 bg-black/90 p-4 shadow-lg' : 'hidden'} md:static md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 lg:gap-7`}>
        {navigation.map((item) => <li key={item}><button onClick={() => goTo(item)} className="w-full rounded px-3 py-2 text-left text-sm transition hover:bg-white/10 hover:text-cyan-300 md:w-auto md:p-0 md:text-base md:hover:bg-transparent">{item}</button></li>)}
      </ul>
    </nav>
  )
}

export default Navbar
