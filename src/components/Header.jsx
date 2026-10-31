import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import { contact } from '../data/profile'

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#work'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [atTop, setAtTop] = useState(true)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const sections = navLinks
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean)

    let updateFrame = 0
    const updateScrollState = () => {
      cancelAnimationFrame(updateFrame)
      updateFrame = requestAnimationFrame(() => {
        const activationLine = 85 + window.innerHeight * 0.28
        let activeSection = ''

        for (const section of sections) {
          const bounds = section.getBoundingClientRect()
          if (bounds.top <= activationLine && bounds.bottom > activationLine) {
            activeSection = `#${section.id}`
            break
          }
          if (bounds.bottom <= activationLine) activeSection = `#${section.id}`
        }

        const isAtBottom =
          window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
        if (isAtBottom && sections.length > 0) {
          activeSection = `#${sections[sections.length - 1].id}`
        }

        setAtTop(activeSection === '')
        setActiveSection(activeSection)
      })
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      cancelAnimationFrame(updateFrame)
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  return (
    <header
      className="sticky top-0 z-30 px-5 pt-4"
      data-at-top={atTop}
    >
      <div className="mx-auto flex min-h-[68px] w-full max-w-[1200px] items-center justify-between gap-5 rounded-full border border-white/10 bg-[#15141c]/35 px-5 shadow-lg backdrop-blur-xl">
        <div className="flex shrink-0 flex-col items-start gap-0.5">
          <a
            className="font-display text-[15px] font-bold tracking-[-0.04em] text-ink no-underline sm:text-base"
            href="#home"
          >
            Abdullah<span className="text-purple">.</span>
          </a>
          <span className="inline-flex items-center gap-1.5 font-mono text-[8px] font-medium uppercase tracking-[0.12em] text-emerald-200">
            <span aria-hidden="true" className="status-dot size-[6px] rounded-full bg-emerald-300" />
            <span className="status-text">Available</span>
          </span>
        </div>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a
              className="nav-section-link font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:text-purple"
              aria-current={activeSection === href ? 'location' : undefined}
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          className="hidden items-center gap-2 rounded-full border border-white/20 bg-purple px-4 py-3 text-xs font-semibold text-[#19141d] no-underline shadow-none transition-colors hover:border-purple hover:bg-white/[0.07] hover:text-ink sm:inline-flex"
          href="#contact"
        >
          Get in touch <FiArrowUpRight className="text-current" />
        </a>

        <button
          className="btn btn-circle btn-ghost btn-sm text-ink lg:hidden"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="absolute right-5 top-[calc(100%+0.75rem)] grid w-64 max-w-[calc(100vw-2.5rem)] gap-1 rounded-3xl border border-white/10 bg-[#15141c]/60 p-3 shadow-xl backdrop-blur-xl lg:hidden"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map(([label, href]) => (
            <a
              className="nav-section-link flex items-center justify-between rounded-xl px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted no-underline transition-colors hover:bg-white/[0.04] hover:text-purple"
              aria-current={activeSection === href ? 'location' : undefined}
              href={href}
              key={label}
              onClick={closeMenu}
            >
              {label}
              <FiArrowUpRight className="text-purple" />
            </a>
          ))}
          <a
            className="mt-1 flex items-center justify-between rounded-xl border-t border-white/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted no-underline hover:text-purple"
            href={`mailto:${contact.email}`}
            onClick={closeMenu}
          >
            Email me <FiArrowUpRight className="text-purple" />
          </a>
        </nav>
      )}
    </header>
  )
}
