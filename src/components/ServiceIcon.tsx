import type { JSX } from 'react'
import type { Icono } from '../data/content'

const paths: Record<Icono, JSX.Element> = {
  limpieza: (
    <>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      <path d="M8 12h8" />
    </>
  ),
  fumigacion: (
    <>
      <path d="M12 2 4 5v6c0 5.25 3.4 10.2 8 11 4.6-.8 8-5.75 8-11V5l-8-3z" />
      <path d="M8 9h8" />
      <path d="M10 13h.01M14 13h.01" />
    </>
  ),
  jardineria: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),
  banos: (
    <>
      <path d="M3 11 12 2l9 9" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M14.5 21v-6h-5v6" />
    </>
  ),
  tercerizacion: (
    <>
      <circle cx="9" cy="7.5" r="4" />
      <path d="M1 20.5v-2a4 4 0 0 1 3-3.87" />
      <path d="M9 7.5v2" />
      <circle cx="17" cy="8" r="3.5" />
      <path d="M13 20.5v-1a4 4 0 0 1 3-3.87" />
      <path d="M23 20.5v-1a4 4 0 0 0-3-3.87" />
    </>
  ),
}

export default function ServiceIcon({ icono }: { icono: Icono }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[icono]}
    </svg>
  )
}