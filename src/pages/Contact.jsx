import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thank you. We will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.12),transparent_60%)]" />
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
            <p className="text-slate-600 mt-2">We’d love to hear your story.</p>

            <form onSubmit={submit} className="mt-8 grid gap-4">
              <input name="name" required placeholder="Full name" className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300" />
              <input name="email" type="email" required placeholder="Email" className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300" />
              <input name="subject" required placeholder="Subject" className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300" />
              <textarea name="message" required placeholder="Your message" rows="5" className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300" />
              <button className="rounded-full bg-slate-900 text-white py-3 hover:bg-slate-800 transition-colors">Send</button>
              <p className="text-sm text-slate-600">{status}</p>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
