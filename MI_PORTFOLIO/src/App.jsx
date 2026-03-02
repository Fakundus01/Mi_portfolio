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
    <>
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
    </>
  )
}

export default App
