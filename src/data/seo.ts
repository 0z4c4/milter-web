export const SITE_URL = 'https://milter.bo'

interface Seo {
  path: string
  title: string
  description: string
}

export const seoPorRuta: Seo[] = [
  {
    path: '/',
    title: 'Milter | Servicios Integrales Industriales en Santa Cruz',
    description:
      'Servicios integrales en Santa Cruz de la Sierra: limpieza industrial, fumigación y control de plagas, jardinería, baños portátiles y tercerización de personal. ISO 9001.',
  },
  {
    path: '/servicios',
    title: 'Servicios | Milter — Servicios Integrales en Santa Cruz',
    description:
      'Descubra los servicios integrales de Milter: limpieza profesional, fumigación y control de plagas, jardinería y paisajismo, alquiler de baños portátiles y tercerización de personal.',
  },
  {
    path: '/servicios/limpieza',
    title: 'Limpieza Profesional | Milter',
    description:
      'Limpieza y desinfección profesional para empresas, instituciones, industrias y hogares, con químicos autorizados y máquinas a vapor.',
  },
  {
    path: '/servicios/fumigacion',
    title: 'Fumigación y Control de Plagas | Milter',
    description:
      'Control profesional de plagas, roedores, aves y murciélagos en plantas industriales, almacenes, silos, supermercados y domicilios.',
  },
  {
    path: '/servicios/jardineria',
    title: 'Jardinería y Paisajismo | Milter',
    description:
      'Paisajismo, sembrado de césped, mantenimiento de áreas verdes y campos deportivos, poda en altura y control de plagas en plantas.',
  },
  {
    path: '/servicios/banos',
    title: 'Alquiler de Baños Portátiles | Milter',
    description:
      'Baños químicos y sanitarios portátiles para empresas constructoras, petroleras y eventos al aire libre en Santa Cruz.',
  },
  {
    path: '/servicios/tercerizacion',
    title: 'Tercerización de Personal | Milter',
    description:
      'Reclutamiento, selección y dotación de personal técnico y operativo, subcontratación para proyectos y capacitación de equipos.',
  },
  {
    path: '/milter-run',
    title: 'Milter Run | Patrocinios y Carreras',
    description:
      'El equipo de deporte de Milter: patrocinios, auspicios y carreras en las que la empresa participa y apoya a la comunidad.',
  },
]

export const seoPorPath = (ruta: string): Seo => {
  const encontrado = seoPorRuta.find((s) => s.path === ruta)
  return (
    encontrado ?? {
      path: ruta,
      title: 'Milter | Servicios Integrales Industriales en Santa Cruz',
      description:
        'Servicios integrales en Santa Cruz de la Sierra: limpieza industrial, fumigación, jardinería, baños portátiles y tercerización.',
    }
  )
}