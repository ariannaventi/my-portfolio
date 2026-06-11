'use client'

const floatKeyframes = '@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}'
const mobileStyle = `
  @media(max-width:768px){
    .hero-inner{flex-direction:column !important;gap:var(--space-10) !important;}
    .hero-photo{width:220px !important;height:220px !important;align-self:center;}
  }
`

export default function Hero() {
  return (
    <>
      <style>{floatKeyframes}</style>
      <style>{mobileStyle}</style>
      <section id="home" style={{
        minHeight:'100dvh', display:'flex', flexDirection:'column',
        justifyContent:'center', padding:'0 var(--space-8)', paddingTop:80,
        maxWidth:1100, margin:'0 auto', width:'100%', position:'relative',
      }}>
        <div className="hero-inner" style={{
          display:'flex', flexDirection:'row',
          alignItems:'center', justifyContent:'space-between',
          gap:'var(--space-16)',
        }}>

          {/* LEFT — text */}
          <div style={{flex:1, minWidth:0}}>
            <p style={{
              display:'inline-flex', alignItems:'center', gap:'var(--space-3)',
              fontSize:'var(--text-xs)', textTransform:'uppercase', letterSpacing:'.15em',
              color:'var(--accent)', marginBottom:'var(--space-6)',
            }}>
              <span style={{display:'block',width:24,height:1,background:'var(--accent)'}}/>
              Frontend Developer &amp; UI/UX Designer
            </p>
            <h1 style={{
              fontFamily:'var(--font-display)', fontSize:'var(--text-hero)',
              fontWeight:300, fontStyle:'italic', lineHeight:.96,
              letterSpacing:'-.02em', color:'var(--text)', marginBottom:'var(--space-8)',
            }}>
              Arianna Andrei<br />
              <span style={{color:'var(--accent)'}}>Rufila</span>
            </h1>
            <p style={{
              fontSize:'var(--text-lg)', color:'var(--muted)', maxWidth:'50ch',
              fontWeight:300, lineHeight:1.6, marginBottom:'var(--space-10)',
            }}>
              I bridge design and code using React, Next.js, and TypeScript to craft clean,
              user-focused web experiences — from Cebu, with care.
            </p>
            <div style={{display:'flex', alignItems:'center', gap:'var(--space-4)', flexWrap:'wrap'}}>
              <a href="#projects" style={{
                padding:'var(--space-3) var(--space-6)', borderRadius:'var(--radius-full)',
                fontSize:'var(--text-sm)', background:'var(--accent)', color:'var(--inv)',
                transition:'background 160ms var(--ease-out)',
              }}
              onMouseEnter={e=>(e.currentTarget.style.background='var(--accent-hover)')}
              onMouseLeave={e=>(e.currentTarget.style.background='var(--accent)')}
              >View projects</a>
              <a href="#contact" style={{
                padding:'var(--space-3) var(--space-6)', borderRadius:'var(--radius-full)',
                fontSize:'var(--text-sm)', border:'1px solid color-mix(in srgb, var(--text) 18%, transparent)',
                color:'var(--muted)', transition:'color 160ms var(--ease-out), border-color 160ms var(--ease-out)',
              }}
              onMouseEnter={e=>{e.currentTarget.style.color='var(--text)';e.currentTarget.style.borderColor='color-mix(in srgb,var(--text) 35%,transparent)'}}
              onMouseLeave={e=>{e.currentTarget.style.color='var(--muted)';e.currentTarget.style.borderColor='color-mix(in srgb,var(--text) 18%,transparent)'}}
              >Get in touch</a>
            </div>
          </div>

          {/* RIGHT — photo */}
          <div style={{flexShrink:0}}>
            <img
              className="hero-photo"
              src="/profile.png"
              alt="Arianna Andrei Rufila"
              style={{
                width:340, height:340,
                borderRadius:'2px',
                objectFit:'cover',
                objectPosition:'top',
                filter:'grayscale(18%)',
                boxShadow:'0 0 0 1px color-mix(in srgb,var(--accent) 20%,transparent), 0 24px 64px rgba(0,0,0,0.35)',
              }}
            />
          </div>

        </div>

        <div aria-hidden="true" style={{
          position:'absolute', bottom:'var(--space-8)', left:'var(--space-8)',
          display:'flex', alignItems:'center', gap:'var(--space-2)',
          fontSize:'var(--text-xs)', color:'var(--faint)',
          textTransform:'uppercase', letterSpacing:'.12em',
          animation:'float 2.4s ease-in-out infinite',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          Scroll
        </div>
      </section>
    </>
  )
}
