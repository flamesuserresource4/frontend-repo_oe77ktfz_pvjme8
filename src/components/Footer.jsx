export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-slate-900">Afiya Wear</h4>
          <p className="text-sm text-slate-600 mt-2">Premium, emotionally resonant tees for healthcare professionals across the Gulf.</p>
        </div>
        <div className="text-sm text-slate-600 grid gap-1">
          <a href="/shop" className="hover:text-slate-900">Shop</a>
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
          <a href="/test" className="hover:text-slate-900">System Test</a>
        </div>
        <div className="text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Afiya Wear. All rights reserved.</p>
          <p className="mt-2">GCC shipping. High Quality Guaranteed.</p>
        </div>
      </div>
    </footer>
  )
}
