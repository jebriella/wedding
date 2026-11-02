import flowers from '../assets/flowers/soft-3.webp'
import { rsvp } from '../content/site.ts'
import { RsvpForm } from './RsvpForm.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import styles from './Rsvp.module.css'

/** "O.S.A." — the reply form. */
export function Rsvp() {
  return (
    <section id="osa" className={styles.rsvp}>
      <img src={flowers} alt="" className={styles.flowers} loading="lazy" />
      <div className={styles.inner}>
        <div className={styles.panel}>
          <SectionHeading eyebrow={`Senast ${rsvp.deadlineLong}`} title="O.S.A." align="start" />
          <RsvpForm />
        </div>
      </div>
    </section>
  )
}
