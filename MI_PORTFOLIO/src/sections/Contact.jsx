import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../components/layout/Section'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import { CONTACT } from '../config/contact'
import { buildWhatsAppLink } from '../utils/whatsapp'

const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

export default function Contact() {
  const { t, i18n } = useTranslation()
  const [status, setStatus] = useState('idle')

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('form submit failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
     <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <form className="space-y-4" onSubmit={onSubmit}>
            <Input name="name" label={t('contact.name')} required />
            <Input name="email" type="email" label={t('contact.email')} required />
            <label className="block space-y-2">
              <span className="text-sm text-slate-300">{t('contact.message')}</span>
              <textarea
                name="message"
                required
                className="h-36 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
              />
            </label>
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? t('contact.loading') : t('contact.send')}
            </Button>
          </form>
          {status === 'success' && <p className="mt-3 text-emerald-400">{t('contact.success')}</p>}
          {status === 'error' && (
            <p className="mt-3 text-amber-400">
              {FORM_ENDPOINT ? t('contact.error') : t('contact.missingEndpoint')}
            </p>
          )}
        </Card>

        <Card className="flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{t('contact.whatsappTitle')}</h3>
            <p className="mt-2 text-slate-300">{t('contact.whatsappDescription')}</p>
          </div>
          <a href={buildWhatsAppLink(CONTACT.whatsappNumber, i18n.language)} target="_blank" rel="noreferrer" className="inline-flex">
            <Button variant="secondary">{t('contact.altWhatsApp')}</Button>
          </a>
          {!FORM_ENDPOINT && (
            <a className="text-sm text-slate-400 underline" href={`mailto:${CONTACT.email}`}>
              {t('contact.mailFallback')}
            </a>
          )}
        </Card>
      </div>
    </Section>
  )
}