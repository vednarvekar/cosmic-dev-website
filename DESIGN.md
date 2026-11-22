# Ved's Universe: design system

This is the rulebook for vednarvekar.com. Read it before adding or changing anything visual. The site is a personal portfolio for Ved Narvekar, a backend & AI engineer. It should feel like walking into a person's world, not reading a template.

## 1. The concept

The site is **Ved's desk**, a physical workspace you can touch. Every section is an object you'd find on or around an engineer's desk:

| Section | Object | File |
|---|---|---|
| Intro | `ved.exe` boot screen: "entering Ved's universe" | `src/components/portfolio/BootGate.tsx` |
| Hero | The desk: draggable polaroid, sticky notes, terminal, keycaps, mug | `src/components/portfolio/Desk.tsx` |
| Manifesto | Olive band with a lime marquee and words that light up on scroll | `src/components/portfolio/Manifesto.tsx` |
| Projects | A wooden shelf of **floppy disks**; clicking one slides in a drawer | `src/components/portfolio/DiskShelf.tsx` |
| About | Tilted polaroids and fun-fact chips ("Off the terminal, I'm just Ved") | `LifeAndContact.tsx` → `Life` |
| Contact | "Let's build something real" with a shop **receipt** ("TOTAL: the ultimate package") | `LifeAndContact.tsx` → `Contact` |
| Under development | The project's floppy disk mid-write, a sticky note, a WIP git log | `src/components/UnderDevelopmentPage.tsx` |
| 404 | "This page fell off the desk", a terminal echoing the missing path | `src/pages/NotFound.tsx` |

**The test for anything new:** what object on Ved's desk is it? A blog could be a notebook, a timeline a calendar, testimonials notes pinned to a corkboard, a skills list a box of keycaps. If it can't be an object, it at least has to use the same materials (paper, tape, ink, lime).

**What this site is not.** These directions were tried and rejected; don't drift back to them:
- dark "developer console" or observability-dashboard looks
- WebGL point clouds, globes, space or planet themes
- the Brittany-Chiang-style sticky sidebar plus scrolling list
- Swiss spec-sheet minimalism
- generic dark mode with a gradient accent

References Ved chose: landonorris.com (editorial type, olive and lime) and the personal, playful portfolios on wallofportfolios.in (Rebecca's sticky notes and receipt, Smriti's desk objects, Sharvari's zine shelf, Vanshika's game console, Subarshni's ENTER gate).

## 2. Tokens

All tokens live on `.vp` at the top of `src/styles/portfolio.css`. Use these tokens; never write a raw colour in a component.

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

Object conventions:
- Paper objects get a **slight rotation** and a **soft shadow** (`0 4px 10px #0001` to `0 10px 30px #0003`). Buttons get **hard offset shadows** in ink, never blurred.
- Everything that looks physical should do something when touched: drag, tilt, lift or press.

## 4. Motion

Use Framer Motion (already installed) for entrances and state changes, and CSS for hovers and loops.

- **Entrances:** springs (`stiffness 140–260`, `damping 15–20`), from `y: 40` or a slight extra rotation, with small staggers (0.07–0.12s). Scroll-in uses `whileInView` with `viewport={{ once: true }}`.
- **Panels and reveals:** ease `[0.7, 0, 0.2, 1]` or `[0.8, 0, 0.2, 1]`, 0.5–0.9s (the drawer, the iris reveal).
- **Hovers:** 0.15–0.35s CSS transitions; a playful overshoot `cubic-bezier(.3, 1.6, .5, 1)` is fine for lifts.
- **Dragging:** desk objects use the custom pointer drag in `Desk.tsx`, which moves `left`/`top` and clamps to the desk. Do **not** use Framer's `drag` with `dragConstraints={ref}`: it shifts objects on window resize.
- **Reduced motion:** every new animation must degrade under `prefers-reduced-motion` (the global block in `portfolio.css` kills CSS animations; use `useReducedMotion()` for JS timing, as `BootGate` does).
- **The intro** plays once per browser session (`sessionStorage` key `ved-booted`), is skippable with any click or key, and lasts about 4 seconds. Keep it under about 5 seconds if you add lines.
- One showpiece motion per section is enough. Don't stack effects.

## 5. Voice and copy

- First person, casual, confident and a bit funny: "I build backends that don't break", "my first server crashed at 2am. I'm still here."
- Lowercase is fine for handwritten and terminal bits; headlines are uppercase plus a serif accent.
- Be specific and technical where it counts (project descriptions name the real stack), and playful around it.
- No buzzword soup, no "passionate developer", no emoji in headlines. Emoji only in fact chips.

## 6. Content and data

- **Projects** live in `src/data/projects.ts` (name, disk label, colour, tag, year, description, stack, impact, terminal preview, GitHub URL). Add a project by adding an object there; the shelf and drawer pick it up. Projects without `githubUrl` link to `/under-development?project=<name>`.
- **Links** (GitHub, LinkedIn, X, resume, email) are the `links` object in the same file.
- **Placeholders** still to replace are marked `TODO(ved)`: photos (desk polaroid, three life polaroids), email, project impact numbers, and the hobbies line. Search for `TODO(ved)`.
- Photos go in `public/` and replace the `.vp-ph` placeholder divs with `<img>` (keep `aspect-ratio: 1`, `object-fit: cover`).

## 7. Code conventions

- All site CSS is in `src/styles/portfolio.css`, with every class prefixed `vp-` and scoped under the `.vp` root. Pages import that file and wrap content in `<div className="vp">`.
- Tailwind and `src/components/ui` (shadcn) are left over from the old site. Don't use them for new portfolio UI; write `vp-` classes instead.
- Keep components small and in `src/components/portfolio/`. Data in `src/data/`.
- Accessibility: real `<button>`/`<a>` elements, visible focus (dashed ink outline is global), `aria-label` on icon-only buttons, `role="dialog"` on the drawer, and Escape closes overlays.
- Before committing: `npx tsc -p tsconfig.app.json --noEmit`, `npm run build`, then check the page at desktop **and** 375px wide (no sideways scroll, nothing clipped).

## 8. Browser tab and meta

- Tab title: **"Ved's Universe · Ved Narvekar"** (in `index.html`). Keep the name in it for search.
- `theme-color` is the paper colour `#f3f1ea`.
