const variants = {
  primary: 'bg-indigo-500 text-white hover:bg-indigo-400',
  secondary: 'bg-emerald-500 text-slate-950 hover:bg-emerald-400',
  ghost: 'bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-700',
}

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-3 text-sm md:text-base',
}

export default function Button({
  children,
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  return (
     <Component
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-45 ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  )
}