// Sends O.S.A. answers to the Google Apps Script web app bound to the RSVP
// spreadsheet (see docs/rsvp-setup.md and scripts/rsvp-apps-script.gs).

export const rsvpEndpoint: string | undefined = import.meta.env.VITE_RSVP_ENDPOINT || undefined

export type YesNo = 'ja' | 'nej' | ''

export type RsvpAnswer = {
  firstName: string
  lastName: string
  attending: YesNo
  email: string
  phone: string
  room: YesNo
  roomShare: string
  diet: string
  other: string
  /** Honeypot — hidden from people, bots tend to fill it in. */
  website: string
}

export const emptyAnswer: RsvpAnswer = {
  firstName: '',
  lastName: '',
  attending: '',
  email: '',
  phone: '',
  room: '',
  roomShare: '',
  diet: '',
  other: '',
  website: '',
}

/**
 * Apps Script answers with a redirect that lacks CORS headers, so the request
 * is sent as a "simple" form POST in no-cors mode. The response is opaque:
 * only network failures can be detected.
 */
export async function submitRsvp(answer: RsvpAnswer): Promise<void> {
  if (!rsvpEndpoint) throw new Error('VITE_RSVP_ENDPOINT is not set')
  await fetch(rsvpEndpoint, {
    method: 'POST',
    mode: 'no-cors',
    body: new URLSearchParams(answer),
  })
}
