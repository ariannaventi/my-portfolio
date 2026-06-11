'use client'

export default function Footer() {
  return (
    <footer style={{
      borderTop:'1px solid var(--border)',
      padding:'var(--space-6) var(--space-8)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      fontSize:'var(--text-xs)', color:'var(--faint)',
      textTransform:'uppercase', letterSpacing:'.08em',
    }}>
      <span style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontSize:'.9rem',textTransform:'none',letterSpacing:'.01em'}}>ari</span>
      <span>© 2026 · Cebu City, PH</span>
    </footer>
  )
}
