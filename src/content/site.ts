// Site-wide content. All guest-facing text is Swedish.
// Source: design/Wedding Website v2.dc.html (mobile copy).

export const couple = {
  first: 'Gabriella',
  second: 'Fredrik',
}

/** Ceremony start, local time (Europe/Stockholm). */
export const weddingDate = new Date('2027-08-14T14:00:00')

export const event = {
  dateLong: 'Lördag 14 augusti 2027',
  dateShort: '14 augusti 2027',
  dateNumeric: '14.08.2027',
  venue: 'Nynäs Havsbad',
  town: 'Nynäshamn',
}

export const rsvp = {
  deadline: '1 juni',
  deadlineLong: '1 juni 2027',
  // Shown until the reply form is built.
  comingSoonTitle: 'Snart kan ni svara här',
  comingSoonText:
    'Svarsformuläret öppnar inom kort. Svara gärna senast 1 juni 2027 – vi ser fram emot att höra från er.',
}

export const intro = {
  text: 'Vi vill fira tillsammans med er! Varmt välkomna på en sommardag vid havet – med vigsel, middag och fest!',
  signoff: 'Vi ses snart',
}

export type NavLink = {
  id: string
  n: string
  label: string
  /** Shorter label for the desktop nav bar. Omit to hide it there. */
  short?: string
}

/** Page sections in order. `id` is the anchor used in URLs (#dagen etc.). */
export const sections: NavLink[] = [
  { id: 'hem', n: '01', label: 'Välkommen' },
  { id: 'dagen', n: '02', label: 'Dagen', short: 'Dagen' },
  { id: 'fragor', n: '03', label: 'Frågor', short: 'Frågor' },
  { id: 'osa', n: '04', label: 'O.S.A.', short: 'O.S.A.' },
]

export type ScheduleItem = { time: string; title: string; text: string }

export const schedule: ScheduleItem[] = [
  { time: '13.00', title: 'Incheckning', text: 'Checka in på hotellet.' },
  {
    time: '14.00',
    title: 'Vigsel',
    text: 'Vigselakten i Ösmo kyrka. Ca 15 minuter bil från Nynäs Havsbad.',
  },
  {
    time: '15.30',
    title: 'Mingel vid havet',
    text: 'Bubbel, tilltugg, tårta och lekar vid Nynäs Havsbad.',
  },
  { time: '18.00', title: 'Middag', text: 'Middag i festsalen.' },
  { time: '22.00', title: 'Fest & dans', text: 'Första dansen följt av dansgolv för alla.' },
  { time: '00.30', title: 'Nattmat', text: 'Somna inte hungrig!' },
]

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: 'Vad är klädkoden?',
    a: 'Kavaj. Gärna färgglatt och somrigt, men klä dig i det du känner dig fin i!',
  },
  {
    q: 'Får man ta med barn?',
    a: 'Vi älskar barn, men bröllopet är för vuxna gäster.',
  },
]

export const contact = {
  text: 'Frågor? Kontakta vår toastmaster Johanna',
  // TODO: replace the design's placeholder phone number and email.
  phone: '+46700000000',
  email: 'toastmaster@exempel.se',
}
