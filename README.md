# Gabriella & Fredrik — bröllop

Website for our wedding on 14 August 2027 in Nynäshamn.
Built with React, TypeScript and Vite, hosted on GitHub Pages.

Live site: https://gabriellafredrik.se/

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5173/.

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

### Custom domain (gabriellafredrik.se)

1. At the domain registrar, add these DNS records (and remove any parking-page records on `@` and `www`):

   | Type  | Name  | Value                                                                                                        |
   | ----- | ----- | ------------------------------------------------------------------------------------------------------------ |
   | A     | `@`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (one record each)                 |
   | AAAA  | `@`   | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` (one record each) |
   | CNAME | `www` | `jebriella.github.io`                                                                                        |

2. In the repo: **Settings → Pages → Custom domain** → `gabriellafredrik.se` → **Save**.
3. When the DNS check passes, tick **Enforce HTTPS**.
4. Recommended: verify the domain under your GitHub account **Settings → Pages → Add a domain** (adds a TXT record), so no one else can claim it on GitHub.

## Project layout

- `design/` — design mockups and images (reference only)
- `src/` — the site source; texts live in `src/content/`
- `public/` — static files served as-is
- `docs/roadmap.md` — what's next

See [CLAUDE.md](CLAUDE.md) for conventions and details.
