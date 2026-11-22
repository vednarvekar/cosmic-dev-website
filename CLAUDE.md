# vednarvekar.com

Ved Narvekar's personal portfolio: React 18 + Vite + TypeScript, Framer Motion, deployed on Vercel.

**Before any visual change, read [DESIGN.md](DESIGN.md).** It defines the "Ved's desk" concept, tokens, typography, reusable components, motion rules and voice. New UI must follow it.

## Commands
- `npm run dev`: dev server on http://localhost:8080
- `npx tsc -p tsconfig.app.json --noEmit`: type-check
- `npx eslint .`: lint
- `npm test`: vitest
- `npm run build`: production build

## Where things are
- `src/pages/`: routes (`Home`, `UnderDevelopment`, `NotFound`)
- `src/sections/`: home page sections, one file each
- `src/components/`: shared pieces (`ProjectDrawer`, `StartLights`)
- `src/data/projects.ts`, `src/data/experience.ts`, `src/data/site.ts`: all editable content (projects, career log, links, bio, F1, rides)
- `public/resume.pdf`: the source of truth for roles, projects and numbers
- `src/styles/`: `tokens.css` plus one stylesheet per section in `sections/`
- `src/hooks/usePageMeta.ts`: per-page title, description, canonical and robots

## Rules
- Plain CSS only (no Tailwind, no UI kits): `vp-` classes in `src/styles/sections/<section>.css`.
- Every page sets its meta with `usePageMeta()` and keeps exactly one `<h1>` (see DESIGN.md section 8, SEO rules).
- Verify every visual change at desktop and at 375px wide before committing.
- Never commit files with `:` in the name (for example `*:Zone.Identifier`); they break checkout on Windows.
