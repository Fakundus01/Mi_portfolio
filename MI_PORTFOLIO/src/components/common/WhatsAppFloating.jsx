import { useTranslation } from 'react-i18next'
import { CONTACT } from '../../config/contact'
import { buildWhatsAppLink } from '../../utils/whatsapp'

export default function WhatsAppFloating() {
  const { t, i18n } = useTranslation()
  const href = buildWhatsAppLink(CONTACT.whatsappNumber, i18n.language)

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t('floating.aria')}
      title={t('floating.tooltip')}
      className="fixed bottom-4 right-4 z-40 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-900/50 transition hover:bg-emerald-400"
    >
      {t('common.whatsapp')}
    </a>
  )
}