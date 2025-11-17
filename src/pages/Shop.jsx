import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const catalog = [
  { id: 'serenity-blue', name: 'Serenity Blue — Heartline Tee', price: 129, color: 'from-sky-50 to-slate-50', img: '/tshirts/serenity-blue.svg', story: 'A calm heartbeat line for those who keep us steady.' },
  { id: 'healing-green', name: 'Healing Green — Scrub Spirit Tee', price: 129, color: 'from-emerald-50 to-slate-50', img: '/tshirts/healing-green.svg', story: 'For the nurses whose kindness heals before medicine.' },
  { id: 'compassion-rose', name: 'Compassion Rose — Gentle Care Tee', price: 129, color: 'from-pink-50 to-slate-50', img: '/tshirts/compassion-rose.svg', story: 'A tribute to soft strength in pediatric care.' },
]

export default function Shop() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_60%)]" />
        <Navbar />
        <div className="pt-32 pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-slate-900">Shop</h1>
            <p className="text-slate-600 mt-2">Minimal designs, premium cotton, and stories that resonate with your daily courage.</p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalog.map((p, i) => (
                <motion.div key={p.id} id={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br">
                  <div className={`p-6 ${p.color}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-white/60 flex items-center justify-center">
                      <img src={p.img} alt={p.name} className="h-44 object-contain" />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-900">{p.name}</h3>
                      <p className="text-sm text-slate-600">AED {p.price}</p>
                      <p className="text-sm text-slate-700 mt-2">{p.story}</p>
                      <button className="mt-4 w-full rounded-full bg-slate-900 text-white py-2 hover:bg-slate-800 transition-colors">Add to Cart</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
