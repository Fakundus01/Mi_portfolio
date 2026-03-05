import { useTranslation } from 'react-i18next'
import Section from '../components/layout/Section'
import SectionTitle from '../components/common/SectionTitle'
import Card from '../components/ui/Card'

export default function About() {
  const { t } = useTranslation()
  const points = t('about.points', { returnObjects: true })

  return (
    <Section id="about">
      <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />
      <Card>
        <ul className="list-inside list-disc space-y-3 text-slate-300">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Card>
    </Section>
  )
}