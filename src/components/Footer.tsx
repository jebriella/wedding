import { contact, event } from '../content/site.ts'
import { Monogram } from './Monogram.tsx'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Monogram className={styles.monogram} />
        <div className={styles.date}>{event.dateNumeric}</div>
        <p className={styles.text}>{contact.text}</p>
        <div className={styles.actions}>
          <a href={`tel:${contact.phone}`} className="pill">
            Ring
          </a>
          <a href={`mailto:${contact.email}`} className="pill">
            Mejla
          </a>
        </div>
      </div>
    </footer>
  )
}
