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

- **WhatsApp**: +595 992 424757 (`595992424757`) — canal de venta principal
- **Dirección**: Camino a Pirayú, Itauguá, Departamento Central
  - Coordenadas: `-25.4000478, -57.3470665`
  - Ficha de Maps: https://maps.app.goo.gl/jVMvAzTZMS5sbe298
- **Horarios**:
  - Lunes a Sábado: 09:00 – 20:00
  - Domingo: 13:00 – 20:00
- **Redes**:
  - Instagram: https://www.instagram.com/yvagaacai.py
  - Facebook: https://www.facebook.com/profile.php?id=61593014733765
  - TikTok: https://www.tiktok.com/@yvagaacai.py

### Correos del dominio

Casillas disponibles en `yvaga-acai.com.py`. **Todavía no se publican en el sitio**
ni figuran en el JSON-LD; están documentadas para tenerlas en cuenta.

| Casilla | Uso previsto |
|---|---|
| `contacto@yvaga-acai.com.py` | Consultas generales. Es la candidata a publicarse en la web y a ir como `email` en el JSON-LD. |
| `pedidos@yvaga-acai.com.py` | Pedidos por correo, como alternativa a WhatsApp. |
| `administracion@yvaga-acai.com.py` | Facturación y temas administrativos. No conviene exponerla públicamente. |

Pendiente de decidir: si se publica `contacto@`, agregarla a `CONTACT` en
`catalog.js` para que la tomen la sección de contacto, el footer y el JSON-LD
desde una sola fuente.

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

La animación usa una sola imagen, `app/frontend/public/assets/story/cup-ready.webp`,
en dos capas: una en escala de grises de fondo y otra a color recortada con un
clipPath que sube con el scroll. Las capas PNG sueltas de la versión anterior se
eliminaron por no tener referencias.

## Cómo funciona el pedido (UX)

1. El cliente agrega productos al carrito (persistido en `localStorage`).
2. Al confirmar, se arma un mensaje pre-cargado y se abre **WhatsApp** con el
   detalle del pedido + total estimado.
3. El local responde para confirmar disponibilidad y entrega/retiro.
