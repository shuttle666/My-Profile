import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PortfolioBackdrop from '../components/PortfolioBackdrop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="relative isolate overflow-hidden">
        <PortfolioBackdrop />

        <div className="relative z-10">
          <Header />
          <About />
          <Services />
          <Work />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
