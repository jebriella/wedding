import { couple } from '../content/site.ts'

/** "G & F" with the ampersand in the accent color. */
export function Monogram({ className }: { className?: string }) {
  return (
    <span className={className}>
      {couple.first[0]} <span className="accent">&amp;</span> {couple.second[0]}
    </span>
  )
}
