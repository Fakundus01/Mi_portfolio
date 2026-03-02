import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Facundo Moreno — {t('footer.rights')}
    </footer>
  )
}