export default function Card({ children, className = '' }) {
  return <article className={`rounded-xl border border-slate-800 bg-slate-900 p-5 ${className}`}>{children}</article>
}