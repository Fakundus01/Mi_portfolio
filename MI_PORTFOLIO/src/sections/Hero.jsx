import { useTranslation } from 'react-i18next'
import { CONTACT } from '../config/contact'
import { buildWhatsAppLink } from '../utils/whatsapp'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'

const PROFILE_PHOTO_URL =
  'https://res.cloudinary.com/duarmaoyp/image/upload/v1773156649/WhatsApp_Image_2026-03-10_at_12.30.34_PM_ohvc5k.jpg'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const whatsAppHref = buildWhatsAppLink(CONTACT.whatsappNumber, i18n.language)
  const chips = t('hero.chips', { returnObjects: true })

  return (
    <section id="top" className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-20 md:grid-cols-2 md:px-6 md:pt-28">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">{t('hero.eyebrow')}</p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">{t('hero.title')}</h1>
        <p className="max-w-xl text-lg text-slate-300">{t('hero.subtitle')}</p>

        <div className="flex flex-wrap gap-3">
          <a href="#projects">
            <Button>{t('hero.ctaProjects')}</Button>
          </a>
          <a href={whatsAppHref} target="_blank" rel="noreferrer">
            <Button variant="secondary">{t('hero.ctaWhatsApp')}</Button>
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8">
        <div className="relative mx-auto flex h-full min-h-72 max-w-sm items-center justify-center overflow-hidden rounded-[28px] border border-slate-700 bg-slate-950/60 shadow-2xl shadow-cyan-950/30">
          <img
            src={PROFILE_PHOTO_URL}
            alt={t('common.brand')}
            className="h-full min-h-72 w-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
