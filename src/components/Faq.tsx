import { useState } from 'react'
import { faqs } from '../content/site.ts'
import { Section } from './Section.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import styles from './Faq.module.css'

/** "Frågor" — accordion, first question open by default. */
export function Faq() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <Section id="fragor" band width="medium">
      <SectionHeading eyebrow="Bra att veta" title="Frågor" />
      <ul className={styles.list}>
        {faqs.map((f, i) => {
          const isOpen = open.has(i)
          return (
            <li key={f.q} className={styles.item}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => toggle(i)}
              >
                <span className={styles.q}>{f.q}</span>
                <span className={styles.sign} aria-hidden="true">
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              <p id={`faq-${i}`} className={styles.answer} hidden={!isOpen}>
                {f.a}
              </p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
