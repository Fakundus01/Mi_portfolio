import { useTranslation } from 'react-i18next'
import Card from '../ui/Card'
import Chip from '../ui/Chip'
import Button from '../ui/Button'

export default function ProjectCard({ project }) {
  const { i18n } = useTranslation()
  const locale = i18n.language === 'en' ? 'en' : 'es'

  return (
    <Card>
      <div className="mb-3 h-40 rounded-lg bg-slate-800 p-3 text-xs text-slate-400">{project.image}</div>
      <h3 className="text-xl font-semibold">{project.title[locale]}</h3>
      <p className="mt-2 text-slate-300">{project.summary[locale]}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <Button disabled={!project.demoUrl} onClick={() => window.open(project.demoUrl, '_blank')}>Demo</Button>
        <Button disabled={!project.repoUrl} className="bg-slate-700 hover:bg-slate-600" onClick={() => window.open(project.repoUrl, '_blank')}>
          Code
        </Button>
      </div>
    </Card>
  )
}