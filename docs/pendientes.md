# Yvága Açai — Pendientes (backlog)

Estado al **2026-06-14**. Marcar `[x]` al completar.

## 🔴 Bloqueantes para producción (datos reales)

- [ ] **Dirección física real** del local — hoy es placeholder ("a confirmar")
      en `app/frontend/src/data/catalog.js` → `CONTACT.address`.
- [ ] **URLs reales de redes** (Instagram, TikTok, Facebook) — hoy son `#`
      en `CONTACT.instagram/tiktok/facebook`.
- [ ] **Confirmar número de WhatsApp** (+595 992 424757) y horarios.
- [ ] **Completar datos del titular** en las páginas legales (razón social,
      RUC, domicilio): hoy son placeholders `[completar]` en
      `src/pages/{terminos,privacidad}.astro`. Revisar con un profesional legal.
- [ ] **Dominio de producción**: definir el real y actualizar:
  - `app/frontend/astro.config.mjs` → `site`
  - `app/frontend/public/robots.txt` → `Sitemap:`
  (hoy: `https://yvaga-acai.mindtechpy.net`).

## 🟠 Contenido y assets

- [ ] **Fotos reales de productos** para las cards (Destacados / BrandX / mapa).
      Hoy usan gradiente + marca de agua (`.media-mark`). Soltar imágenes en
      `app/frontend/public/assets/` y referenciarlas en los componentes.
- [ ] **Imagen Open Graph** (og:image) para compartir en redes/WhatsApp —
      falta meta `og:image` en `src/layouts/Base.astro`.
- [ ] **Mapa real** de ubicación en la sección Contacto (hoy es un fallback).
- [ ] Revisar **textos legales** (footer, año dinámico ya OK).

## 🟡 SEO / performance

- [ ] **Optimizar imágenes** de `public/assets/story/` (son PNG de 0.5–1.5 MB).
      Convertir a WebP / reducir peso para mejorar LCP.
- [ ] Validar **JSON-LD** (`FoodEstablishment`) con Rich Results Test cuando
      esté la dirección/geo real (agregar `geo` lat/lng).
- [ ] Agregar `geo` y `areaServed` reales al schema.
- [ ] Revisar Lighthouse (mobile) tras cargar imágenes reales.

## 🟢 Mejoras / nice-to-have

- [ ] Página de delivery por ciudad/zona (SEO local) — ver skill `seo-architect`.
- [ ] Analítica (GA4 / Meta Pixel) si se va a invertir en ads.
- [ ] Animación de "wave divider" entre secciones (CSS ya existe `.wave-divider`).
- [ ] Tests E2E básicos (carrito + link de WhatsApp).

## ✅ Hecho

- [x] Migración del prototipo (React CDN+Babel) a **Astro + React islands**.
- [x] App en `app/frontend`, build vía **Docker Compose** (nginx) en `:8080`.
- [x] `.gitignore`, `.dockerignore`, `build-cpanel.sh` (deploy estático cPanel).
- [x] SEO base: title, description, OG, canonical, sitemap, robots, JSON-LD.
- [x] Carrito con nanostores (persistente) + pedido por WhatsApp.
- [x] CTA WhatsApp del navbar rediseñado (verde + pulso).
- [x] Guía de scroll "Descubrí" más visible (botón lima con chevron que rebota).
- [x] **Vista mobile optimizada**: hero sin desbordes, stats en wrap, chips ajustados.
- [x] **Menú mobile**: burger togglea (abre/cierra con X), botón WhatsApp sin desbordar.
- [x] Sección **"Así armamos tu açaí"**: relleno continuo del vaso por scroll
      (clip-path), anclado (sticky) también en mobile.
- [x] **Hero con producto real**: bochas de açaí (`acai.png`) en el orbe.
- [x] **Story v2**: fondo monocromático (mismo vaso en grayscale) → efecto
      gris→color; alineación perfecta sin halo; borde de relleno con **relieve
      cóncavo** (clipPath SVG) que cubre la punta al completarse; fondo
      decorativo (glows + frutas) para no sentirse vacía.
- [x] **Aureola del cursor** açaí (sutil, sigue al puntero; oculta en touch).
- [x] **Páginas legales**: Términos, Privacidad y Cookies (+ links en footer y
      banner de cookies). Fix nginx `absolute_redirect off` (evita /terminos →
      redirect sin puerto).
- [x] **Carrito pide el nombre** del cliente y lo envía en el mensaje de WhatsApp
      (antes "Mi nombre es:" iba vacío). Botón se deshabilita sin nombre.
- [x] **Story mobile** mejor estructurado (vaso más grande/centrado).

## Notas de operación

- **Levantar local**: `docker compose up --build` → http://localhost:8080
- **Dev**: `cd app/frontend && npm run dev` → http://localhost:4321
- **Build cPanel**: `SITE_URL=https://DOMINIO ./build-cpanel.sh` → genera el `.zip`.
- `_prototype/` = frontend viejo (referencia, ignorado por git).
