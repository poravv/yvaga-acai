# 🍇 Resumen del Negocio: Yvága Açai

> Actualizado: agosto 2026. Fuente de verdad de precios y datos: `app/frontend/src/data/catalog.js`.

## 1. Identidad y Concepto

- **Nombre**: Yvága Açai («Yvága» significa *Cielo* en guaraní).
- **Eslogan**: «El sabor tropical que te lleva al cielo».
- **Concepto**: Heladería artesanal y barra tropical en Itauguá, Paraguay. Especializada en pulpa cremosa de açaí al estilo brasileño, bowls ensamblados al momento con frutas frescas y toppings, helados artesanales en variados formatos y paletas.
- **Posicionamiento**: Marca fresca, juvenil, refrescante y premium/instagrameable, con enfoque en ingredientes 100% naturales y preparación ante el cliente.

## 2. Ubicación, Operación y Contacto

- **Local**: Camino a Pirayú, Itauguá, Departamento Central, Paraguay.
  - Coordenadas: `-25.4000478, -57.3470665`
  - Mapa: https://maps.app.goo.gl/jVMvAzTZMS5sbe298
- **Horarios**:
  - Lunes a Sábado: 09:00 a 20:00 hs.
  - Domingos: 13:00 a 20:00 hs.
- **Canal principal de venta**: venta directa en local (takeaway/consumo) y pedidos por WhatsApp (**+595 981 001241**). La web genera un carrito interactivo que envía el pedido pre-formateado (con nombre del cliente) al WhatsApp del comercio.
- **Redes sociales**:
  - Instagram: [@yvagaacai.py](https://instagram.com/yvagaacai.py)
  - TikTok: [@yvagaacai.py](https://tiktok.com/@yvagaacai.py)
  - Facebook: [Yvága Açai](https://www.facebook.com/profile.php?id=61593014733765)
- **Correos del dominio** (activos, no publicados en la web):
  - `contacto@yvaga-acai.com.py` — consultas generales
  - `pedidos@yvaga-acai.com.py` — pedidos por correo
  - `administracion@yvaga-acai.com.py` — facturación y administración

## 3. Catálogo de Productos y Precios (Gs.)

### A) Açaí del Rey (pulpa cremosita y bowls)

| Producto | 330 ml | 440 ml |
|---|---|---|
| Açaí Clásico (275 ml: 12.000) | 15.000 | — |
| Açaí con Granola Mix | 15.000 | 20.000 |
| Açaí con Frutas (banana, frutilla…) ⭐ *más vendido* | 20.000 | 25.000 |
| Açaí con Toppings Completo | 20.000 | 25.000 |

- Vaso BigCup (frutilla, dulce de leche y chocolate): **12.000**
- Vaso Gold: **7.000**

### B) Helados Cremosos — 15 sabores artesanales

Chocolate, Dulce de leche, Frutilla, Granizado, Cielo, Americana, Tramontana, Menta, Portuguesa, Capuchino, Uva, Limón, Banana, Prestigio, Tres leches.

| Presentación | Precio |
|---|---|
| Vaso 100 ml (2 bochas) | 7.000 |
| Cono (2 bochas) | 7.000 |
| Cono Grande (3 bochas) | 10.000 |
| Vaso Grande 250 ml (4 bochas) | 12.000 |
| Pote 1/4 kg | 15.000 |
| Pote 1/2 kg | 25.000 |
| Pote 1 kg (familiar) | 45.000 |

### C) Palitos & Paletas Refrescantes

| Producto | Precio |
|---|---|
| Palito Frutal | 2.000 |
| Palito Cremosito | 3.000 |
| Palito Chocolatoso | 4.000 |
| Alfajor Helado | 7.000 |
| Paleta Rellena | 8.000 |

### D) Tortas Heladas

- Torta Helada por capas: **55.000**
- Tortas a pedido: precio a consultar según diseño/tamaño.

### E) Combos / Promociones

| Combo | Contenido | Precio |
|---|---|---|
| Tropical | Açaí con fruta 440 ml + palito frutal de regalo | 26.000 |
| Pareja | 2 vasos Gold + 2 conos de 2 bochas | 22.000 |
| Familiar | Pote de 1 kg + 4 conos a elección | 60.000 |

**Destacados en la web** (sección FEATURED): 6 productos con badges «Más vendido», «Premium», «Nuevo» y «Para festejar».

## 4. Capas del Açaí («Así armamos tu açaí»)

Proceso artesanal de armado en 5 capas (sección con animación por scroll):

1. Leche en polvo (base)
2. Açaí grande (cuerpo cremoso)
3. Leche en polvo + granola mix + leche condensada
4. Açaí más liviano
5. Capa final: leche en polvo, granola y leche condensada + frutas a elección (banana / frutilla)

## 5. Plataforma Web y Estrategia Digital

- **Dominio**: https://yvaga-acai.com.py — deploy en **Cloudflare Pages** desde GitHub (`poravv/yvaga-acai`, rama `main`).
- **Tecnología**: Astro 5 + React Islands (sitio estático, carga ultrarrápida, SEO local).
- **UX**: animación por scroll del armado del açaí, catálogo dinámico por pestañas (Açaí Bowls, Helados, Palitos & Paletas, Potes, Tortas), carrito persistente que pide el nombre del cliente y compone el mensaje de WhatsApp.
- **SEO / Medición**:
  - JSON-LD (negocio local con dirección, geo, horarios y redes), sitemap y robots.txt.
  - Google Search Console verificado (propiedad de dominio).
  - Cloudflare Web Analytics (beacon inyectado en el edge).
  - Meta Pixel (ID 1635996688137594), cargado **solo tras consentimiento de cookies**.
  - Metaetiqueta de verificación de dominio de Meta Business.
- **Legales**: páginas `/terminos`, `/privacidad` y `/cookies` (pedidos por WhatsApp, sin pago online, jurisdicción Paraguay).
- **Paleta de colores**:
  - Morado Açaí (`#240a36` → `#9a37c9`): identidad principal y fondos profundos.
  - Verde Lima (`#c9f53d`): acento para CTAs y frescura.
  - Rosa, amarillo y crema: acentos vibrantes y cálidos.
