import { useMemo, useState } from 'react'
import { whatsappLink } from '../data/content'
import type { ItemPortafolio } from '../data/content'
import Modal from './Modal'

interface Props {
  items: ItemPortafolio[]
  showFilters?: boolean
}

export default function PortfolioGallery({ items, showFilters = true }: Props) {
  const categorias = useMemo(() => ['Todos', ...Array.from(new Set(items.map((i) => i.categoria)))], [items])
  const [filtro, setFiltro] = useState('Todos')
  const [abierto, setAbierto] = useState<number | null>(null)

  const visibles = filtro === 'Todos' ? items : items.filter((i) => i.categoria === filtro)
  const actual = abierto === null ? null : visibles[abierto]

  return (
    <div>
      {showFilters && (
        <div className="gallery-filters">
          {categorias.map((c) => (
            <button
              key={c}
              className={`filter-chip${filtro === c ? ' active' : ''}`}
              onClick={() => {
                setFiltro(c)
                setAbierto(null)
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="gallery-grid">
        {visibles.map((item, i) => (
          <button
            key={item.id}
            className="gallery-item"
            onClick={() => setAbierto(i)}
            aria-label={`Ver ${item.categoria}`}
          >
            <img src={item.src} alt={item.categoria} loading="lazy" />
          </button>
        ))}
      </div>

      <Modal open={abierto !== null} onClose={() => setAbierto(null)}>
        {actual && (
          <figure className="lightbox">
            <img src={actual.src} alt={actual.categoria} />
            <figcaption>
              <div>
                <strong>{actual.categoria}</strong>
                <span>
                  {abierto! + 1} / {visibles.length}
                </span>
              </div>
              <div className="lightbox-actions">
                <button className="btn btn-dark btn-small" onClick={() => setAbierto(((abierto! - 1) + visibles.length) % visibles.length)}>
                  Anterior
                </button>
                <button
                  className="btn btn-dark btn-small"
                  onClick={() => setAbierto((abierto! + 1) % visibles.length)}
                >
                  Siguiente
                </button>
                <a
                  className="btn btn-small"
                  href={whatsappLink(`Hola Milter, vi el trabajo de ${actual.categoria} en su sitio y quiero más información.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            </figcaption>
          </figure>
        )}
      </Modal>
    </div>
  )
}