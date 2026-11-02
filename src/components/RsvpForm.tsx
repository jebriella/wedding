import { useState, type FormEvent } from 'react'
import { rsvpForm as t } from '../content/site.ts'
import { emptyAnswer, rsvpEndpoint, submitRsvp, type RsvpAnswer, type YesNo } from '../lib/rsvp.ts'
import styles from './RsvpForm.module.css'

type Status = 'idle' | 'sending' | 'sent'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** The O.S.A. form. Answering "Nej" hides everything but the names and "Något annat?". */
export function RsvpForm() {
  const [answer, setAnswer] = useState<RsvpAnswer>(emptyAnswer)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const declined = answer.attending === 'nej'
  const set = (field: keyof RsvpAnswer) => (value: string) =>
    setAnswer((prev) => ({ ...prev, [field]: value }))

  const validate = (): string => {
    const missing =
      !answer.firstName.trim() ||
      !answer.lastName.trim() ||
      !answer.attending ||
      (!declined && (!answer.email.trim() || !answer.room))
    if (missing) return t.errorRequired
    if (!declined && !emailPattern.test(answer.email.trim())) return t.errorEmail
    return ''
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const problem = validate()
    setError(problem)
    if (problem) return

    // Fields hidden by "Nej" are sent empty.
    const payload: RsvpAnswer = declined
      ? {
          ...emptyAnswer,
          firstName: answer.firstName,
          lastName: answer.lastName,
          attending: 'nej',
          other: answer.other,
          website: answer.website,
        }
      : answer

    setStatus('sending')
    try {
      await submitRsvp(payload)
      setStatus('sent')
    } catch {
      setStatus('idle')
      setError(t.errorSend)
    }
  }

  const reset = () => {
    setAnswer(emptyAnswer)
    setError('')
    setStatus('idle')
  }

  if (status === 'sent') {
    return (
      <div className={styles.thanks} role="status">
        <p className={styles.thanksTitle}>{declined ? t.thanksNoTitle : t.thanksYesTitle}</p>
        <p className={styles.thanksText}>{declined ? t.thanksNoText : t.thanksYesText}</p>
        <button type="button" className={styles.again} onClick={reset}>
          {t.again}
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <TextField
          label={t.firstName}
          value={answer.firstName}
          onChange={set('firstName')}
          autoComplete="given-name"
          required
        />
        <TextField
          label={t.lastName}
          value={answer.lastName}
          onChange={set('lastName')}
          autoComplete="family-name"
          required
        />
      </div>

      <YesNoField
        name="attending"
        label={t.attending}
        value={answer.attending}
        onChange={set('attending')}
      />

      {!declined && (
        <>
          <TextField
            label={t.email}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            value={answer.email}
            onChange={set('email')}
            required
          />
          <TextField
            label={t.phone}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={answer.phone}
            onChange={set('phone')}
          />
          <YesNoField
            name="room"
            label={t.room}
            hint={t.roomNote}
            value={answer.room}
            onChange={set('room')}
          />
          <TextField
            label={t.roomShare}
            placeholder={t.roomSharePlaceholder}
            value={answer.roomShare}
            onChange={set('roomShare')}
          />
          <TextField
            label={t.diet}
            placeholder={t.dietPlaceholder}
            value={answer.diet}
            onChange={set('diet')}
          />
        </>
      )}

      <TextField
        label={t.other}
        placeholder={t.otherPlaceholder}
        value={answer.other}
        onChange={set('other')}
        multiline
      />

      {/* Honeypot: invisible to people, left empty by them. */}
      <input
        className={styles.honeypot}
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={answer.website}
        onChange={(e) => set('website')(e.target.value)}
      />

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={!rsvpEndpoint || status === 'sending'}
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>
      {!rsvpEndpoint && <p className={styles.notOpen}>{t.notOpen}</p>}
    </form>
  )
}

type TextFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  multiline?: boolean
  type?: 'text' | 'email' | 'tel'
  inputMode?: 'text' | 'email' | 'tel'
  autoComplete?: string
  placeholder?: string
}

function TextField({ label, value, onChange, required, multiline, ...input }: TextFieldProps) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        {required && <Required />}
      </span>
      {multiline ? (
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          rows={3}
          placeholder={input.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={styles.input}
          {...input}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  )
}

type YesNoFieldProps = {
  name: string
  label: string
  hint?: string
  value: YesNo
  onChange: (value: YesNo) => void
}

/** Required Ja/Nej question, as two radio buttons styled as a pill toggle. */
function YesNoField({ name, label, hint, value, onChange }: YesNoFieldProps) {
  const options: { value: YesNo; label: string }[] = [
    { value: 'ja', label: t.yes },
    { value: 'nej', label: t.no },
  ]
  return (
    <fieldset className={styles.field}>
      <legend className={styles.label}>
        {label}
        <Required />
        {hint && <span className={styles.hint}>({hint})</span>}
      </legend>
      <div className={styles.toggle}>
        {options.map((o) => (
          <label key={o.value} className={styles.option}>
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              required
            />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function Required() {
  return (
    <span className={styles.required} aria-hidden="true">
      {' '}
      *
    </span>
  )
}
