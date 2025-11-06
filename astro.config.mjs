import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://suryanallaparaju.com",
  integrations: [tailwind(), sitemap(), react()],
  output: "static",
  adapter: vercel(),
});
