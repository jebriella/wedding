# Roadmap

## 1. Port the design

Mobile: `design/Wedding Website v2.dc.html` (framed in `design/Mobile Preview.dc.html`). Desktop (≥900px): `design/Wedding Website.dc.html`.

- [x] Navigation — sticky bar with "G & F" monogram and a full-screen "Meny" overlay with numbered links
- [x] Hem — hero with names, date and countdown to 2027-08-14 14:00
- [x] Dagen — schedule timeline (13.00 Incheckning → 00.30 Nattmat)
- ~~Plats & resa~~ and ~~Boende~~ — removed from the site
- [x] Frågor — FAQ accordion
- [x] O.S.A. section with "coming soon" notice
- [ ] O.S.A. — RSVP form (yes/no, name, email, diet, note) with validation and thank-you state
- [x] Sticky "O.S.A. senast 1 juni" button at the bottom
- [x] Floral images → WebP in `src/assets/flowers/` (`npm run images`)

## 2. RSVP

GitHub Pages can't run a server, so the form needs an external service. Options:

- **Formspree** (or similar: Basin, Getform) — simplest; POST JSON to an endpoint, answers arrive by email / dashboard. Free tier has a monthly limit.
- **Google Sheets via Apps Script** — free, answers land in a spreadsheet; a small Apps Script web app receives the POST.
- **Supabase / Firebase** — a real database, more setup; worth it only if guests need to edit their answer later.

Store the endpoint in `.env` as `VITE_RSVP_ENDPOINT`.

## 3. Later

- [ ] Real toastmaster phone number and email in `src/content/site.ts` (design placeholders now)

- [ ] Custom domain (then set `base: '/'` in `vite.config.ts` and add `public/CNAME`)
- [ ] Social share image / Open Graph tags
- [ ] Accessibility pass (contrast, focus states, form labels)
- [ ] Optional: photo gallery after the wedding
