# Ved's Universe

The source for [vednarvekar.com](https://vednarvekar.com), the portfolio of Ved Narvekar, a backend & AI engineer.

The site is built as a desk you can play with: a `ved.exe` boot intro, draggable objects, an F1 start-lights mini game, projects as floppy disks on a shelf, and a receipt for a contact card.

## Stack

React 18, TypeScript, Vite, Framer Motion and React Router, deployed on Vercel with Vercel Analytics and Speed Insights. All styling is plain CSS with design tokens, with no UI framework.

## Run it

```bash
npm install
npm run dev      # http://localhost:8080
npm test         # vitest
npm run build    # production build in dist/
```

## Project layout

```
src/
  pages/        Home, UnderDevelopment, NotFound (routes)
  sections/     Home page sections: Intro, Nav, Desk, Manifesto, Projects, About, Contact
  components/   Shared pieces: ProjectDrawer, StartLights
  hooks/        usePageMeta (title, description, canonical, robots per page)
  data/         projects.ts and site.ts: all editable content lives here
  styles/       tokens.css + one stylesheet per section
  test/         vitest + Testing Library
```

To add a project, add an entry to `src/data/projects.ts`. To change links, bio details, F1 drivers or the ride log, edit `src/data/site.ts`. Search for `TODO(ved)` to find placeholders.

Design rules (colours, type, components, motion, voice) are in [DESIGN.md](DESIGN.md).
