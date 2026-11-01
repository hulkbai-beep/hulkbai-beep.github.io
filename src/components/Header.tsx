import { useState } from 'react'
import { navigation, profile } from '../data/portfolio'
import { ExternalIcon } from './Icons'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="shell flex min-h-22 flex-wrap items-center justify-between gap-4">
        <a
          href="#top"
          className="brand"
          aria-label={`${profile.name}, home`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">
            tb<span>.</span>
          </span>
          <span className="brand-name">
            Tianyang Bai<span>AI ENGINEER</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
          <span aria-hidden="true">{menuOpen ? '−' : '+'}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`navigation ${menuOpen ? 'is-open' : ''}`}
        >
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-github" href={profile.github}>
            GitHub
            <ExternalIcon className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
