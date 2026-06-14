# Yvága Açai · Landing

Landing estática de **Yvága Açai** (açaí, helados artesanales y bowls frescos, Paraguay).
Construida con **Astro + React islands**: HTML pre-renderizado para SEO, e hidratación
solo de las partes interactivas (carrito, tabs del menú y la animación de "armado del
açaí" por scroll). Pedidos por WhatsApp.

## Stack

- **Astro 5** (`output: static`) + `@astrojs/react` + `@astrojs/sitemap`
- **React 18** como islas (`client:load` / `client:visible`)
- **nanostores** para el estado del carrito compartido entre islas (persiste en `localStorage`)
- **nginx** (alpine) sirviendo `dist/` en Docker

## Estructura

```
app/frontend/            # app web (Astro) — se construye desde acá
  src/
    components/          # islas React (Header, Hero, Story, Menu, carrito, …)
    layouts/Base.astro   # <head> SEO, OG, canonical, JSON-LD (FoodEstablishment)
    data/catalog.js      # catálogo, combos, contacto (precios en Gs)
    lib/icons.jsx        # iconos SVG + formato de precio
    store/cart.js        # carrito (nanostores) + link de WhatsApp
    pages/index.astro    # página principal
    styles/global.css    # sistema visual
  public/assets/         # imágenes del producto (vaso + capas del açaí)
  Dockerfile, nginx.conf
docker-compose.yml       # levanta el frontend en :8080
build-cpanel.sh          # genera el .zip estático para cPanel
_prototype/              # prototipo original (referencia, no se publica)
```

## Desarrollo local

```bash
cd app/frontend
npm install
npm run dev        # http://localhost:4321
```

## Docker (producción local)

```bash
docker compose up --build      # http://localhost:8080
docker compose down
```

## Deploy a cPanel (estático)

```bash
SITE_URL=https://yvaga-acai.mindtechpy.net ./build-cpanel.sh
```

Genera `yvaga-acai-cpanel.zip` en la raíz. En cPanel: subir a `public_html` y
**Extract**. El zip incluye `.htaccess` (gzip, cache y `ErrorDocument 404`).

> `SITE_URL` define la URL canónica/OG/sitemap. Sin la variable, el build usa el
> dominio de producción por defecto definido en `astro.config.mjs`.

## SEO

- HTML pre-renderizado (contenido visible sin JS).
- `title`, `meta description`, Open Graph, `canonical` y `theme-color`.
- JSON-LD `FoodEstablishment` con menú, horarios y teléfono.
- `sitemap-index.xml` y `robots.txt` automáticos.
