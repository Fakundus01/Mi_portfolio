import { useTranslation } from 'react-i18next'

export default function ProjectsFilter({ categories, activeCategory, onChange }) {
  const { t } = useTranslation()
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <button
        onClick={() => onChange('all')}
        className={`rounded-full px-4 py-2 text-sm ${activeCategory === 'all' ? 'bg-indigo-500' : 'bg-slate-800'}`}
      >
        {t('projects.filterAll')}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm capitalize ${activeCategory === category ? 'bg-indigo-500' : 'bg-slate-800'}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}