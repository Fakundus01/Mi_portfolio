import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const changeLanguage = () => {
    const nextLng = i18n.language.startsWith('es') ? 'en' : 'es'
    i18n.changeLanguage(nextLng)
  }
  
  return (
    <Button variant="ghost" size="sm" onClick={changeLanguage} aria-label="Change language">
      {i18n.language.startsWith('es') ? 'ES' : 'EN'}
    </Button>
  )
}