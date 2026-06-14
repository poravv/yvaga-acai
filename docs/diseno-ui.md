# Yvága Açai — Decisiones de diseño / UI

Notas de implementación de las piezas visuales no obvias. Para el catálogo y
datos del negocio ver [negocio.md](./negocio.md); para el backlog [pendientes.md](./pendientes.md).

## Sección "Así armamos tu açaí" (Story)

Animación scroll-driven: una sección de `300vh` con un contenedor `sticky` (100svh).
El progreso `p` (0..1) se calcula con `getBoundingClientRect` sobre la sección.

**Técnica del relleno (clave):** se usa **la misma imagen** (`cup-ready.png`) en dos capas:
- `.cup-ghost`: fondo en **monocromático** (`filter: grayscale(1)`), opacidad ~0.6.
- `.cup-fill`: la misma imagen a color, recortada con un `clipPath` SVG que sube con el scroll.

Al ser **la misma silueta**, la alineación es perfecta (tapa, paredes y base
coinciden exactas) → no hay halos ni desfases. El efecto resultante es **gris → color**
de abajo hacia arriba.

> Por qué NO se usan dos fotos distintas (vacío + lleno): se midió y son cups
> físicamente diferentes (tapa y base con formas/anchos distintos: p.ej. base
> 52% vs 56%, labio de tapa 99.8% vs 91.2%), así que nunca solapan y aparece un
> "halo" blanco. La solución monocromática con una sola imagen lo elimina de raíz.

**Borde con relieve (cóncavo):** el `clipPath` no es una recta sino una curva
cuadrática (`Q`) en coordenadas `objectBoundingBox` (0..1, responsive). La panza
**entra hacia adentro** (cóncava). Para que al 100% la muesca igual cubra la punta,
el nivel se desplaza levemente con el llenado: `y = (1 - fill) - dome * fill`
(sobrepasa un poco al final). Ver `src/components/Story.jsx`.

**Fondo decorativo:** `.story-bg` con 2 glows radiales (morado/lima) + grano +
frutas flotantes tenues (`bob`), para que la sección no se sienta vacía.

## Hero

Orbe del inicio (`.bowl-stage`): anillos punteados que rotan + glow radial +
**imagen real del producto** (`acai.png`, las bochas de açaí) + chips de fruta
flotantes con **parallax** al mover el mouse. Reemplazó al disco estilizado.

## Aureola del cursor

`.cursor-orb`: aura suave morada/lima (radial-gradient translúcido) que sigue al
puntero con suavizado (lerp 0.3) — el cursor real queda en el centro. Crece sobre
elementos interactivos (`.hot`), se achica al click (`.tap`). Oculta en
`pointer: coarse` y con `prefers-reduced-motion`. Definida en `layouts/Base.astro`
(script global) + `styles/global.css`.

## Otras piezas

- **CTA WhatsApp navbar** (`.btn-wa.nav-cta`): verde WhatsApp + texto blanco +
  ícono en disco blanco + pulso (`waPulse`).
- **Guía scroll "Descubrí"** (`.scroll-cue`): botón lima con chevron que rebota (`cueBounce`).
- **Reveal-on-scroll** global (`.reveal` → `.in`) vía IntersectionObserver en `Base.astro`,
  reintentado tras hidratar las islas.

## Gotchas

- Imágenes en `public/assets/` deben tener permisos de lectura (`chmod 644`); un
  `cp` desde un origen `-rw-------` provoca **HTTP 403** en nginx.
- Componentes con punto (`<I.whatsapp />`) no se usan directo en `.astro`: SVG inline.
- `<script type="application/ld+json">` se inyecta con `is:inline set:html`.
