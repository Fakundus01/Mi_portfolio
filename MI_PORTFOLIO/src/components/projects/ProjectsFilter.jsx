import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'

export default function ProjectsFilter({ categories, activeCategory, onChange }) {
  const { t } = useTranslation()

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <Button variant={activeCategory === 'all' ? 'primary' : 'ghost'} size="sm" onClick={() => onChange('all')}>
        {t('projects.filterAll')}
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onChange(category)}
        >
        {t(`projects.categories.${category}`)}
        </Button>
      ))}
    </div>
  )
}