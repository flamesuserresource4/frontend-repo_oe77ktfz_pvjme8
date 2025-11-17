import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HeartPulse, Stethoscope, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate">
            <h1 className="">Our Story</h1>
            <p>
              Afiya Wear was born in the corridors of Gulf hospitals—where compassion meets precision, and where every shift tells a story of courage. We design premium T‑shirts that resonate with the emotional rhythm of healthcare life, using soft pink, medical green, and calm blue to reflect care, healing, and clarity.
            </p>
            <h3>What guides us</h3>
            <ul>
              <li className="flex items-start gap-2"><HeartPulse className="h-5 w-5 text-pink-500" /> Human first: designs that honor your empathy.</li>
              <li className="flex items-start gap-2"><Stethoscope className="h-5 w-5 text-emerald-600" /> Clinically mindful: clean, minimal, medically inspired lines.</li>
              <li className="flex items-start gap-2"><Sparkles className="h-5 w-5 text-sky-500" /> Premium standards: meticulous fabrics and finishes.</li>
            </ul>
            <p>
              Every piece is a reminder: your work matters—deeply. High Quality Guaranteed.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
