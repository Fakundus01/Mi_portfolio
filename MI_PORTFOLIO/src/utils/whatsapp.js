const WHATSAPP_MESSAGES = {
  es: 'Hola Facundo, vi tu portfolio y quiero cotizar un proyecto…',
  en: "Hi Facundo, I saw your portfolio and I’d like a quote…",
}

export function getWhatsAppMessage(language = 'en') {
  return language.startsWith('es') ? WHATSAPP_MESSAGES.es : WHATSAPP_MESSAGES.en
}

export function buildWhatsAppLink(number, language = 'en') {
  const message = getWhatsAppMessage(language)
  const query = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${query}`
}