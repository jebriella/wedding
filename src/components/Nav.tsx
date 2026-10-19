import { sections } from '../content/site.ts'
import { Monogram } from './Monogram.tsx'
import styles from './Nav.module.css'

type NavProps = {
  onOpenMenu: () => void
}

/** Sticky top bar: "Meny" button on mobile, inline links from 900px. */
export function Nav({ onOpenMenu }: NavProps) {
  return (
    <nav className={styles.nav} aria-label="Huvudmeny">
      <div className={styles.inner}>
        <a href="#hem" className={styles.monogram} aria-label="Till början">
          <Monogram />
        </a>

        <ul className={styles.links}>
          {sections
            .filter((s) => s.short)
            .map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={s.id === 'osa' ? styles.highlight : undefined}>
                  {s.short}
                </a>
              </li>
            ))}
        </ul>

        <button
          type="button"
          className={styles.menuButton}
          onClick={onOpenMenu}
          aria-haspopup="dialog"
        >
          Meny
          <span className={styles.burger} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>
    </nav>
  )
}
