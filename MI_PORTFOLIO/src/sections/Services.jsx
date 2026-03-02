import { useTranslation } from 'react-i18next'
import Section from '../components/layout/Section'
import SectionTitle from '../components/common/SectionTitle'
import Card from '../components/ui/Card'
import { CONTACT } from '../config/contact'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Services() {
  const { t } = useTranslation()
  const items = ['web', 'ecommerce', 'systems', 'automation']
  const link = buildWhatsAppLink(CONTACT.whatsappNumber, t('hero.whatsAppMessage'))

  return (
    <Section id="services">
      <SectionTitle>{t('services.title')}</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item}>{t(`services.items.${item}`)}</Card>
        ))}
      </div>
      <a href={link} className="mt-6 inline-block text-indigo-300" target="_blank" rel="noreferrer">
        {t('services.cta')}
      </a>
    </Section>
  )
}