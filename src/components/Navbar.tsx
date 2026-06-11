'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const sunIcon = (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  )
  const moonIcon = (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )

  const navLinks = [
    { label: 'projects', href: '#projects' },
    { label: 'about',    href: '#about'    },
    { label: 'contact',  href: '#contact'  },
  ]

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      padding:'var(--space-5) var(--space-8)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background:'color-mix(in srgb, var(--bg) 85%, transparent)',
      backdropFilter:'blur(18px)',
      borderBottom:'1px solid color-mix(in srgb, var(--text) 6%, transparent)',
    }}>
      <a href="#home" style={{
        fontFamily:'var(--font-display)', fontSize:'1.1rem', fontStyle:'italic',
        letterSpacing:'.01em', color:'var(--accent)'
      }}>ari</a>
      <div style={{display:'flex', alignItems:'center', gap:'var(--space-6)'}}>
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} style={{
            fontSize:'var(--text-xs)', textTransform:'uppercase' as const,
            letterSpacing:'.12em', color:'var(--muted)',
            transition:'color 160ms var(--ease-out)',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >{label}</a>
        ))}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{
            width:32, height:32, display:'flex', alignItems:'center', justifyContent:'center',
            color:'var(--muted)', borderRadius:'var(--radius-full)',
            transition:'color 160ms var(--ease-out)',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          {theme === 'dark' ? sunIcon : moonIcon}
        </button>
      </div>
    </nav>
  )
}