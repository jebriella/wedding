# CLAUDE.md

Wedding website for **Gabriella & Fredrik** — 14 August 2027, ceremony in Ösmo kyrka, party at Nynäs Havsbad, Nynäshamn.
A single-page, mobile-first site in **Swedish**, hosted on GitHub Pages.

## Stack

- React 19 + TypeScript, built with Vite. Node is only used for tooling — there is no server.
- Linting: oxlint (`.oxlintrc.json`). Formatting: Prettier (`.prettierrc.json`: no semicolons, single quotes).
- CSS Modules per component (`Foo.tsx` + `Foo.module.css`) plus shared tokens and a few global helpers (`.eyebrow`, `.pill`, `.accent`) in `src/styles/global.css`. No CSS framework.

## Commands

```bash
npm install          # first time
npm run dev          # local dev server (http://localhost:5173/)
npm run build        # typecheck + production build into dist/
npm run preview      # serve dist/ locally
npm run typecheck
npm run lint
npm run format       # Prettier write
npm run images       # convert design/uploads/*.png to WebP in src/assets/flowers/
```

Run `npm run typecheck`, `npm run lint` and `npm run build` before considering a change done.

## Layout

```
design/              Design mockups (source of truth for the look) — do not edit or ship
  Wedding Website v2.dc.html   Mobile design (the base styles) — framed in Mobile Preview.dc.html
  Wedding Website.dc.html      Desktop design (applied from 900px)
  Invites etc.dc.html          Invitation / print designs (not part of the site)
  uploads/                     Original floral PNGs (converted by `npm run images`)
  screenshots/                 Invitation screenshots (not the site)
scripts/             Node tooling (optimize-images.mjs)
src/
  main.tsx           Entry point
  App.tsx            Page: Nav, MenuOverlay, sections, Footer, StickyRsvp
  components/        One component per file (named export) + its .module.css
  assets/flowers/    WebP floral images — import them, Vite handles hashing and base path
  lib/               Small helpers (countdown)
  content/           Guest-facing text and data (Swedish), as typed TS objects
  styles/global.css  Design tokens (colors, fonts) and global styles
public/              Static files copied as-is (favicon, images used by the site)
docs/roadmap.md      What is planned next
.github/workflows/   GitHub Pages deploy
```

## Conventions

- **All guest-facing copy is Swedish.** Code, comments and docs are English.
- **Content lives in `src/content/`**, not hard-coded in components, so texts can be edited in one place.
- The design's "Plats & resa" and "Boende" sections were removed on purpose — don't re-add them from the design files unless asked.
- **Mobile-first.** Base CSS follows the v2 mobile design (~390px phones, content max-width 560–640px). Desktop layout from v1 is added in `@media (min-width: 900px)` blocks — the only breakpoint. Mobile-only pieces: Meny overlay, sticky O.S.A. button. Desktop-only: inline nav links, split hero with CTA, Dagen image.
- Shared building blocks: `Section` (band background, widths, padding) and `SectionHeading` (eyebrow + italic title + rule; `align="start"` = left-aligned on desktop).
- **Design tokens:** use the CSS variables in `global.css` (`--color-ink`, `--color-accent`, `--font-serif`, …) rather than raw hex values. Fonts: Cormorant Garamond (headings, italic) and Jost (body/labels, uppercase with letter-spacing).
- **Section anchors** are fixed: `hem`, `dagen`, `fragor`, `osa` (defined in `src/content/site.ts`). Keep them stable — they may be printed on invitations.
- The `.dc.html` files in `design/` use a custom template runtime (`support.js`, `{{ }}` bindings, `<sc-for>`/`<sc-if>`). Read them for structure, styles and content; port to idiomatic React + CSS rather than copying the inline-style markup.

## Gotchas

- **Domain:** the site is served from the root of `https://gabriellafredrik.se/` (GitHub Pages custom domain, set in repo Settings → Pages), so `vite.config.ts` has `base: '/'`. Still import images from `src/` or use `import.meta.env.BASE_URL` for public files, so a base change stays a one-line edit. No `CNAME` file is needed — the Actions deploy ignores it.
- **No backend.** GitHub Pages is static. The RSVP (O.S.A.) form is not built yet — `Rsvp.tsx` shows a "coming soon" notice. When built it must post to an external form service (see `docs/roadmap.md`); don't add server code.
- Anchor offsets come from `scroll-padding-top` on `html` only — don't add `scroll-margin-top` to sections (they add up).
- Never commit secrets. Any form-service endpoint ids go in `.env` as `VITE_*` variables (they end up public in the bundle, so only use ids meant to be public).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` (lint → build → deploy to Pages).
One-time setup: GitHub repo → Settings → Pages → Source: **GitHub Actions**, Custom domain: `gabriellafredrik.se`, Enforce HTTPS.
DNS for `gabriellafredrik.se` (at the registrar): A records to GitHub Pages' IPs (185.199.108–111.153), AAAA records (2606:50c0:8000–8003::153), and `www` CNAME → `jebriella.github.io`.
