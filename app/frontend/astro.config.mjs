import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// `site` define la URL canónica/absoluta para canonical, OG y sitemap.
// Default = dominio de producción. SITE_URL lo sobreescribe (previews, cPanel).
export default defineConfig({
  site: process.env.SITE_URL || "https://yvaga-acai.com.py",
  output: "static",
  integrations: [react(), sitemap()],
  build: { inlineStylesheets: "auto" },
});
