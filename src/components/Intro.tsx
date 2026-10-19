import { intro } from '../content/site.ts'
import styles from './Intro.module.css'

/** Welcome text band below the hero. */
export function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.inner}>
        <p className={styles.text}>{intro.text}</p>
        <div className={`eyebrow ${styles.signoff}`}>{intro.signoff}</div>
      </div>
    </section>
  )
}
