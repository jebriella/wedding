import { event } from '../content/site.ts'
import { Monogram } from './Monogram.tsx'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Monogram className={styles.monogram} />
        <div className={styles.date}>{event.dateNumeric}</div>
      </div>
    </footer>
  )
}
