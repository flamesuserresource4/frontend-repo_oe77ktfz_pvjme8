import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingBag, HeartPulse, ShieldCheck } from 'lucide-react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
    isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-300 via-sky-400 to-emerald-400 shadow-inner flex items-center justify-center">
                <HeartPulse className="h-5 w-5 text-slate-900" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-wide">Afiya Wear</p>
                <p className="text-[11px] text-white/70">Premium Medical Tees</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-white/80">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm">High Quality Guaranteed</span>
              </div>
              <button className="hidden md:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
                <ShoppingBag className="h-5 w-5" />
                <span className="text-sm">Cart</span>
              </button>
              <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
                <NavLink to="/shop" onClick={() => setOpen(false)} className={navLinkClass}>Shop</NavLink>
                <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About</NavLink>
                <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
