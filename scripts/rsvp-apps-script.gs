// Google Apps Script that stores O.S.A. answers in the spreadsheet it is bound to.
// Paste into the sheet's Extensions → Apps Script editor and deploy as a web app
// (see docs/rsvp-setup.md). Not part of the site build.

const SHEET_NAME = 'Svar'

// [form field, column header]. The order here is the column order in the sheet.
const COLUMNS = [
  ['firstName', 'Förnamn'],
  ['lastName', 'Efternamn'],
  ['attending', 'Kommer'],
  ['email', 'Mailadress'],
  ['phone', 'Telefonnummer'],
  ['room', 'Boka rum'],
  ['roomShare', 'Dela rum med'],
  ['diet', 'Allergier/Matpreferenser'],
  ['other', 'Något annat'],
]

function doPost(e) {
  const params = (e && e.parameter) || {}

  // Honeypot filled in → probably a bot. Pretend everything went fine.
  if (params.website) return ok()

  const lock = LockService.getScriptLock()
  lock.waitLock(10000)
  try {
    const sheet = getSheet()
    // Leading ' keeps Sheets from turning e.g. phone numbers or "=..." into formulas/numbers.
    const values = COLUMNS.map(([field]) => clean(params[field]))
    sheet.appendRow([new Date(), ...values])
  } finally {
    lock.releaseLock()
  }
  return ok()
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = book.getSheetByName(SHEET_NAME)
  if (!sheet) sheet = book.insertSheet(SHEET_NAME)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Tidpunkt', ...COLUMNS.map(([, header]) => header)])
    sheet.setFrozenRows(1)
    sheet.getRange(1, 1, 1, COLUMNS.length + 1).setFontWeight('bold')
  }
  return sheet
}

function clean(value) {
  const text = String(value || '').trim().slice(0, 2000)
  return text ? "'" + text : ''
}

function ok() {
  return ContentService.createTextOutput('ok')
}
