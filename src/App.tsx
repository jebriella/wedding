import { useCallback, useState } from 'react'
import { Faq } from './components/Faq.tsx'
import { Footer } from './components/Footer.tsx'
import { Hero } from './components/Hero.tsx'
import { Intro } from './components/Intro.tsx'
import { MenuOverlay } from './components/MenuOverlay.tsx'
import { Nav } from './components/Nav.tsx'
import { Rsvp } from './components/Rsvp.tsx'
import { Schedule } from './components/Schedule.tsx'
import { StickyRsvp } from './components/StickyRsvp.tsx'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />

      <main>
        <Hero />
        <Intro />
        <Schedule />
        <Faq />
        <Rsvp />
      </main>

      <Footer />
      {!menuOpen && <StickyRsvp />}
    </>
  )
}

export default App
