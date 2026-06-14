# Yvága Açai — Información del negocio

> Documento de referencia del negocio para el sitio web. La fuente de verdad de
> precios y catálogo en el código está en `app/frontend/src/data/catalog.js`.
> Si cambian precios o productos, actualizar **ahí** (y reflejarlo en este doc).

## Identidad

- **Nombre**: Yvága Açai
- **Significado**: «Yvága» significa *cielo* en guaraní.
- **Concepto**: Açaí cremoso, helados artesanales y bowls frescos preparados al
  momento con ingredientes naturales. Posicionamiento tropical/premium.
- **Eslogan**: «El sabor tropical que te lleva al cielo».
- **País**: Paraguay. Moneda: Guaraníes (Gs / PYG).
- **Canal de venta principal**: pedido por **WhatsApp** (no hay checkout/pago en línea).

### Paleta de marca
| Token | Color | Uso |
|---|---|---|
| Açaí (morado) | `#240a36` → `#9a37c9` | fondos oscuros, base de marca |
| Lima | `#c9f53d` | acento principal / CTAs destacados |
| Amarillo | `#ffc94d` | acento secundario |
| Rosa | `#ff6fb5` | acento secundario |
| Crema | `#fdf4ec` | fondos claros |

Tipografías: **Bricolage Grotesque** (títulos) + **Plus Jakarta Sans** (texto).

## Contacto y horarios

> Definido en `app/frontend/src/data/catalog.js` → `CONTACT`.

- **WhatsApp**: +595 992 424757 (`595992424757`)
- **Dirección**: ⚠️ *a confirmar* (placeholder actual: "Vení a buscar tu pedido — dirección a confirmar")
- **Horarios**:
  - Lunes a Viernes: 10:00 – 22:00
  - Sábados y Domingos: 10:00 – 23:00
- **Redes** (⚠️ placeholders `#`, faltan URLs reales): Instagram, TikTok, Facebook.

## Catálogo y precios (Gs)

### Açaí del Rey
Pulpa cremosa, fría y cargada de energía tropical.

| Producto | Precio |
|---|---|
| Açaí 275 ml | 12.000 |
| Açaí 330 ml | 15.000 |
| Açaí con fruta 330 ml | 20.000 |
| Açaí con fruta 440 ml | 25.000 |
| Açaí con granola mix 330 ml | 15.000 |
| Açaí con granola mix 440 ml | 20.000 |
| Açaí con toppings 330 ml | 20.000 |
| Açaí con toppings 440 ml | 25.000 |
| Vaso BigCup (frutilla, dulce de leche, chocolate) | 12.000 |
| Vaso Gold (frutilla, dulce de leche, chocolate) | 7.000 |

### Helados cremosos
15 sabores artesanales servidos al momento.

Sabores: Chocolate, Dulce de leche, Frutilla, Granizado, Cielo, Americana,
Tramontana, Menta, Portuguesa, Capuchino, Uva, Limón, Banana, Prestigio, Tres leches.

| Producto | Precio |
|---|---|
| Vaso 100 ml (2 bochas) | 7.000 |
| Cono 2 bochas | 7.000 |
| Cono grande 3 bochas | 10.000 |
| Vaso grande 250 ml (4 bochas) | 12.000 |
| Pote 1/4 | 15.000 |
| Pote 1/2 | 25.000 |
| Pote 1 kg | 45.000 |

### Palitos & Paletas
| Producto | Precio |
|---|---|
| Palito frutal | 2.000 |
| Palito cremosito | 3.000 |
| Palito chocolatoso | 4.000 |
| Alfajor helado | 7.000 |
| Paleta rellena | 8.000 |

### Tortas
| Producto | Precio |
|---|---|
| Torta helada | 55.000 |
| Tortas a pedido | a consultar |

### Combos / Promos
| Combo | Precio | Incluye |
|---|---|---|
| Combo Tropical | 26.000 | Açaí con fruta 440 ml + palito frutal de regalo |
| Combo Pareja | 22.000 | 2 vasos Gold + 2 conos 2 bochas |
| Combo Familiar | 60.000 | Pote 1 kg + 4 conos a elección |

## "Así armamos tu açaí" (sección interactiva)

Orden de capas del açaí clásico, de abajo hacia arriba (animación de relleno por scroll):
1. Leche en polvo (base)
2. Açaí grande (cremoso)
3. Leche en polvo + granola + leche condensada
4. Açaí más liviano
5. Leche en polvo + granola + leche condensada (capa final)

Imágenes de la animación en `app/frontend/public/assets/story/`
(`cup-empty.png`, `cup-ready.png`).

## Cómo funciona el pedido (UX)

1. El cliente agrega productos al carrito (persistido en `localStorage`).
2. Al confirmar, se arma un mensaje pre-cargado y se abre **WhatsApp** con el
   detalle del pedido + total estimado.
3. El local responde para confirmar disponibilidad y entrega/retiro.
