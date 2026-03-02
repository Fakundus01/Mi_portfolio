import { useTranslation } from 'react-i18next'
import LanguageToggle from '../common/LanguageToggle'

export default function Navbar() {
  const { t } = useTranslation()
  const links = [
    { href: '#projects', label: t('nav.projects') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#top" className="font-bold">Facundo Moreno</a>
        <div className="flex items-center gap-4 text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-indigo-300">
              {link.label}
            </a>
          ))}
          <LanguageToggle />
        </div>
      </nav>
    </header>
  )
}