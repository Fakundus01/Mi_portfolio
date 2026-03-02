export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-lg bg-indigo-500 px-5 py-3 font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}