import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { config, whatsappLink } from '../data/content'
import { asset } from '../lib/base'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Milter Run', to: '/milter-run' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (to: string) => {
    setOpen(false)
    navigate(to)
  }

  const isActive = (l: (typeof links)[number]): string => {
    if (l.to === '/') return pathname === '/' ? ' active' : ''
    return pathname === l.to || pathname.startsWith(l.to + '/') ? ' active' : ''
  }

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <a className="topbar-item" href={`tel:+${config.whatsapp}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            {config.telefono_display}
          </a>
          <a className="topbar-item topbar-mail" href={`mailto:${config.email}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
            {config.email}
          </a>
          <div className="topbar-social">
            <a href={config.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg></a>
            <a href={config.tienda} target="_blank" rel="noopener noreferrer" aria-label="Tienda online"><svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></a>
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="container nav-inner">
          <Link to="/" className="brand" onClick={() => go('/')}>
            <img
              src={asset('/img/logo.png')}
              alt="Milter — Servicios Integrales"
              className="brand-logo"
              width="178"
              height="27"
            />
          </Link>

          <nav className={`nav-links${open ? ' open' : ''}`}>
            {links.map((l) => (
              <button key={l.label} className={`nav-link${isActive(l)}`} onClick={() => go(l.to)}>
                {l.label}
              </button>
            ))}
            <a
              className="nav-cta"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar
            </a>
          </nav>

          <button
            className={`hamburger${open ? ' active' : ''}`}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}