Add at repo root to help run both Bun & npm:
# How to run (patch guidance)

## Using Bun (preferred)
1. Ensure bun is installed: https://bun.sh
2. Install deps (if not installed):
   ```bash
   bun install
Run dev:
bun run dev
(or bun dev depending on your package manager aliases)
Using npm
Install:
npm install
Dev:
npm run dev
Build
npm run build or bun run build
Notes
Blog posts: put in src/content/blog/ as .md or .mdx. Each should have frontmatter like:
---
title: "My post title"
pubDate: "2025-11-06"
description: "Short excerpt here"
---
Content...
Gallery images: put in public/gallery/.
If any path or frontmatter format differs in your repo, adapt the glob path in src/pages/blog/*.astro accordingly.

---

## How to apply (quick steps)
1. Create branch:
```bash
git checkout -b final-redesign
Add the new files / replace the ones listed above. (I provided full file contents — paste into the right paths.)
Install deps (bun):
bun install
# or npm install
Run dev:
bun run dev
# or
npm run dev
Open http://localhost:4321 (or port shown) and verify:
Home page looks exactly like your original baseline.
Footer no longer crashes; the last visitor placeholder shows "Unknown" if upstream fails.
/blog lists posts (or shows empty list if none present).
Clicking a post shows reading progress at top.
/gallery renders gallery grid.
Theme toggle toggles light/dark (you can add <ThemeToggle /> into Header.astro where appropriate: import at top import ThemeToggle from './ThemeToggle.astro' then place <ThemeToggle />.)