import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const changeLanguage = () => {
    const nextLng = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(nextLng)
    localStorage.setItem('portfolio-lng', nextLng)
  }

  return (
    <button onClick={changeLanguage} className="rounded-md border border-slate-700 px-3 py-1 text-sm">
      {i18n.language.toUpperCase()}
    </button>
  )
}