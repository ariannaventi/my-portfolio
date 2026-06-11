'use client'

export default function About() {
  const skillGroups = [
    {label:'Frontend', items:['React / Next.js','TypeScript','Tailwind CSS','UI/UX Design']},
    {label:'Backend',  items:['Node.js','Prisma ORM','PostgreSQL','REST APIs']},
    {label:'Languages',items:['TypeScript / JS','Python','C++ / Java','SQL']},
    {label:'Tools',    items:['QGIS / GIS','Figma / Canva','Git / GitHub','Vercel']},
  ]
  const mobileStyle = '@media(max-width:700px){.about-grid{grid-template-columns:1fr !important;gap:var(--space-10) !important;}}'
  return (
    <>
      <style>{mobileStyle}</style>
      <section id="about" style={{background:'var(--surface)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'clamp(var(--space-16),7vw,var(--space-20)) var(--space-8)'}}>
          <div className="about-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-16)',alignItems:'start'}}>
            <div className="reveal">
              <p style={{fontSize:'var(--text-xs)',textTransform:'uppercase',letterSpacing:'.15em',color:'var(--faint)',marginBottom:'var(--space-8)',display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
                About<span style={{flex:1,height:1,maxWidth:48,background:'var(--border)'}}/>
              </p>
              <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-xl)',fontWeight:300,letterSpacing:'-.02em',color:'var(--text)',marginBottom:'var(--space-10)',lineHeight:1.1}}>
                Designer who <em style={{fontStyle:'italic',color:'var(--accent)'}}>codes.</em><br/>Coder who designs.
              </h2>
              <p style={{fontSize:'var(--text-base)',color:'var(--muted)',lineHeight:1.8,maxWidth:'50ch'}}>
                I&apos;m a Computer Science student at the University of the Philippines Cebu. My background spans frontend development, UI/UX design, and game development — giving me a unique perspective on how users interact with digital products.
              </p>
              <p style={{fontSize:'var(--text-base)',color:'var(--muted)',lineHeight:1.8,maxWidth:'50ch',marginTop:'var(--space-5)'}}>
                When I&apos;m not coding, I&apos;m behind a camera with ACTUP — a cinema talents group — where my eye for composition directly informs my design decisions.
              </p>
              <p style={{fontSize:'var(--text-base)',color:'var(--accent)',fontWeight:500,marginTop:'var(--space-6)'}}>
                Currently seeking any dev internship opportunity.
              </p>
            </div>
            <div className="reveal">
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)'}}>
                {skillGroups.map((g,i)=>(
                  <div key={g.label} style={i>=2?{marginTop:'var(--space-8)'}:{}}>
                    <div style={{fontSize:'var(--text-xs)',textTransform:'uppercase',letterSpacing:'.12em',color:'var(--accent)',marginBottom:'var(--space-3)',fontWeight:500}}>{g.label}</div>
                    <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:4}}>
                      {g.items.map(item=><li key={item} style={{fontSize:'var(--text-sm)',color:'var(--muted)'}}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
