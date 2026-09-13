import { useState } from 'react'
import { Link } from 'react-router-dom'
import { whatsappLink } from '../data/content'
import type { Servicio } from '../data/content'
import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ servicio }: { servicio: Servicio }) {
  const [info, setInfo] = useState(false)

  return (
    <article className={`service-card${info ? ' is-open' : ''}`}>
      <span className="hazard"></span>
      <div className="service-card-head">
        <span className="service-icon">
          <ServiceIcon icono={servicio.icono} />
        </span>
        <h3>{servicio.nombre}</h3>
      </div>
      <p>{servicio.corto}</p>
      <button
        className="service-toggle"
        onClick={() => setInfo((v) => !v)}
        aria-expanded={info}
      >
        {info ? 'Ocultar servicios' : 'Ver servicios incluidos'}
      </button>
      {info && (
        <ul className="service-list">
          {servicio.subservicios.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
      <div className="service-actions">
        <Link className="btn btn-dark btn-small" to={`/servicios/${servicio.slug}`}>
          Ver servicio
        </Link>
        <a
          className="btn btn-small"
          href={whatsappLink(`Hola Milter, quiero cotizar el servicio de ${servicio.nombre}.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cotizar
        </a>
      </div>
    </article>
  )
}