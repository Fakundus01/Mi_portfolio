import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Chip from '../ui/Chip'

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation()
  const locale = i18n.language.startsWith('es') ? 'es' : 'en'

  return (
    <Card className="flex h-full flex-col">
      <img
        src={project.image || '/projects/placeholder.svg'}
        alt={project.title[locale]}
        className="mb-4 h-44 w-full rounded-xl border border-slate-800 object-cover"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold">{project.title[locale]}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-300">{project.summary[locale]}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex-1">
            <Button className="w-full" size="sm">{t('projects.demo')}</Button>
          </a>
        ) : (
          <Button className="flex-1" size="sm" disabled>
            {t('projects.demo')}
          </Button>
        )}

        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex-1">
            <Button className="w-full" variant="ghost" size="sm">{t('projects.code')}</Button>
          </a>
        ) : (
          <Button className="flex-1" variant="ghost" size="sm" disabled>
            {t('projects.code')}
          </Button>
        )}
      </div>
    </Card>
  )
}