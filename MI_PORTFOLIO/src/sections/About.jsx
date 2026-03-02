import { useTranslation } from 'react-i18next'
import Section from '../components/layout/Section'
import SectionTitle from '../components/common/SectionTitle'

export default function About() {
  const { t } = useTranslation()
  const points = t('about.points', { returnObjects: true })

  return (
    <Section id="about">
      <SectionTitle>{t('about.title')}</SectionTitle>
      <ul className="list-inside list-disc space-y-2 text-slate-300">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Section>
  )
}