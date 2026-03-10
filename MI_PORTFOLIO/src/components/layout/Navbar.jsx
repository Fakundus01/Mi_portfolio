import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CONTACT } from '../../config/contact'
import { buildWhatsAppLink } from '../../utils/whatsapp'
import Button from '../ui/Button'

const SECTION_IDS = ['projects', 'services', 'about', 'contact']

export default function Navbar() {
 const { t, i18n } = useTranslation()
  const [active, setActive] = useState('projects')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 },
    )

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const links = SECTION_IDS.map((id) => ({ href: `#${id}`, label: t(`nav.${id}`), id }))
  const whatsappHref = buildWhatsAppLink(CONTACT.whatsappNumber, i18n.language)

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-6">
        <a href="#top" className="font-semibold tracking-wide">{t('common.brand')}</a>
        <div className="flex items-center gap-2 md:gap-3">
          {links.map((link) => (
             <a
              key={link.href}
              href={link.href}
              className={`hidden text-sm transition md:inline ${active === link.id ? 'text-indigo-300' : 'text-slate-300 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
           <a href={whatsappHref} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button variant="secondary" size="sm">{t('common.whatsapp')}</Button>
          </a>
        </div>
      </nav>
    </header>
  )
}
