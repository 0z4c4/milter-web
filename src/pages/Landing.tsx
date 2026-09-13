import { Link } from 'react-router-dom'
import { config, whatsappLink } from '../data/content'
import { asset } from '../lib/base'
import { useStore } from '../store/useStore'
import ServiceIcon from '../components/ServiceIcon'
import PortfolioGallery from '../components/PortfolioGallery'

export default function Landing() {
  const { servicios, portafolio, empresa } = useStore()
  const galeriaChica = portafolio.slice(0, 8)

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="badge">Servicios Industriales · Santa Cruz</span>
            <h1 className="visually-hidden">{config.nombre}</h1>
            <p className="hero-tag">{config.tagline}</p>
            <div className="hero-actions">
              <a className="btn btn-dark" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Cotizar por WhatsApp
              </a>
              <Link className="btn btn-outline" to="/servicios">
                Ver servicios
              </Link>
            </div>
          </div>
          <div className="hero-photo">
            <img src={asset('/img/hero.webp')} alt="Equipo Milter realizando trabajos" />
            <span className="hero-photo-tag">Higiene · Calidad · Seguridad</span>
          </div>
        </div>
        <span className="hazard hazard--full"></span>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          <div className="stat">
            <strong>ISO 9001</strong>
            <span>Sistema de gestión de calidad certificado</span>
          </div>
          <div className="stat">
            <strong>5</strong>
            <span>Áreas de servicio especializado</span>
          </div>
          <div className="stat">
            <strong>Santa Cruz</strong>
            <span>Servicios en la ciudad y sus provincias</span>
          </div>
          <div className="stat">
            <strong>100%</strong>
            <span>Personal capacitado y comprometido</span>
          </div>
        </div>
      </section>

      <section className="section section--dark areas-band" id="areas">
        <div className="blobs" aria-hidden="true"></div>
        <div className="container">
          <div className="section-head">
            <span className="kicker kicker--light">Áreas de trabajo</span>
            <h2>Servicios que ofrecemos</h2>
            <p className="lead">Cinco líneas de servicio especializado para empresas y hogares.</p>
          </div>
          <div className="areas-flex">
            {servicios.map((s) => (
              <Link key={s.slug} to={`/servicios#${s.slug}`} className="area-tile glass-dark">
                <span className="service-icon">
                  <ServiceIcon icono={s.icono} />
                </span>
                <h3>{s.nombre}</h3>
                <p>{s.corto}</p>
                <span className="area-go">Ver detalle →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="empresa">
        <div className="container">
          <div className="section-head">
            <span className="kicker">La empresa</span>
            <h2>¿Quiénes somos?</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>{empresa.sobre}</p>
              <p className="about-conducta-label">Nuestra filosofía de trabajo:</p>
              <ul className="check-list">
                {empresa.conducta.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="about-cards">
              <div className="mini-card glass">
                <h3>Misión</h3>
                <p>{empresa.mision}</p>
              </div>
              <div className="mini-card glass">
                <h3>Visión</h3>
                <p>{empresa.vision}</p>
              </div>
              <div className="mini-card glass">
                <h3>Valores</h3>
                <ul>
                  {empresa.valores.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="iso-strip">
            <div className="iso-strip-head">
              <span className="kicker kicker--light">Calidad certificada</span>
              <h3>ISO 9001</h3>
            </div>
            <p>{empresa.iso9001}</p>
            <div className="iso-actions">
              <a className="btn btn-yellow" href={asset('/download/politica-calidad.webp')} download>
                Política de Calidad · Descargar
              </a>
              <a
                className="btn btn-outline-light"
                href={whatsappLink('Hola Milter, quiero solicitar el dossier de la empresa.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar dossier
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="portafolio">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Trabajos</span>
            <h2>Algunos de nuestros trabajos</h2>
            <p className="lead">Una muestra de lo que hacemos todos los días en Santa Cruz.</p>
          </div>
          <PortfolioGallery items={galeriaChica} showFilters={false} />
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <h2>¿Necesitás un servicio integral para tu empresa?</h2>
          <a className="btn btn-dark" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      <section className="section section--smoke" id="contacto">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Contacto</span>
            <h2>¡Contactate con nosotros!</h2>
            <p className="lead">Puede llamarnos por teléfono, chatear por WhatsApp o visitarnos.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="mini-card glass contact-card">
                <h3>Dirección</h3>
                <p>{config.direccion}</p>
                <p>{config.zona}</p>
                <p>{config.ciudad}</p>
              </div>
              <div className="mini-card glass contact-card">
                <h3>Teléfono y WhatsApp</h3>
                <p>
                  <a className="contact-link" href={`tel:+${config.whatsapp}`}>{config.telefono_display}</a>
                </p>
                <p>
                  <a className="contact-link" href={`mailto:${config.email}`}>{config.email}</a>
                </p>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                title="Mapa de Milter"
                src={config.maps_embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}