import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { NAV_LINKS } from '../../data/navigation'

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="7" fill="var(--primary)" />
            <rect x="5" y="7" width="18" height="11" rx="2" fill="var(--primary-light)" />
            <rect x="3" y="19" width="22" height="2" rx="1" fill="var(--primary)" />
          </svg>
          <span>AuraBook</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#newsletter" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Mua ngay
          </a>
        </nav>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeBtn} aria-label="Đổi giao diện">
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>
          <button className={styles.hamburger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
