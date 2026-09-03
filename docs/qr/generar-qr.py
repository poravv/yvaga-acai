"""Genera los QR de yvaga-acai.com.py: uno redondeado neutro y uno temático de marca.

Uso: python docs/qr/generar-qr.py   (requiere: pip install "qrcode[pil]")
"""
from pathlib import Path

import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.colormasks import SolidFillColorMask, RadialGradiantColorMask
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer

URL = "https://yvaga-acai.com.py"
RAIZ = Path(__file__).resolve().parents[2]
SALIDA = RAIZ / "docs" / "qr"
ISOLOGO = RAIZ / "app" / "frontend" / "public" / "assets" / "isologo.webp"

ACAI = (90, 26, 134)        # --acai
ACAI_ABYSS = (22, 4, 31)    # --acai-abyss
CREMA = (253, 244, 236)     # --crema
BLANCO = (255, 255, 255)
TINTA = (29, 15, 36)        # --ink


def base():
    # ERROR_CORRECT_H: 30% de redundancia, necesario para tapar el centro con el isologo.
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=20, border=4)
    qr.add_data(URL)
    qr.make(fit=True)
    return qr


def redondeado(destino):
    base().make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(),
        color_mask=SolidFillColorMask(back_color=BLANCO, front_color=TINTA),
    ).save(destino)


def tematico(destino):
    base().make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(),
        color_mask=RadialGradiantColorMask(back_color=CREMA, center_color=ACAI, edge_color=ACAI_ABYSS),
        embeded_image_path=str(ISOLOGO),
    ).save(destino)


if __name__ == "__main__":
    redondeado(SALIDA / "qr-yvaga-redondeado.png")
    tematico(SALIDA / "qr-yvaga-tematico.png")
    print("listo:", SALIDA)
