# O.S.A. → Google Sheets setup

The O.S.A. form posts each answer to a small Google Apps Script web app, which appends a row to a spreadsheet in your Google Drive. Until the web app URL is configured, the form is shown but its "Skicka svar" button is disabled.

## 1. Create the spreadsheet and script

1. In Google Drive, create a new Google Sheet, e.g. "Bröllop – O.S.A.".
2. In the sheet: **Extensions → Apps Script**.
3. Replace the contents of `Code.gs` with [`scripts/rsvp-apps-script.gs`](../scripts/rsvp-apps-script.gs) and save.

The script creates a tab called **Svar** with a header row on the first answer.

## 2. Deploy as a web app

1. In the Apps Script editor: **Deploy → New deployment**.
2. Type: **Web app**.
3. Execute as: **Me**. Who has access: **Anyone**.
4. Click **Deploy**, approve the permission prompt (Google warns that the app is unverified — choose _Advanced → Go to … (unsafe)_; it is your own script).
5. Copy the **Web app URL** (`https://script.google.com/macros/s/…/exec`).

If you change the script later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.

## 3. Configure the site

- **Locally:** create `.env` in the project root (it is git-ignored):

  ```
  VITE_RSVP_ENDPOINT=https://script.google.com/macros/s/…/exec
  ```

- **GitHub Pages:** repo → Settings → Secrets and variables → Actions → **Variables** tab → New repository variable `VITE_RSVP_ENDPOINT` with the same URL. Then re-run the deploy (push to `main` or run the workflow manually).

The URL ends up in the public JS bundle — that is expected; it only lets people append answers.

## 4. Test

Submit an answer on the site and check that a row appears in the **Svar** tab. Delete test rows before the invitations go out.

## Notes

- The browser can't read the Apps Script response (no CORS), so the form only detects network errors. If answers don't appear, check **Executions** in the Apps Script editor.
- A hidden "website" field acts as a spam honeypot; answers with it filled in are dropped.
- Each submission is a new row. If a guest changes their answer, the latest row wins.
