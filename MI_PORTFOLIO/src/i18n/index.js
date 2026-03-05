import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import en from './locales/en.json'

const STORAGE_KEY = 'portfolio-lng'
const safeLocalStorage = typeof window !== 'undefined' ? window.localStorage : null
const storedLng = safeLocalStorage?.getItem(STORAGE_KEY)
const defaultLng = storedLng === 'es' || storedLng === 'en' ? storedLng : 'en'

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: defaultLng,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  safeLocalStorage?.setItem(STORAGE_KEY, lng)
})

export { STORAGE_KEY }
export default i18n