import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
