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
}

/** Labels and messages for the O.S.A. form. */
export const rsvpForm = {
  firstName: 'Förnamn',
  lastName: 'Efternamn',
  attending: 'Jag kommer',
  email: 'Mailadress',
  emailPlaceholder: 'namn@exempel.se',
  phone: 'Telefonnummer',
  room: 'Önskar du boka ett rum?',
  roomNote: 'Ett dubbelrum kostar 2500 kr',
  roomShare: 'Om ja och du önskar dela rum med någon, specificera det nedan',
  roomSharePlaceholder: 'Namn på den du vill dela rum med',
  diet: 'Allergier/Matpreferenser',
  dietPlaceholder: 'T.ex. vegetariskt',
  other: 'Något annat?',
  otherPlaceholder: 'Valfritt',
  yes: 'Ja',
  no: 'Nej',
  submit: 'Skicka svar',
  // Shown under the disabled button while VITE_RSVP_ENDPOINT is not set.
  notOpen: 'Svarsformuläret öppnar inom kort.',
  sending: 'Skickar…',
  errorRequired: 'Fyll i alla obligatoriska fält (*).',
  errorEmail: 'Kontrollera mailadressen.',
  errorSend: 'Något gick fel när svaret skulle skickas. Försök igen om en stund.',
  thanksYesTitle: 'Vad roligt att du kommer!',
  thanksYesText: 'Tack för ditt svar – vi ser fram emot att fira tillsammans med dig.',
  thanksNoTitle: 'Tack för ditt svar',
  thanksNoText: 'Vad tråkigt att du inte kan komma. Vi kommer att tänka på dig!',
  again: 'Skicka ett till svar',
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
    a: 'Kavaj. Gärna färgglatt och somrigt, klä dig i det du känner dig fin i!',
  },
  {
    q: 'Får man ta med barn?',
    a: 'Vi älskar barn men bröllopet är för vuxna gäster.',
  },
  {
    q: 'Hur tar man sig till och från vigseln?',
    a: 'Man behöver åka bil mellan Ösmo kyrka och Nynäs Havsbad. Om ni själva inte har bil, hör av er i så fall så löser vi så att ni får samåka med någon.',
  },
  {
    q: 'Finns det en önskelista?',
    // TODO: real Swish name and number
    a: 'Vi blir bara glada att ni vill delta på vårt bröllop, om ni vill ge en present så tror vi att ni själva kan komma på en passande present eller om ni vill bidra till vår bröllopsresa. Swisha i så fall till XXXX, på 07xxxxxx.',
  },
  {
    q: 'Hur bokar jag boende?',
    a: 'När du fyller i O.S.A.-formuläret nedan så får du en fråga om du vill sova kvar. Vi meddelar sedan Nynäs Havsbad vilka som vill bo kvar så betalar du sedan på plats.',
  },
  {
    q: 'Vem meddelar jag att jag vill hålla tal?',
    // TODO: real contact
    a: 'Hör av dig till......',
  },
]
