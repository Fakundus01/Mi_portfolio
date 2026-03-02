export default function Card({ children, className = '' }) {
  return (
    <article className={`rounded-2xl border border-slate-800/90 bg-slate-900/60 p-5 shadow-lg shadow-black/20 backdrop-blur ${className}`}>
      {children}
    </article>
  )
}