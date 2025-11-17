import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import Products from '../components/Products'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.15),transparent_60%)]" />
        <Navbar />
        <Hero />
      </div>
      <TrustBadges />
      <Products />
      <Footer />
    </div>
  )
}
