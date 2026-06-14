#!/usr/bin/env bash
# ============================================================
# YVÁGA AÇAI · Build estático para cPanel
#
# Uso:
#   ./build-cpanel.sh                                              # build de prueba (canonical localhost)
#   SITE_URL=https://yvaga-acai.mindtechpy.net ./build-cpanel.sh   # build de producción
#
# Genera yvaga-acai-cpanel.zip en la raíz del repo: el CONTENIDO de dist/
# + .htaccess (Apache). En cPanel: subir el zip a public_html y "Extract" —
# los archivos quedan en la raíz del hosting.
# ============================================================
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
FRONT="$ROOT/app/frontend"
ZIP="$ROOT/yvaga-acai-cpanel.zip"

echo "→ Build de Astro (SITE_URL=${SITE_URL:-http://localhost:8080})"
cd "$FRONT"
npm install --no-fund --no-audit
npm run build

echo "→ .htaccess para Apache/cPanel"
cat > dist/.htaccess << 'HTACCESS'
# YVÁGA AÇAI — cache y compresión (Apache/cPanel)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  # assets con hash o inmutables: cache larga
  ExpiresByType image/webp "access plus 30 days"
  ExpiresByType image/png "access plus 30 days"
  ExpiresByType image/svg+xml "access plus 30 days"
  ExpiresByType text/css "access plus 30 days"
  ExpiresByType application/javascript "access plus 30 days"
  # el HTML siempre fresco
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
AddType image/webp .webp
# Página de error branded (Astro genera dist/404.html)
ErrorDocument 404 /404.html
HTACCESS

echo "→ Empaquetando $ZIP"
rm -f "$ZIP"
cd dist
zip -rq "$ZIP" . -x "*.DS_Store"
cd "$ROOT"

echo "✓ Listo: $ZIP ($(du -h "$ZIP" | cut -f1 | tr -d ' '))"
