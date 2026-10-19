import { rsvp } from '../content/site.ts'
import styles from './StickyRsvp.module.css'

/** Fixed "O.S.A." button at the bottom of the screen on mobile. */
export function StickyRsvp() {
  return (
    <div className={styles.bar}>
      <a href="#osa" className={styles.button}>
        <span className={styles.label}>O.S.A.</span>
        <span className={styles.deadline}>
          senast {rsvp.deadline}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </span>
      </a>
    </div>
  )
}
