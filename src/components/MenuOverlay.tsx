import { useEffect, useRef } from 'react'
import flowers from '../assets/flowers/soft-4.webp'
import { event, sections } from '../content/site.ts'
import { Monogram } from './Monogram.tsx'
import styles from './MenuOverlay.module.css'

type MenuOverlayProps = {
  open: boolean
  onClose: () => void
}

/** Full-screen mobile menu with numbered section links. */
export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.classList.add('no-scroll')
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Meny">
      <img src={flowers} alt="" className={styles.flowers} />
      <div className={styles.header}>
        <Monogram className={styles.monogram} />
        <button ref={closeRef} type="button" className={styles.close} onClick={onClose}>
          Stäng ✕
        </button>
      </div>
      <div className={styles.body}>
        <ul className={styles.links}>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={onClose}>
                <span className={styles.number}>{s.n}</span>
                <span className={styles.label}>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.meta}>
          {event.dateShort}
          <br />
          {event.venue}
        </p>
      </div>
    </div>
  )
}
