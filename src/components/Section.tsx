import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  id?: string
  /** Light blue band with top and bottom borders. */
  band?: boolean
  /** Max content width from 900px. Mobile is always 560px. */
  width?: 'medium' | 'wide'
  className?: string
  children: ReactNode
}

/** Page section with the standard vertical rhythm and content width. */
export function Section({ id, band, width = 'wide', className, children }: SectionProps) {
  const sectionClass = [band && styles.band, className].filter(Boolean).join(' ') || undefined
  const innerClass = `${styles.inner} ${styles[width]}`
  return (
    <section id={id} className={sectionClass}>
      <div className={innerClass}>{children}</div>
    </section>
  )
}
