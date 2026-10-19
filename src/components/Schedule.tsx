import flowers from '../assets/flowers/soft-2.webp'
import { schedule } from '../content/site.ts'
import { Section } from './Section.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import styles from './Schedule.module.css'

/** "Dagen" — the day's program as a timeline. */
export function Schedule() {
  return (
    <Section id="dagen">
      <div className={styles.layout}>
        <div className={styles.media}>
          <img src={flowers} alt="Akvarellblommor" className={styles.image} loading="lazy" />
        </div>

        <div className={styles.content}>
          <SectionHeading eyebrow="Lördag 14 augusti" title="Dagen" align="start" />
          <ol className={styles.list}>
            {schedule.map((item) => (
              <li key={item.time} className={styles.item}>
                <time className={styles.time}>{item.time}</time>
                <div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
