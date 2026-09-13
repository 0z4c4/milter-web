import { Link, Navigate, useParams } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { whatsappLink } from '../data/content'
import type { ItemPortafolio } from '../data/content'
import ServiceIcon from '../components/ServiceIcon'
import PortfolioGallery from '../components/PortfolioGallery'

export default function Servicio() {
  const { slug } = useParams()
  const { servicios } = useStore()

  const servicio = servicios.find((s) => s.slug === slug)
  if (!servicio) return <Navigate to="/" replace />

  const galeria: ItemPortafolio[] = servicio.galeria.map((src, i) => ({
    id: `${servicio.slug}-g${i}`,
    categoria: servicio.nombre,
    src,
  }))
  const otros = servicios.filter((s) => s.slug !== servicio.slug)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Inicio</Link>
            <span>/</span>
            <Link to="/servicios">Servicios</Link>
            <span>/</span>
            <span>{servicio.nombre}</span>
          </nav>
          <div className="page-hero-grid">
            <div className="page-hero-copy">
              <span className="service-icon service-icon--lg">
                <ServiceIcon icono={servicio.icono} />
              </span>
              <h1>{servicio.nombre}</h1>
              <p>{servicio.intro}</p>
              <div className="hero-actions">
                <a
                  className="btn btn-dark"
                  href={whatsappLink(`Hola Milter, quiero cotizar el servicio de ${servicio.nombre}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar por WhatsApp
                </a>
                <a className="btn btn-outline" href="#galeria">
                  Ver trabajos
                </a>
              </div>
            </div>
            <div className="page-hero-photo">
              <img src={servicio.foto} alt={servicio.nombre} />
            </div>
          </div>
        </div>
      </section>

      <span className="hazard hazard--full"></span>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Qué incluye</span>
            <h2>Servicios comprendidos</h2>
          </div>
          <ul className="check-list check-list--grid">
            {servicio.subservicios.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--smoke" id="galeria">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Galería</span>
            <h2>Trabajos de {servicio.nombre}</h2>
          </div>
          <PortfolioGallery items={galeria} showFilters={false} />
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <h2>¿Querés contratar {servicio.nombre.toLowerCase()}?</h2>
          <a
            className="btn btn-dark"
            href={whatsappLink(`Hola Milter, quiero cotizar el servicio de ${servicio.nombre}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar ahora
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Más servicios</span>
            <h2>También ofrecemos</h2>
          </div>
          <div className="related-grid">
            {otros.slice(0, 4).map((s) => (
              <Link key={s.slug} to={`/servicios/${s.slug}`} className="related-card">
                <span className="service-icon">
                  <ServiceIcon icono={s.icono} />
                </span>
                <h3>{s.nombre}</h3>
                <p>{s.corto}</p>
                <span className="related-go">Ver servicio →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}