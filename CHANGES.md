# final-redesign patch - changes

- Added `postcss.config.cjs` for Tailwind/PostCSS integration.
- Fixed `src/pages/api/last-visitor.ts` to avoid crashes when env is missing.
- Added minimalist blog index: `src/pages/blog/index.astro`.
- Added blog renderer: `src/pages/blog/[slug].astro` with reading progress bar.
- Added gallery page: `src/pages/gallery.astro`.
- Added `src/components/ThemeToggle.astro` for light/dark toggle.
- Updated `astro.config.mjs`: set `site` and added `@astrojs/rss` to integrations.
- README & run instructions: see `README-PATCH.md`.

Make sure to place blog posts under `src/content/blog/` with `frontmatter` (title, pubDate, description).
Place gallery images under `public/gallery/`.

Run locally:
- Bun (preferred): `bun run dev` (or `bun bun run dev` depending on your environment alias)
- NPM: `npm run dev`

- Floating Apple-style blurred header (shows on scroll up)
- Theme toggle with sun/moon animation & persistent preference
- Blog tags displayed as pills; client-side filtering
- Gallery: masonry-like grid; zoom lightbox with keyboard nav
- Vercel Analytics included in Layout
- PWA: manifest.json, service-worker.js, offline.html + registration
