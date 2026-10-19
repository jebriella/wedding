import bouquet from '../assets/flowers/soft-1.webp'
import { couple, event, rsvp, weddingDate } from '../content/site.ts'
import { daysUntil } from '../lib/countdown.ts'
import styles from './Hero.module.css'

export function Hero() {
  const days = daysUntil(weddingDate)

  return (
    <header id="hem" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <img src={bouquet} alt="Akvarellbukett" className={styles.image} />
        </div>

        <div className={styles.text}>
          <div className={`eyebrow ${styles.eyebrow}`}>Vi gifter oss</div>
          <h1 className={styles.title}>
            {couple.first}
            <br />
            <span className="accent">&amp;</span> {couple.second}
          </h1>
          <div className={styles.rule} />
          <p className={styles.date}>
            {event.dateLong}
            <br />
            {event.venue}
          </p>

          <div className={styles.actions}>
            <a href="#osa" className={styles.cta}>
              Svara senast {rsvp.deadline}
            </a>
            {days > 0 && (
              <div className={styles.countdown}>
                <span className={styles.days}>{days}</span>
                <span className={styles.daysLabel}>dagar kvar</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
