import { Link } from 'react-router-dom'
import { config, servicios, whatsappLink } from '../data/content'
import { asset } from '../lib/base'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <img
            src={asset('/img/logo.png')}
            alt="Milter — Servicios Integrales"
            className="footer-logo"
            width="178"
            height="27"
          />
          <p>{config.tagline}</p>
          <div className="footer-social">
            <a href={config.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
            </a>
            <a href={config.maps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </a>
            <a href={config.tienda} target="_blank" rel="noopener noreferrer" aria-label="Tienda online">
              <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li>
              <Link to="/servicios">Todos los servicios</Link>
            </li>
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link to={`/servicios/${s.slug}`}>{s.nombre}</Link>
              </li>
            ))}
            <li>
              <Link to="/milter-run">Milter Run</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <address>
            <p>{config.direccion}</p>
            <p>{config.zona}</p>
            <p>{config.ciudad}</p>
            <p>
              <a className="footer-link" href={`tel:+${config.whatsapp}`}>{config.telefono_display}</a>
            </p>
            <p>
              <a className="footer-link" href={`mailto:${config.email}`}>{config.email}</a>
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Milter Corp. — Santa Cruz de la Sierra, Bolivia</p>
          <p className="footer-iso">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">ISO 9001</a>
          </p>
        </div>
      </div>
    </footer>
  )
}