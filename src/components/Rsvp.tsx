import flowers from '../assets/flowers/soft-3.webp'
import { rsvp } from '../content/site.ts'
import { SectionHeading } from './SectionHeading.tsx'
import styles from './Rsvp.module.css'

/** "O.S.A." — the reply form is not built yet, so this shows a notice. */
export function Rsvp() {
  return (
    <section id="osa" className={styles.rsvp}>
      <img src={flowers} alt="" className={styles.flowers} loading="lazy" />
      <div className={styles.inner}>
        <div className={styles.panel}>
          <SectionHeading eyebrow={`Senast ${rsvp.deadlineLong}`} title="O.S.A." align="start" />
          <div className={styles.notice}>
            <p className={styles.noticeTitle}>{rsvp.comingSoonTitle}</p>
            <p className={styles.noticeText}>{rsvp.comingSoonText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
