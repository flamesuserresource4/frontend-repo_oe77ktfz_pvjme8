import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Emotionally-crafted tees for Gulf healthcare heroes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-lg leading-8 text-white/80"
            >
              Soft pink, medical green, and calm blue come together in a premium collection designed to honor your daily courage. Thoughtful details. Gentle touch. High Quality Guaranteed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="/shop" className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 via-sky-400 to-emerald-400 text-slate-900 font-semibold shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-shadow">Explore Shop</a>
              <a href="/about" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">Our Story</a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="text-sm">Trusted by doctors & nurses across UAE, KSA, and Qatar</div>
              <div className="text-sm">High Quality Guaranteed</div>
            </div>
          </div>
          <div className="h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60">
            <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/60" />
    </section>
  )
}
