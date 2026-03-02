import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button'
import { CONTACT } from '../config/contact'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Hero() {
  const { t } = useTranslation()
  const whatsAppHref = buildWhatsAppLink(CONTACT.whatsappNumber, t('hero.whatsAppMessage'))

  return (
    <section id="top" className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24">
      <h1 className="text-4xl font-bold md:text-6xl">{t('hero.title')}</h1>
      <p className="max-w-3xl text-lg text-slate-300">{t('hero.subtitle')}</p>
      <div className="flex gap-3">
        <a href="#projects"><Button>{t('hero.ctaProjects')}</Button></a>
        <a href={whatsAppHref} target="_blank" rel="noreferrer"><Button className="bg-emerald-600 hover:bg-emerald-500">{t('hero.ctaWhatsApp')}</Button></a>
      </div>
    </section>
  )
}