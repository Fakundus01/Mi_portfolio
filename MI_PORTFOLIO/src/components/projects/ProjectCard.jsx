import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Chip from '../ui/Chip'

function getDomain(url) {
  if (!url) return ''

  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation()
  const locale = i18n.language.startsWith('es') ? 'es' : 'en'
  const [imageSrc, setImageSrc] = useState(project.image || '/projects/placeholder.svg')
  const domain = getDomain(project.demoUrl)
  const categoryLabel = t(`projects.categories.${project.category}`, { defaultValue: project.category })
  const screenshots = Array.isArray(project.screenshots) ? project.screenshots : []

  return (
    <Card className="flex h-full flex-col">
      <img
        src={imageSrc}
        alt={project.title[locale]}
        className="mb-4 h-44 w-full rounded-xl border border-slate-800 object-cover"
        loading="lazy"
        onError={() => setImageSrc('/projects/placeholder.svg')}
      />

      <div className="mb-3 flex items-center justify-between gap-2">
        <Chip>{categoryLabel}</Chip>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-cyan-300 underline decoration-cyan-500/70 underline-offset-2"
          >
            {t('projects.domain')}: {domain || t('projects.live')}
          </a>
        ) : (
          <span className="text-xs text-slate-400">{t('projects.noDomain')}</span>
        )}
      </div>

      <h3 className="text-xl font-semibold">{project.title[locale]}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-300">{project.summary[locale]}</p>

      {screenshots.length > 0 ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400">{locale === 'es' ? 'Capturas:' : 'Screenshots:'}</span>
          {screenshots.map((shot) => (
            <a
              key={`${project.id}-${shot.url}`}
              href={shot.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cyan-300 underline decoration-cyan-500/70 underline-offset-2"
            >
              {shot.label?.[locale] || (locale === 'es' ? 'Ver imagen' : 'View image')}
            </a>
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex-1">
            <Button className="w-full" size="sm">
              {t('projects.demo')}
            </Button>
          </a>
        ) : (
          <Button className="flex-1" size="sm" disabled>
            {t('projects.demo')}
          </Button>
        )}

        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex-1">
            <Button className="w-full" variant="ghost" size="sm">
              {t('projects.code')}
            </Button>
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