import { create } from 'zustand'
import {
  config,
  servicios,
  portafolio,
  empresa,
  demanda,
  milterRun,
  whatsappLink,
} from '../data/content'

interface Store {
  config: typeof config
  servicios: typeof servicios
  portafolio: typeof portafolio
  empresa: typeof empresa
  demanda: typeof demanda
  milterRun: typeof milterRun
  whatsappLink: (mensaje?: string) => string
}

export const useStore = create<Store>(() => ({
  config,
  servicios,
  portafolio,
  empresa,
  demanda,
  milterRun,
  whatsappLink,
}))