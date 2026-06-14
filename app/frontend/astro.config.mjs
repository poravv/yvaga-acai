import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// `site` define la URL canónica/absoluta para canonical, OG y sitemap.
// Default = dominio de producción (cPanel). SITE_URL lo sobreescribe para pruebas.
export default defineConfig({
  site: process.env.SITE_URL || "https://yvaga-acai.mindtechpy.net",
  output: "static",
  integrations: [react(), sitemap()],
  build: { inlineStylesheets: "auto" },
});
