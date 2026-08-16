import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return <main className="min-h-screen animate-bg-shift bg-[linear-gradient(135deg,#f597b2,#a633aa,#00eaff)] bg-[length:300%_300%]"><Navbar /><Profile /><Certificates /><Education /><Projects /><Contact /><Footer /></main>
}

export default App
