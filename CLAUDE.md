# vednarvekar.com

Ved Narvekar's personal portfolio: React 18 + Vite + TypeScript, Framer Motion, deployed on Vercel.

**Before any visual change, read [DESIGN.md](DESIGN.md).** It defines the "Ved's desk" concept, tokens, typography, reusable components, motion rules and voice. New UI must follow it.

## Commands
- `npm run dev`: dev server on http://localhost:8080
- `npx tsc -p tsconfig.app.json --noEmit`: type-check
- `npm run build`: production build

## Where things are
- `src/pages/Index.tsx`: the home page composition
- `src/components/portfolio/`: the site's sections
- `src/data/projects.ts`: projects and social links (edit content here)
- `src/styles/portfolio.css`: all site styles (`vp-` prefix, tokens at the top)
- `src/components/UnderDevelopmentPage.tsx`, `src/pages/NotFound.tsx`: status pages

## Rules
- Style with `vp-` classes in `portfolio.css`; don't use Tailwind utilities or `src/components/ui` (shadcn leftovers) for portfolio UI.
- Verify every visual change at desktop and at 375px wide before committing.
- Never commit files with `:` in the name (for example `*:Zone.Identifier`); they break checkout on Windows.
