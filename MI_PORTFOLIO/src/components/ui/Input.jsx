export default function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-indigo-400 ${className}`}
      {...props}
    />
  )
}