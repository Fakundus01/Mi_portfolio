export default function Chip({ children, className = '' }) {
  return <span className={`rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-200 ${className}`}>{children}</span>
}