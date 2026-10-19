const DAY_MS = 24 * 60 * 60 * 1000

/** Whole days left until `date`, rounded up; 0 once it has passed. */
export function daysUntil(date: Date, now: Date = new Date()): number {
  return Math.max(0, Math.ceil((date.getTime() - now.getTime()) / DAY_MS))
}
