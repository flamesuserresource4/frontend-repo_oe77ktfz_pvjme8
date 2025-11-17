import { motion } from 'framer-motion'

const products = [
  {
    id: 'serenity-blue',
    name: 'Serenity Blue — Heartline Tee',
    price: 129,
    currency: 'AED',
    color: 'from-sky-50 to-slate-50',
    images: ['/tshirts/serenity-blue.svg'],
    tags: ['blue', 'cardiology']
  },
  {
    id: 'healing-green',
    name: 'Healing Green — Scrub Spirit Tee',
    price: 129,
    currency: 'AED',
    color: 'from-emerald-50 to-slate-50',
    images: ['/tshirts/healing-green.svg'],
    tags: ['green', 'nursing']
  },
  {
    id: 'compassion-rose',
    name: 'Compassion Rose — Gentle Care Tee',
    price: 129,
    currency: 'AED',
    color: 'from-pink-50 to-slate-50',
    images: ['/tshirts/compassion-rose.svg'],
    tags: ['pink', 'pediatrics']
  },
]

export default function Products({ title = 'Featured Collection' }) {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h2>
          <a href="/shop" className="text-sky-700 hover:text-sky-900 transition-colors">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.a
              key={p.id}
              href={`/shop#${p.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br shadow-sm hover:shadow-md transition-all"
            >
              <div className={`p-6 ${p.color}`}>
                <div className="aspect-[4/3] rounded-2xl bg-white/60 flex items-center justify-center">
                  <img src={p.images[0]} alt={p.name} className="h-40 object-contain" />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-600">{p.currency} {p.price}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
