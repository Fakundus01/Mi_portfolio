export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 space-y-3">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-slate-300">{subtitle}</p> : null}
    </div>
  )
}