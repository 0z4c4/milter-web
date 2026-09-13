import { Link } from 'react-router-dom'
import { asset } from '../lib/base'
import { useStore } from '../store/useStore'
import { whatsappLink } from '../data/content'
import ServiceIcon from '../components/ServiceIcon'

export default function Servicios() {
  const { servicios, demanda } = useStore()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-copy">
              <nav className="breadcrumb">
                <Link to="/">Inicio</Link>
                <span>/</span>
                <span>Servicios</span>
              </nav>
              <span className="kicker kicker--lg">Excelencia operativa</span>
              <h1 className="visually-hidden">Servicios que hacemos por usted</h1>
              <p className="lead">
                Cinco áreas de trabajo especializadas, aplicadas con personal capacitado,
                químicos autorizados y sistemas certificados de gestión de calidad.
              </p>
              <div className="page-hero-chips">
                {demanda.map((d) => (
                  <Link key={d.slug} className="chip chip--dark" to={`/servicios#${d.slug}`}>
                    {d.nombre}
                  </Link>
                ))}
              </div>
            </div>
            <div className="servicio-hero-media">
              <img src={asset('/img/limpieza/4.webp')} alt="Áreas de trabajo de Milter" loading="lazy" />
              <span className="servicio-hero-tag">5 áreas especializadas</span>
            </div>
          </div>
        </div>
      </section>

      <span className="hazard hazard--full"></span>

      <section className="section">
        <div className="container servicio-list">
          {servicios.map((s, i) => (
            <article key={s.slug} id={s.slug} className="servicio-block">
              <div className="servicio-block-copy">
                <span className="servicio-num">0{i + 1}</span>
                <span className="service-icon service-icon--lg">
                  <ServiceIcon icono={s.icono} />
                </span>
                <h2>{s.nombre}</h2>
                <p className="servicio-intro">{s.intro}</p>
                <ul className="check-list">
                  {s.subservicios.map((sub) => (
                    <li key={sub}>{sub}</li>
                  ))}
                </ul>
                <div className="servicio-actions">
                  <Link className="btn btn-dark" to={`/servicios/${s.slug}`}>
                    Ver servicio completo
                  </Link>
                  <a
                    className="btn btn-yellow"
                    href={whatsappLink(`Hola Milter, quiero cotizar el servicio de ${s.nombre}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
              <figure className="servicio-block-foto">
                <img src={s.foto} alt={s.nombre} loading="lazy" />
                <figcaption className="servicio-photo-tag">{s.corto}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}