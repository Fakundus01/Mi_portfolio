import { useTranslation } from 'react-i18next'
import Section from '../components/layout/Section'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { CONTACT } from '../config/contact'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Services() {
  const { t, i18n } = useTranslation()
  const items = ['web', 'ecommerce', 'systems', 'automation']
  const link = buildWhatsAppLink(CONTACT.whatsappNumber, i18n.language)

  return (
    <Section id="services">
      <SectionTitle title={t('services.title')} subtitle={t('services.subtitle')} />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
           <Card key={item}>
            <h3 className="text-lg font-semibold">{t(`services.items.${item}.title`)}</h3>
            <p className="mt-2 text-slate-300">{t(`services.items.${item}.description`)}</p>
          </Card>
        ))}
      </div>
      <a href={link} className="mt-8 inline-flex" target="_blank" rel="noreferrer">
        <Button variant="secondary">{t('services.cta')}</Button>
      </a>
    </Section>
  )
}