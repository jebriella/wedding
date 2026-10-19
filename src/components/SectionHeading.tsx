import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  /** `start` keeps it centered on mobile but left-aligned from 900px. */
  align?: 'center' | 'start'
}

/** Small label, italic serif heading and a short rule. */
export function SectionHeading({ eyebrow, title, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${align === 'start' ? styles.start : ''}`}>
      <div className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.rule} />
    </div>
  )
}
