# Gabriella & Fredrik — bröllop

Website for our wedding on 14 August 2027 in Nynäshamn.
Built with React, TypeScript and Vite, hosted on GitHub Pages.

Live site (once deployed): https://jebriella.github.io/wedding/

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5173/wedding/.

## Scripts

| Command             | What it does                           |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Start the local dev server             |
| `npm run build`     | Typecheck and build the site to `dist` |
| `npm run preview`   | Serve the built site locally           |
| `npm run typecheck` | Run the TypeScript compiler            |
| `npm run lint`      | Lint with oxlint                       |
| `npm run format`    | Format files with Prettier             |

## Deploying to GitHub Pages

1. Push the repo to GitHub (`jebriella/wedding`).
2. In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and deploys the site automatically (see `.github/workflows/deploy.yml`).

## Project layout

- `design/` — design mockups and images (reference only)
- `src/` — the site source; texts live in `src/content/`
- `public/` — static files served as-is
- `docs/roadmap.md` — what's next

See [CLAUDE.md](CLAUDE.md) for conventions and details.
