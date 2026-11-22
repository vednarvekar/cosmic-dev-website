# Ved's Universe: design system

This is the rulebook for vednarvekar.com. Read it before adding or changing anything visual. The site is a personal portfolio for Ved Narvekar, a backend & AI engineer. It should feel like walking into a person's world, not reading a template.

## 1. The concept

The site is **Ved's desk**, a physical workspace you can touch. Every section is an object you'd find on or around an engineer's desk:

| Section | Object | File |
|---|---|---|
| Intro | `ved.exe` boot screen: "entering Ved's universe" | `src/sections/Intro.tsx` |
| Nav | Floating pill nav | `src/sections/Nav.tsx` |
| Hero | The desk: draggable polaroid, sticky notes, terminal, keycaps, mug, and the F1 start-lights game | `src/sections/Desk.tsx`, `src/components/StartLights.tsx` |
| Manifesto | Olive band with a lime marquee and words that light up on scroll | `src/sections/Manifesto.tsx` |
| Projects | A wooden shelf of **floppy disks**; clicking one slides in a drawer | `src/sections/Projects.tsx`, `src/components/ProjectDrawer.tsx` |
| About | "Off the terminal, I'm just Ved": polaroids and fact chips, then the "Sundays are for F1" pinboard (paddock pass, flip-able driver cards, ride log) | `src/sections/About.tsx` |
| Contact | "Let's build something real" with a shop **receipt** ("TOTAL: the ultimate package") | `src/sections/Contact.tsx` |
| Under development | The project's floppy disk mid-write, a sticky note, a WIP git log | `src/pages/UnderDevelopment.tsx` |
| 404 | "This page fell off the desk", a terminal echoing the missing path | `src/pages/NotFound.tsx` |

**The test for anything new:** what object on Ved's desk is it? A blog could be a notebook, a timeline a calendar, testimonials notes pinned to a corkboard, a skills list a box of keycaps. If it can't be an object, it at least has to use the same materials (paper, tape, ink, lime).

**What this site is not.** These directions were tried and rejected; don't drift back to them:
- dark "developer console" or observability-dashboard looks
- WebGL point clouds, globes, space or planet themes
- the Brittany-Chiang-style sticky sidebar plus scrolling list
- Swiss spec-sheet minimalism
- generic dark mode with a gradient accent

**F1 and riding** are part of Ved's identity (Red Bull fan; Max, Lewis and Oscar fan; loves bike rides). Use team colours, driver names and numbers in our own styling, but **never official F1 or team logos or driver photos** (trademark and copyright).

References Ved chose: landonorris.com (editorial type, olive and lime) and the personal, playful portfolios on wallofportfolios.in (Rebecca's sticky notes and receipt, Smriti's desk objects, Sharvari's zine shelf, Vanshika's game console, Subarshni's ENTER gate).

## 2. Tokens

All tokens live on `.vp` in `src/styles/tokens.css`. Use these tokens; never write a raw colour in a component.

### Colour

| Token | Value | Use |
|---|---|---|
| `--vp-paper` | `#f3f1ea` | Default background: warm paper |
| `--vp-dot` | `#dcd8cb` | Dot grid, light borders, scrollbar |
| `--vp-ink` | `#17180f` | Text, terminal background, hard shadows |
| `--vp-olive` | `#23241a` | Dark bands (manifesto, contact, intro) |
| `--vp-lime` | `#d4ff3a` | **The one accent.** Highlights, primary buttons, serif accents on dark |
| `--vp-mute` | `#7a7b6c` | Secondary text, labels, hints |
| `--vp-yellow` / `--vp-pink` / `--vp-blue` | `#ffe680` / `#ffc9d6` / `#bfe0ff` | Sticky notes and hover fills only |

Floppy disk colours are per project in `src/data/projects.ts` (lime, blue, pink, yellow, mint, lavender).

Rules:
- Lime is the only "brand" colour. On paper, use it as a highlighter behind text (`<mark>`, `em` backgrounds) or as a button fill, never as text colour (it's unreadable on light). On olive or ink it can be text colour.
- The pastels are for paper objects only (sticky notes, chips on hover, disks). They never colour body text or large backgrounds.
- The site is single-theme by design (paper plus olive bands). There is no dark mode toggle.

### Type

| Token | Face | Role |
|---|---|---|
| `--vp-sans` | Archivo (variable width) | Display headlines: **weight 900, `font-stretch: 75%`, uppercase, tight leading (.8–.9), letter-spacing −.04em** |
| `--vp-serif` | Instrument Serif | The *accent word* inside a headline, in italic or regular, and never uppercase |
| `--vp-hand` | Caveat | Handwriting: sticky notes, polaroid captions, "hey there, I'm", hints |
| `--vp-mono` | JetBrains Mono | Labels, nav, buttons, terminal text, metadata (10–13px, uppercase labels get letter-spacing) |

Fonts load from Google Fonts in `index.html`. If you add a weight, add it to that URL.

**The signature headline pattern:** a condensed uppercase sans with one word swapped to serif, for example `VED <em>Narvekar</em>`, `LET'S BUILD <em>something</em> REAL`, `4<em>0</em>4`. Use it for every big headline. Only one serif word or phrase per headline.

Body copy is Archivo at 1–1.2rem, line-height 1.6, max about 50ch, colour `#3f4034` to `#45463a` on paper.

### Spacing and layout

- Side gutter on every full-width section: the `.vp-g` class (16px minimum, safe-area aware). Don't hand-write side padding.
- Content max width: 1100–1200px, centred.
- Section vertical rhythm: `padding-block` of about 90–120px.
- Breakpoints: `860px` (two-column sections stack), `760px` (desk hides the `vp-hm` objects, shelf narrows), `600px` (intro poster layout), `420px` (nav tightens).
- Never cause horizontal page scroll. The only sideways scroller is the disk shelf.

## 3. Materials and components

Reuse these classes before inventing new ones.

| Class | Looks like | Notes |
|---|---|---|
| `.vp-sticky` | Sticky note with a tape strip | Set `background` to a pastel token. `<small>` inside gives the mono label. Slight rotation (−7° to 5°). |
| `.vp-pol` (+ `.vp-ph`) | Polaroid photo | Caption in `<span>` in Caveat. Replace `.vp-ph` with an `<img>` for real photos. |
| `.vp-term` (+ `.vp-tb`) | Mini terminal window | Prompts in `<b>` (lime). Content is plain text in `<pre>`. |
| `.vp-fl` (+ `.vp-sh`, `.vp-lb`) | Floppy disk | Background is the disk colour, label in Caveat. |
| `.vp-receipt` | Torn shop receipt | Rows are `.vp-r`, total `.vp-tot`, barcode `.vp-bar`. |
| `.vp-go` | Primary button | Lime fill, ink text, hard 4px ink shadow that grows on hover. |
| `.vp-ghost` | Secondary button | Ink outline that fills ink on hover. |
| `.vp-back` | Pill "← back" link | Top-left on sub-pages. |
| `.vp-progress` | Thin progress bar | Lime fill; `.vp-progress-light` for paper backgrounds. |
| `.vp-facts span` | Pill chip | Tilts and fills yellow on hover. |
| `.vp-hi` | Handwritten intro line | Caveat, muted, rotated −3°. |
| `.vp-status` | Full-screen dotted-paper page | Base for any standalone page (see the under-development and 404 pages). |
| `.vp-pass` | Paddock pass on a striped lanyard | Swings on hover. |
| `.vp-card` | Trading card that flips | Front uses the `--team` colour; back is a yellow note. Content is `drivers` in `site.ts`. |
| `.vp-ridelog` | Ruled notebook page with tape | Dashed route squiggle, handwritten list. |
| `.vp-lights` | F1 start-light rig | Mini reaction-time game; desktop only. |
| `.vp-sr` | Visually hidden text | For screen readers and search engines (e.g. project descriptions on the shelf). |

Object conventions:
- Paper objects get a **slight rotation** and a **soft shadow** (`0 4px 10px #0001` to `0 10px 30px #0003`). Buttons get **hard offset shadows** in ink, never blurred.
- Everything that looks physical should do something when touched: drag, tilt, lift or press.

## 4. Motion

Use Framer Motion (already installed) for entrances and state changes, and CSS for hovers and loops.

- **Entrances:** springs (`stiffness 140–260`, `damping 15–20`), from `y: 40` or a slight extra rotation, with small staggers (0.07–0.12s). Scroll-in uses `whileInView` with `viewport={{ once: true }}`.
- **Panels and reveals:** ease `[0.7, 0, 0.2, 1]` or `[0.8, 0, 0.2, 1]`, 0.5–0.9s (the drawer, the iris reveal).
- **Hovers:** 0.15–0.35s CSS transitions; a playful overshoot `cubic-bezier(.3, 1.6, .5, 1)` is fine for lifts.
- **Dragging:** desk objects use the custom pointer drag in `Desk.tsx`, which moves `left`/`top` and clamps to the desk. Do **not** use Framer's `drag` with `dragConstraints={ref}`: it shifts objects on window resize.
- **Reduced motion:** every new animation must degrade under `prefers-reduced-motion` (the global block in `tokens.css` kills CSS animations; use `useReducedMotion()` for JS timing, as `Intro` does).
- **The intro** plays once per browser session (`sessionStorage` key `ved-booted`), is skippable with any click or key, and lasts about 4 seconds. Keep it under about 5 seconds if you add lines.
- One showpiece motion per section is enough. Don't stack effects.

## 5. Voice and copy

- First person, casual, confident and a bit funny: "I build backends that don't break", "my first server crashed at 2am. I'm still here."
- Lowercase is fine for handwritten and terminal bits; headlines are uppercase plus a serif accent.
- Be specific and technical where it counts (project descriptions name the real stack), and playful around it.
- No buzzword soup, no "passionate developer", no emoji in headlines. Emoji only in fact chips.

## 6. Content and data

All editable content lives in `src/data/`:
- `projects.ts`: projects (name, disk label, colour, tag, year, description, stack, impact, terminal preview, GitHub URL). Add a project by adding an object; the shelf, drawer and SEO text pick it up. Projects without `githubUrl` link to `/under-development?project=<name>`.
- `site.ts`: site name, title and description (used for SEO), social links, the F1 driver cards, F1 details (team, fan since, favourite moment) and the ride log. Empty optional fields are simply hidden.

Placeholders still to replace are marked `TODO(ved)` (photos, email, project impact numbers, F1 and ride details, card lines). Photos go in `public/` and replace the `.vp-ph` placeholder divs with `<img>` (keep `aspect-ratio: 1`, `object-fit: cover`, and a real `alt`).

## 7. Code conventions

```
src/
  pages/        routes: Home, UnderDevelopment, NotFound
  sections/     home page sections, one file each
  components/   shared pieces used by sections (ProjectDrawer, StartLights)
  hooks/        usePageMeta
  data/         projects.ts, site.ts
  styles/       index.css -> tokens.css + sections/<section>.css
  test/         vitest + Testing Library
```

- Styling is plain CSS. There is no Tailwind and no UI kit. Each section has its own file in `src/styles/sections/`, every class is prefixed `vp-`, and pages wrap content in `<div className="vp">`. Register new stylesheets in `src/styles/index.css`.
- Watch specificity: the reset in `tokens.css` uses bare element selectors on purpose so section classes can override it. Don't add `.vp <element>` rules that would beat a section's own class (that once broke the shelf's centring).
- Keep components small. Sections go in `src/sections/`, shared bits in `src/components/`, and content in `src/data/`, never hard-coded in JSX.
- Accessibility: real `<button>`/`<a>` elements, lists as `<ul>`, visible focus (dashed ink outline is global), `aria-label` on icon-only buttons, `role="dialog"` on the drawer, Escape closes overlays, and a "Skip to projects" link.
- Before committing, run `npx tsc -p tsconfig.app.json --noEmit`, `npx eslint .`, `npm test` and `npm run build`. Then check the page at desktop **and** 375px wide (no sideways scroll, nothing clipped).

## 8. SEO rules

- **One `<h1>` per page** (on the home page it's "Ved Narvekar" in the desk hero). Sections use `<h2>`, sub-blocks `<h3>`.
- Every page calls `usePageMeta()` (`src/hooks/usePageMeta.ts`) to set its title, description, canonical, Open Graph and robots. Thin or error pages (`/under-development`, 404) pass `noindex: true`. Don't block them in `robots.txt`, or Google can't see the `noindex`.
- `index.html` holds the static defaults crawlers see first: title, description, canonical, Open Graph and Twitter tags, JSON-LD (`Person`, `WebSite`, `ProfilePage`) and a `<noscript>` summary. Keep it in sync with `site.ts` when the bio, role or links change.
- Tab title: **"Ved's Universe · Ved Narvekar"**. Keep the name in it for search.
- Content that only appears on interaction (like the project drawer) must also exist in the DOM as text (see the `.vp-sr` descriptions on the shelf).
- Add every new public route to `public/sitemap.xml`. `robots.txt` points to the sitemap.
- The Open Graph image is `public/og.png` (1200x630). It still shows the old design; regenerate it once real photos are in.
- `theme-color` and the manifest colours are the paper colour `#f3f1ea`. `vercel.json` sets long-lived caching on `/assets/*` and basic security headers.
