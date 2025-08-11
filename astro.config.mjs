import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://index.astrojs.org",
  integrations: [tailwind(), sitemap(), react()],
  output: "static",
  adapter: vercel(),
});