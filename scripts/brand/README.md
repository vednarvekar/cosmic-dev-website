# Brand assets

Source templates for the share card and icons in `public/`. None of this ships with the site.

| Output | Size | Template |
|---|---|---|
| `public/og.png` | 1200×630 | `render.html?asset=og` |
| `public/favicon-96x96.png` | 96 | `render.html?asset=icon&size=96` |
| `public/apple-touch-icon.png` | 180 | `render.html?asset=icon&size=180` |
| `public/web-app-manifest-192x192.png` | 192 | `render.html?asset=maskable&size=192` |
| `public/web-app-manifest-512x512.png` | 512 | `render.html?asset=maskable&size=512` |
| `public/favicon.ico` | 16, 32, 48 | `render.html?asset=icon&size=16` (and 32, 48), packed with `make_ico.py` |
| `public/favicon.svg` | vector | hand-written; same V geometry as `render.html` |

## Regenerate

1. `npm run dev`, then open `http://localhost:8080/scripts/brand/render.html?asset=…`.
2. Wait for fonts to load, then screenshot the `#stage` element at its exact CSS size (any headless browser works; Playwright: `page.locator('#stage').screenshot({ path })`).
3. For the ICO: `python scripts/brand/make_ico.py public/favicon.ico icon16.png icon32.png icon48.png`.

Update the OG card when the headline, role or photo changes. Once there's a real photo of Ved, add it to the card.
