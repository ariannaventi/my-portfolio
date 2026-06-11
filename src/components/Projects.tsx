'use client'
import { useState } from 'react'

const fadeInKeyframes = '@keyframes fadeInUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}'

const projects = [
  {
    num: '01', name: 'Bloom Hero', href: 'https://bloom-hero.vercel.app',
    badge: 'Academic Output',
    desc: 'Multi-vendor e-commerce marketplace for Carbon Market flower shops. Role-based navigation, vendor onboarding, cart UI, and pop-up schedule management. Built with a 5-person agile team.',
    type: 'Web App', tags: ['React','TypeScript','Agile'], preview: null, linked: true,
  },
  {
    num: '02', name: 'flowmark', href: null,
    badge: 'Academic Output',
    desc: 'Finance web app with account management, transaction tracking, and custom categories. Designed all UI/UX from scratch and integrated Prisma ORM.',
    type: 'Full-stack', tags: ['Next.js','Prisma'], preview: '/assets/flowmark.png', linked: false,
  },
  {
    num: '03', name: 'LockedIn', href: null,
    badge: 'Academic Output',
    desc: 'Minimalist Pomodoro timer with a custom TypeScript FSM managing session states. Animated landing, music selection, and a "Disable Pause" discipline mode.',
    type: 'Frontend', tags: ['TypeScript','FSM'], preview: '/assets/lockedin.png', linked: false,
  },
  {
    num: '04', name: 'Dash-It-Ryan', href: null,
    badge: 'Academic Output',
    desc: 'Programming-themed endless runner with parallax backgrounds and animated sprites. Contributed original sprite art and game concept for Data Structures course.',
    type: 'Game Dev', tags: ['Sprites','Game Design'], preview: '/assets/dashitryan.png', linked: false,
  },
  {
    num: '05', name: 'rx_digitizer', href: 'https://crowdsource.lol/project/rx_digitizer/',
    badge: 'Academic Output',
    desc: 'Crowdsourcing platform with 10 tasks designed to digitize medical prescriptions, published on PyBossa with custom task configuration.',
    type: 'Research', tags: ['PyBossa','Crowdsourcing'], preview: null, linked: true,
  },
  {
    num: '06', name: 'DA-shboard: PH Online Scam Analytics', href: 'https://da-shboard-psi.vercel.app/',
    badge: 'Academic Output',
    desc: 'Interactive data dashboard answering which online scam caused the greatest financial harm in the Philippines (2024-2025). Custom Financial Harm Index (FHI) combining PNP-ACG data, GASA PH 2025 survey stats, and CICC figures. Features a live FHI heatmap, demographic findings, recommendation engine, and ranked scam summary.',
    type: 'Data Analytics', tags: ['React','TanStack Table','Data Viz','Research'], preview: null, linked: true,
  },
]

function ProjectRow({ p }: { p: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{display:'grid',gridTemplateColumns:'80px 1fr',alignItems:'start',gap:'var(--space-6)',padding:'var(--space-6) 0',borderBottom:'1px solid var(--border)',position:'relative'}}
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
    >
      <div style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontSize:'1.75rem',color:hovered?'var(--accent)':'color-mix(in srgb,var(--accent) 22%,transparent)',transition:'color 160ms var(--ease-out)',lineHeight:1}}>
        {p.num}
      </div>
      <div style={{width:'100%',position:'relative'}}>
        <span style={{display:'block',width:'fit-content',fontSize:'.62rem',textTransform:'uppercase',letterSpacing:'.1em',color:'var(--accent)',border:'1px solid color-mix(in srgb,var(--accent) 35%,transparent)',background:'color-mix(in srgb,var(--accent) 8%,transparent)',padding:'.15rem .55rem',borderRadius:'var(--radius-full)',marginBottom:'var(--space-2)'}}>
          {p.badge}
        </span>
        {p.linked && p.href ? (
          <div style={{marginBottom:'var(--space-2)',lineHeight:1.2}}>
            <a href={p.href} target="_blank" rel="noopener noreferrer"
              style={{fontFamily:'var(--font-display)',fontSize:'var(--text-lg)',fontWeight:400,color:'var(--text)',borderBottom:'1px solid transparent',transition:'color .2s ease,border-color .2s ease'}}
              onMouseEnter={e=>{e.currentTarget.style.color='var(--accent)';e.currentTarget.style.borderBottomColor='var(--accent)'}}
              onMouseLeave={e=>{e.currentTarget.style.color='var(--text)';e.currentTarget.style.borderBottomColor='transparent'}}
            >{p.name}</a>
          </div>
        ) : (
          <div style={{marginBottom:'var(--space-2)',lineHeight:1.2,position:'relative',display:'inline-block'}}>
            <span style={{fontFamily:'var(--font-display)',fontSize:'var(--text-lg)',fontWeight:400,color:'var(--text)',opacity:.45,cursor:'default'}}>{p.name}</span>
            {p.preview && hovered && (
              <div style={{position:'absolute',left:0,bottom:'calc(100% + 10px)',zIndex:100,width:620,borderRadius:10,overflow:'hidden',boxShadow:'0 8px 32px rgba(0,0,0,0.45)',border:'1px solid var(--border)',background:'var(--surface)',animation:'fadeInUp 0.18s var(--ease-out)'}}>
                <img src={p.preview} alt={p.name + ' screenshot'} style={{width:'100%',height:'auto',display:'block'}} />
              </div>
            )}
          </div>
        )}
        <p style={{fontSize:'var(--text-sm)',color:'var(--muted)',maxWidth:'55ch',lineHeight:1.55}}>{p.desc}</p>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'var(--space-3)',marginTop:'var(--space-3)',flexWrap:'wrap'}}>
          <span style={{fontSize:'var(--text-xs)',textTransform:'uppercase',letterSpacing:'.1em',color:'var(--faint)',whiteSpace:'nowrap'}}>{p.type}</span>
          <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap'}}>
            {p.tags.map(t=>(
              <span key={t} style={{fontSize:'.68rem',padding:'.2rem .6rem',borderRadius:'var(--radius-full)',background:'color-mix(in srgb,var(--text) 7%,transparent)',color:'var(--muted)',border:'1px solid color-mix(in srgb,var(--text) 8%,transparent)',letterSpacing:'.02em'}}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <style>{fadeInKeyframes}</style>
      <section id="projects" style={{padding:'clamp(var(--space-16),7vw,var(--space-20)) var(--space-8)',maxWidth:1100,margin:'0 auto'}}>
        <p className="label reveal" style={{fontSize:'var(--text-xs)',textTransform:'uppercase',letterSpacing:'.15em',color:'var(--faint)',marginBottom:'var(--space-8)',display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
          Selected Projects<span style={{flex:1,height:1,maxWidth:48,background:'var(--border)'}}/>
        </p>
        <h2 className="reveal" style={{fontFamily:'var(--font-display)',fontSize:'var(--text-xl)',fontWeight:300,letterSpacing:'-.02em',color:'var(--text)',marginBottom:'var(--space-10)',lineHeight:1.1}}>
          Work that <em style={{fontStyle:'italic',color:'var(--accent)'}}>speaks</em> for itself.
        </h2>
        <div className="reveal" style={{borderTop:'1px solid var(--border)'}}>
          {projects.map(p=><ProjectRow key={p.num} p={p}/>)}
        </div>
      </section>
    </>
  )
}
