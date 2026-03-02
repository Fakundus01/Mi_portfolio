import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../components/layout/Section'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { CONTACT } from '../config/contact'
import { buildWhatsAppLink } from '../utils/whatsapp'

const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      setStatus('error')
      return
    }

    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('loading')
    const response = await fetch(FORM_ENDPOINT, { method: 'POST', body: formData, headers: { Accept: 'application/json' } })
    setStatus(response.ok ? 'success' : 'error')
    if (response.ok) form.reset()
  }

  return (
    <Section id="contact">
      <SectionTitle>{t('contact.title')}</SectionTitle>
      <form className="max-w-xl space-y-4" onSubmit={onSubmit}>
        <Input name="name" placeholder={t('contact.name')} required />
        <Input name="email" type="email" placeholder={t('contact.email')} required />
        <textarea name="message" placeholder={t('contact.message')} required className="h-36 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" />
        <Button type="submit" disabled={status === 'loading'}>{t('contact.send')}</Button>
      </form>
      {status === 'success' && <p className="mt-3 text-emerald-400">{t('contact.success')}</p>}
      {status === 'error' && <p className="mt-3 text-red-400">{t('contact.error')}</p>}
      <a href={buildWhatsAppLink(CONTACT.whatsappNumber, t('hero.whatsAppMessage'))} target="_blank" rel="noreferrer" className="mt-4 inline-block text-indigo-300">
        {t('contact.altWhatsApp')}
      </a>
    </Section>
  )
}