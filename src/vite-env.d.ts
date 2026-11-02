/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Apps Script web app URL that stores O.S.A. answers. */
  readonly VITE_RSVP_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
