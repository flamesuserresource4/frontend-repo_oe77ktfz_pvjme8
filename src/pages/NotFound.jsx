export default function NotFound(){
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-pink-50 via-sky-50 to-emerald-50">
      <div className="text-center p-10">
        <h1 className="text-5xl font-semibold text-slate-900">404</h1>
        <p className="text-slate-600 mt-2">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="inline-block mt-6 px-5 py-2 rounded-full bg-slate-900 text-white">Back Home</a>
      </div>
    </div>
  )
}
