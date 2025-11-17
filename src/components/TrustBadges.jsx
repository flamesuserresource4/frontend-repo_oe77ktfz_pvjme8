import { ShieldCheck, BadgeCheck, Truck, Recycle } from 'lucide-react'

export default function TrustBadges() {
  const items = [
    { icon: ShieldCheck, title: 'High Quality Guaranteed', desc: 'Premium cotton, fade-resistant prints.' },
    { icon: BadgeCheck, title: 'Ethically Made', desc: 'Responsibly sourced & crafted.' },
    { icon: Truck, title: 'Fast GCC Shipping', desc: 'UAE, KSA, Qatar, Bahrain, Kuwait, Oman.' },
    { icon: Recycle, title: 'Easy Returns', desc: '14-day hassle-free returns.' },
  ]

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-100 via-sky-100 to-emerald-100 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-slate-700" />
              </div>
              <h4 className="mt-3 font-semibold text-slate-900">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
