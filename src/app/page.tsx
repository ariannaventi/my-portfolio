import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <hr className="rule" />
        <Projects />
        <hr className="rule" />
        <About />
        <hr className="rule" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
