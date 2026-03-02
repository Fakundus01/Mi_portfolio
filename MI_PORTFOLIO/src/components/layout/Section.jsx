export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-20 ${className}`}>
      {children}
    </section>
  )
}