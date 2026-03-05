export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 mx-auto w-full max-w-6xl px-4 py-20 md:px-6 ${className}`}>
      {children}
    </section>
  )
}