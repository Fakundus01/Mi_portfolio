import { useTranslation } from 'react-i18next'
import { CONTACT } from '../../config/contact'
import { buildWhatsAppLink } from '../../utils/whatsapp'

export default function WhatsAppFloating() {
  const { t } = useTranslation()
  const href = buildWhatsAppLink(CONTACT.whatsappNumber, t('hero.whatsAppMessage'))

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 rounded-full bg-emerald-500 px-4 py-3 font-semibold text-slate-950 shadow-lg"
    >
      WhatsApp
    </a>
  )
}