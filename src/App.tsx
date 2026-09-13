import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Landing from './pages/Landing'
import Servicios from './pages/Servicios'
import Servicio from './pages/Servicio'
import MilterRun from './pages/MilterRun'
import useSEO from './hooks/useSEO'

function AppEffects() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { irASeccion?: string } | null
    const target = state?.irASeccion || location.hash.replace('#', '')
    if (target) {
      window.history.replaceState({}, '')
      const el = document.getElementById(target)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.key, location.state, location.hash])

  return null
}

export default function App() {
  useSEO()

  return (
    <>
      <AppEffects />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<Servicio />} />
          <Route path="/milter-run" element={<MilterRun />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}