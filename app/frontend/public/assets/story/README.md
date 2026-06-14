# Engram: orden de capas del armado de acai

Esta carpeta contiene las imagenes transparentes usadas por la seccion
"Asi armamos tu acai" del frontend. El orden canonico de evaluacion es:

1. Vaso vacio, siempre visible como contenedor.
2. Leche en polvo sola.
3. Acai grande.
4. Leche en polvo con granola y leche condensada.
5. Acai no tan grande.
6. Capa final de leche en polvo, granola y leche condensada.

| Orden | Archivo | Uso visual |
| --- | --- | --- |
| 00 | `cup-empty.png` | Vaso transparente permanente. No cuenta como capa de ingrediente. |
| 01 | `layer-01-base.png` | Leche en polvo sola. |
| 02 | `layer-02-acai-bottom.png` | Acai mas grande. |
| 03 | `layer-03-granola-condensed.png` | Leche en polvo + granola + leche condensada. |
| 04 | `layer-04-acai-top.png` | Acai no tan grande. |
| 05 | `layer-05-final-granola-condensed.png` | Capa final de leche en polvo + granola + leche condensada. |

Notas de implementacion:

- El componente que consume este orden es `app/frontend/src/components/Story.jsx`.
- Las capas se declaran en `STORY_LAYERS` de abajo hacia arriba.
- El vaso aparece como `cup-back` y `cup-front`; las capas entran dentro de `puck-clip`.
- No se debe usar `clip-path`, mascara ni recorte rectangular sobre las capas. Las imagenes ya son PNG transparentes; el encaje correcto se logra ajustando `w`, `b` y `sy` en `STORY_LAYERS`.
- `w` controla el ancho relativo, `b` la posicion desde abajo y `sy` comprime o expande verticalmente la capa sin ocultar pixeles.
- `cup-ready.png` queda como referencia visual del producto terminado, pero no forma parte del orden canonico de construccion.
