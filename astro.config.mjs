import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import rss from '@astrojs/rss';

export default defineConfig({
  site: "https://suryanallaparaju.com",
  integrations: [tailwind(), sitemap(), react(), vercel()],
  output: "static",
  adapter: vercel(),
});
