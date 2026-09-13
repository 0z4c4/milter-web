import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoPorPath, SITE_URL } from '../data/seo'

export default function useSEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = seoPorPath(pathname)
    const url = `${SITE_URL}${seo.path}`
    document.title = seo.title
    meta('description', seo.description)
    meta('canonical', url, 'link')
    meta('og:title', seo.title)
    meta('og:description', seo.description)
    meta('og:url', url)
    meta('twitter:title', seo.title)
    meta('twitter:description', seo.description)
  }, [pathname])
}

function meta(name: string, content: string, tag: 'meta' | 'link' = 'meta') {
  const selector =
    tag === 'link'
      ? `link[rel="${name}"]`
      : `meta[property="${name}"], meta[name="${name}"]`
  const el = document.querySelector(selector)
  if (!el) return
  if (tag === 'link' && el instanceof HTMLLinkElement) {
    el.href = content
    return
  }
  if (el instanceof HTMLMetaElement) el.content = content
}