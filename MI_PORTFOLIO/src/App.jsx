import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloating from './components/common/WhatsAppFloating'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_35%)]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}

export default App
