import { useStore } from '../store/useStore'
import { asset } from '../lib/base'
import { whatsappLink } from '../data/content'

export default function MilterRun() {
  const { milterRun } = useStore()

  return (
    <>
      <section className="run-hero">
        <div className="container run-hero-inner hero-grid">
          <div className="hero-copy">
            <span className="badge">Deporte · Comunidad · Compromiso</span>
            <h1>
              MILTER <span>RUN</span>
            </h1>
            <p>{milterRun.intro}</p>
            <div className="hero-actions">
              <a className="btn btn-yellow" href={whatsappLink('Hola, quiero información sobre Milter Run (auspicios y carreras).')} target="_blank" rel="noopener noreferrer">
                Sumate como auspiciante
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <img src={asset('/img/hero.webp')} alt="Milter Run — carreras y comunidad" />
            <span className="hero-photo-tag">Run · Comunidad</span>
          </div>
        </div>
        <span className="hazard hazard--full"></span>
      </section>

      <section className="section" id="auspicios">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Auspicios y patrocinios</span>
            <h2>Eventos que apoyamos</h2>
            <p className="lead">
              Milter participa y apoya carreras y eventos deportivos. Aquí el listado de nuestros
              auspicios — el contenido se carga desde <code>content.ts</code>.
            </p>
          </div>
          <div className="run-flex">
            {milterRun.patrocinios.map((p) => (
              <article className="run-card" key={p.evento + p.anio}>
                <div className="run-card-top">
                  <span className="run-rol">{p.rol}</span>
                  <span className="run-card-year">{p.anio}</span>
                </div>
                <h3>{p.evento}</h3>
                <p>{p.descripcion}</p>
                <div className="run-card-foot">
                  <span className="run-card-brand">MILTER <span>RUN</span></span>
                  <a
                    className="run-card-link"
                    href={whatsappLink(`Hola, quiero auspiciar la carrera: ${p.evento}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Auspiciá tu evento
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="carreras">
        <div className="container">
          <div className="section-head">
            <span className="kicker kicker--light">Carreras</span>
            <h2>El equipo Milter Run compite</h2>
          </div>
          <div className="run-timeline">
            {milterRun.carreras.map((c) => (
              <div className="run-event" key={c.nombre + c.fecha}>
                <div className="run-event-date">
                  <strong>{c.fecha}</strong>
                </div>
                <div className="run-event-body">
                  <h3>{c.nombre}</h3>
                  <p className="run-event-city">{c.ciudad}</p>
                  <p>{c.detalle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Galería Run</span>
            <h2>Momentos de nuestras carreras</h2>
            <p className="lead">
              Fotos de carreras y patrocinios — se agregan cuando la empresa disponga el material.
            </p>
          </div>
          <div className="run-gallery">
            {[1, 2, 3, 4].map((n) => (
              <div className="run-tile" key={n}>
                <div className="run-tile-mark">
                  <strong>MILTER</strong>
                  <span>RUN</span>
                </div>
                <p>Foto próximamente</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <h2>¿Querés que Milter Run forme parte de tu evento?</h2>
          <a className="btn btn-dark" href={whatsappLink('Hola, quiero invitar a Milter Run a participar de un evento.')} target="_blank" rel="noopener noreferrer">
            Escribinos
          </a>
        </div>
      </section>
    </>
  )
}