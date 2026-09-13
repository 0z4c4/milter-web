import { asset } from '../lib/base'

export interface Config {
  nombre: string
  tagline: string
  telefono_display: string
  whatsapp: string
  whatsapp_mensaje: string
  email: string
  direccion: string
  zona: string
  ciudad: string
  facebook: string
  linkedin: string
  maps: string
  tienda: string
  maps_embed: string
}

export interface Servicio {
  slug: string
  nombre: string
  corto: string
  intro: string
  icono: Icono
  subservicios: string[]
  foto: string
  galeria: string[]
}

export type Icono = 'limpieza' | 'fumigacion' | 'jardineria' | 'banos' | 'tercerizacion'

export interface ItemPortafolio {
  id: string
  categoria: string
  src: string
}

export interface Empresa {
  sobre: string
  conducta: string[]
  mision: string
  vision: string
  valores: string[]
  iso9001: string
}

export interface Demanda {
  nombre: string
  slug: string
}

export interface Patrocinio {
  evento: string
  anio: string
  rol: string
  descripcion: string
}

export interface Carrera {
  fecha: string
  nombre: string
  ciudad: string
  detalle: string
}

export interface MilterRun {
  intro: string
  patrocinios: Patrocinio[]
  carreras: Carrera[]
}

export const config: Config = {
  nombre: 'Milter',
  tagline: 'Higiene, Calidad, Seguridad y Tercerización. Déjelo en nuestras manos.',
  telefono_display: '+591 75500349',
  whatsapp: '59175500349',
  whatsapp_mensaje: 'Hola Milter, quiero hacer una consulta sobre sus servicios.',
  email: 'info@milter.bo',
  direccion: 'C/14 de Junio Nro. 979 — B/Héroes del Chaco',
  zona: 'Zona 3 Pasos al Frente',
  ciudad: 'Santa Cruz de la Sierra, Bolivia',
  facebook: 'https://www.facebook.com/MilterCorp',
  linkedin: 'https://www.linkedin.com/company/milter-corp/',
  maps: 'https://g.page/Milter?share',
  tienda: 'https://tienda.milter.bo',
  maps_embed:
    'https://maps.google.com/maps?q=14%20de%20Junio%20979%2C%20Santa%20Cruz%20de%20la%20Sierra&t=&z=15&ie=UTF8&iwloc=&output=embed',
}

const galeria = (cat: string, nums: number[]): string[] =>
  nums.map((n) => asset(`/img/${cat}/${n}.webp`))

export const servicios: Servicio[] = [
  {
    slug: 'limpieza',
    nombre: 'Limpieza Profesional',
    corto: 'Limpieza y desinfección para empresas, instituciones, industrias y hogares.',
    intro:
      'Garantizamos ambientes limpios, desinfectados y seguros con químicos autorizados, maquinaria a vapor y personal capacitado para todo tipo de recintos: desde oficinas y plantas industriales hasta hospitales y cocinas industriales.',
    icono: 'limpieza',
    subservicios: [
      'Desinfección preventiva de gérmenes y bacterias con químicos autorizados mediante aspersión (Covid-19, A-H1N1 y otros)',
      'Desinfección preventiva con máquinas a vapor',
      'Servicio profesional de limpieza para empresas, instituciones y hogares',
      'Limpieza y lavado profundo para todo tipo de ambientes',
      'Limpieza y desinfección domiciliaria, institucional e intrahospitalaria',
      'Lavandería industrial de prendas para hospitales, hoteles, empresas y fábricas',
      'Limpieza y destranque de tuberías y cámaras engrasadoras en restaurantes y cocinas industriales',
    ],
    foto: asset('/img/limpieza/4.webp'),
    galeria: galeria('limpieza', [4, 10, 1, 9, 2, 3, 14, 8]),
  },
  {
    slug: 'fumigacion',
    nombre: 'Fumigación y Control de Plagas',
    corto: 'Control profesional de plagas, roedores, aves y murciélagos en cualquier instalación.',
    intro:
      'Protegemos plantas industriales, almacenes, silos, supermercados y domicilios con tratamientos de fumigación y control de plagas efectivos, aplicados con seguridad y con productos de alta calidad.',
    icono: 'fumigacion',
    subservicios: [
      'Fumigación y control de plagas comunes en plantas industriales, almacenes, silos, supermercados y domicilios',
      'Control de roedores (ratas, ratones y otros)',
      'Control de aves y control de murciélagos',
      'Control de cucarachas, garrapatas y otros',
    ],
    foto: asset('/img/fumigacion/5.webp'),
    galeria: galeria('fumigacion', [5, 15, 20, 6, 2, 8, 9, 4]),
  },
  {
    slug: 'jardineria',
    nombre: 'Jardinería y Paisajismo',
    corto: 'Diseño, mantenimiento y cuidado de áreas verdes y campos deportivos.',
    intro:
      'Transformamos y mantenemos espacios verdes para domicilios y empresas: sembrado de césped, paisajismo, poda en altura, fertilización y control de plagas en plantas y jardines.',
    icono: 'jardineria',
    subservicios: [
      'Servicio de paisajismo para domicilios y empresas',
      'Jardinería: sembrado de césped y colocación de plantas',
      'Mantenimiento de áreas verdes',
      'Mantenimiento de campos deportivos',
      'Poda de árboles en altura',
      'Fertilización de plantas y jardines',
      'Control de plagas en plantas y jardines (turiros y hongos)',
    ],
    foto: asset('/img/jardineria/2.webp'),
    galeria: galeria('jardineria', [2, 8, 3, 7, 15, 4, 6, 9]),
  },
  {
    slug: 'banos',
    nombre: 'Alquiler de Baños Portátiles',
    corto: 'Sanitarios químicos para obras, petroleras y eventos al aire libre.',
    intro:
      'Brindamos baños químicos y sanitarios portátiles en óptimas condiciones de higiene para empresas constructoras, petroleras y eventos al aire libre, con mantenimiento e insumos incluidos.',
    icono: 'banos',
    subservicios: [
      'Alquiler para empresas constructoras',
      'Alquiler para empresas petroleras',
      'Alquiler para eventos al aire libre en general',
    ],
    foto: asset('/img/banos/1.webp'),
    galeria: galeria('banos', [1, 2, 12, 8, 7, 9, 13, 14]),
  },
  {
    slug: 'tercerizacion',
    nombre: 'Tercerización de Personal',
    corto: 'Reclutamiento, selección y dotación de personal técnico y operativo.',
    intro:
      'Conectamos a su empresa con el talento que necesita: reclutamiento técnico y operativo, selección, subcontratación para proyectos y capacitación de equipos de trabajo.',
    icono: 'tercerizacion',
    subservicios: [
      'Reclutamiento de personal técnico y operativo para trabajos en campo y ciudad',
      'Reclutamiento y selección de personal para empresas',
      'Subcontratación de personal para proyectos eventuales',
      'Subcontratación de personal para proyectos específicos',
      'Capacitación de personal y equipos de trabajo',
      'Evaluación de prospectos humanos',
      'Reclutamiento de talento técnico y profesional',
    ],
    foto: asset('/img/tercerizacion/5.webp'),
    galeria: galeria('tercerizacion', [5, 2, 7, 3, 8, 4, 1, 9]),
  },
]

const a = servicios.flatMap((s) =>
  s.galeria.map((src, i) => ({
    id: `${s.slug}-${i}`,
    categoria: s.nombre,
    src,
  }))
)

export const portafolio: ItemPortafolio[] = a

export const empresa: Empresa = {
  sobre:
    'Somos una empresa de servicios integrales especializados en limpieza, jardinería, fumigación, obtención y dotación de personal, y alquiler de baños portátiles. Enfocados en la excelencia de nuestros sistemas de gestión de calidad y en la atención al cliente, contribuimos al desarrollo de Santa Cruz y sus provincias con responsabilidad social, generando oportunidades laborales para personas con las mismas ganas de superación.',
  conducta: [
    'Seriedad: ser los mejores en todo lo que hacemos y ofrecemos.',
    'Compromiso responsable con nuestros clientes, actuando con honestidad.',
    'Permanente superación para asegurar nuestra competitividad.',
  ],
  mision:
    'Proporcionar servicios de la mayor calidad y con precios competitivos dentro del mercado.',
  vision:
    'Ser considerados una empresa referente de calidad en servicios integrales de limpieza, jardinería, control de plagas, alquiler de baños portátiles y tercerización en Santa Cruz y Bolivia.',
  valores: [
    'Trabajar al máximo nivel, dando la mejor calidad en servicios.',
    'Respetar el medio ambiente más allá de los requisitos legales.',
    'Garantizar la seguridad y salud de las personas: nuestro personal, clientes y proveedores.',
    'Tener una conducta de empresa responsable con la sociedad.',
    'Disponer de un equipo humano sensibilizado, formado y actualizado.',
    'Proyectar una imagen corporativa impecable.',
  ],
  iso9001:
    'Estamos certificados con la norma ISO 9001 para maximizar la organización de la empresa a partir de la satisfacción del cliente y la mejora continua. Nos apoyamos en proveedores que avalan y respaldan nuestros servicios con productos de alta calidad.',
}

export const demanda: Demanda[] = [
  { nombre: 'Limpieza industrial y empresarial', slug: 'limpieza' },
  { nombre: 'Fumigación', slug: 'fumigacion' },
  { nombre: 'Tercerización', slug: 'tercerizacion' },
  { nombre: 'Alquiler de baños químicos', slug: 'banos' },
]

export const milterRun: MilterRun = {
  intro:
    'Milter también corre. Participamos y auspiciamos carreras y eventos deportivos en Santa Cruz, apoyando a atletas, equipos y organizaciones solidarias que promueven el deporte y la comunidad.',
  patrocinios: [
    {
      evento: 'Carrera Milter Run',
      anio: '2026',
      rol: 'Organizador / Auspiciante',
      descripcion: 'Edición anual de nuestra carrera corporativa a beneficio de la comunidad.',
    },
    {
      evento: 'Maratón de Santa Cruz',
      anio: '2025',
      rol: 'Auspiciante',
      descripcion: 'Apoyo con logística e hidratación a corredores en el recorrido.',
    },
    {
      evento: 'Carrera solidaria vecinal',
      anio: '2025',
      rol: 'Colaborador',
      descripcion: 'Aporte de insumos y personal para la organización del evento.',
    },
    {
      evento: 'Trail y aventura',
      anio: '2024',
      rol: 'Auspiciante',
      descripcion: 'Patrocinio a equipos locales de trail running.',
    },
  ],
  carreras: [
    {
      fecha: 'Oct 2026',
      nombre: 'Carrera Milter Run',
      ciudad: 'Santa Cruz de la Sierra',
      detalle: 'Recorrido urbano de 5K y 10K con categorías por edades.',
    },
    {
      fecha: 'Sep 2025',
      nombre: 'Maratón de Santa Cruz',
      ciudad: 'Santa Cruz de la Sierra',
      detalle: 'Participación del equipo Milter y puesto de hidratación.',
    },
    {
      fecha: 'May 2025',
      nombre: 'Caminata familiar',
      ciudad: 'Zona de la empresa',
      detalle: 'Actividad recreativa junto a vecinos y colaboradores.',
    },
    {
      fecha: 'Mar 2025',
      nombre: 'Trail nocturno',
      ciudad: 'Santa Cruz',
      detalle: 'Equipo Milter Run compitiendo en las categorías 8K y 15K.',
    },
  ],
}

export const whatsappLink = (mensaje: string = config.whatsapp_mensaje): string =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensaje)}`