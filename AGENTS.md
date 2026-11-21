# AGENTS.md — Milter Web

Propuesta web para **Milter**, servicios integrales (limpieza, fumigación, jardinería, baños químicos, tercerización) + página Milter Run, en Santa Cruz de la Sierra. Para mostrar al cliente vía GitHub Pages.

## Stack
- React 19 + Vite 8 + react-router-dom 7 (BrowserRouter) + Zustand 5 + TypeScript.
- Estilos en un solo archivo: `src/styles/global.css`.
- Sin framework UI, sin librerías de diseño.

## Comandos
- `pnpm dev` — desarrollo
- `pnpm lint` — oxlint
- `pnpm build` — `tsc -b && vite build && node scripts/postbuild.mjs` (genera `dist/`)
- `pnpm preview` — sirve el build (respetando `base: '/milter-web/'`)

## Deploy (GitHub Pages)
- Repo público: `0z4c4/milter-web`. Lanzamiento por GH Pages desde rama `gh-pages` (raíz).
- URL: `https://0z4c4.github.io/milter-web/`
- `vite.config.ts` fija `base: '/milter-web/'`.
- `main.tsx` usa `<BrowserRouter basename={import.meta.env.BASE_URL}>`. NO quitarlo: sin basename los links navegan al root de la cuenta.
- Assets estáticos SIEMPRE vía `asset()` de `src/lib/base.ts` (prefija `BASE_URL`) o `%BASE_URL%` en `index.html`. Nunca rutas absolutas `/img/...`.
- `scripts/postbuild.mjs` copia `index.html` → `404.html` (fallback SPA de GH Pages) y crea `.nojekyll`.
- Para actualizar producción:
  1. `pnpm build`
  2. Commit en `main` y `git push origin main`
  3. Reemplazar contenido de rama `gh-pages` por `dist/` y pushear (`git switch gh-pages`, borrar archivos salvo `.git`, copiar `dist/*`, commit, push, volver a `main`).
- Limitación: deep-links directos (`/milter-web/servicios`) devuelven status 404 de GH Pages pero renderizan igual vía `404.html`.

## Estructura clave
- `src/pages/Landing.tsx` — orden: hero → banda stats → servicios (áreas) → quiénes somos (empresa + ISO) → trabajos → CTA → contacto.
- `src/pages/Servicios.tsx` — listado con anclas `#slug`; hero 2 columnas con marco hazard.
- `src/pages/Servicio.tsx` — detalle por slug con breadcrumb y galería.
- `src/pages/MilterRun.tsx` — hero 2 columnas + auspicios (`.run-card`) y carreras.
- `src/components/Navbar.tsx` — links: Inicio · Servicios · Milter Run · Cotizar; menú móvil fullscreen sin animación; activo = texto amarillo + `border-bottom` amarillo (cuadrado, sin fondo).
- `src/components/Footer.tsx` — contacto + redes + link "Todos los servicios".
- `src/data/content.ts` — TODO el contenido real (config, servicios, empresa, milterRun, demanda).

## Convenciones visuales
- Color primario: `--yellow: #FFCD00`. NO cambiar (pedido del dueño).
- Tipografía: **Archivo** (display, pesos 400–900) + **Inter** (cuerpo). Vars `--font-disp` / `--font-body`.
- Bandas de peligro `.hazard` (amarillo/negro, `repeating-linear-gradient`) — recurso favorito del dueño: topbar, hero, CTA, footer, tiles, cards.
- Glassmorfismo: utilidades `.glass` / `.glass-dark`; navbar `rgba(17,17,17,0.9)` con `backdrop-filter: blur(16px)`.
- h1 del landing y de `/servicios` son `visually-hidden` (SEO/lectores, invisibles a la vista). El navbar ya muestra el logo.
- No hay banda stats en `global.css` desde el redesign, salvo la reincorporada entre hero y servicios (`.stats-band`).

## Gotchas aprendidos
- `backdrop-filter` en el header crea *containing block* para `position: fixed`: el drawer móvil usa `width:100vw; height:100vh/100dvh; top:0; left:0` (unidades viewport) en vez de `inset:0`.
- El nav móvil NO usa animaciones (transiciones removidas a pedido del usuario).
- `.area-tile` / `.run-card` usan flex con `clamp()` para wrap centrado; las `.run-card` tienen `height: 320px` fija y descripción con `-webkit-line-clamp: 4` + `overflow: hidden` (no usar JS de medición: fue rechazado).
- Marcos decorativos de fotos de hero: hazard tape amarillo/negro visible SOLO arriba e izquierda (técnica `inset: -14px 14px 14px -14px` + `mask-composite: exclude`).
- `.cta-band::after` se eliminó para no duplicar la cinta del footer (footer trae su propia `::before`).