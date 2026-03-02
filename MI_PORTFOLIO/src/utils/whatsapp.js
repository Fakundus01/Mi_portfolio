export function buildWhatsAppLink(number, message) {
  const base = 'https://wa.me/'
  const text = encodeURIComponent(message || '')
  return `${base}${number}${message ? `?text=${text}` : ''}`
}