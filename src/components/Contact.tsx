'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{name?:string;email?:string;message?:string}>({})

  const validate = () => {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^@]+@[^@]+[.][^@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
    setForm({name:'',email:'',message:''})
    setTimeout(()=>setSubmitted(false), 6000)
  }

  const inputStyle = (hasErr: boolean): React.CSSProperties => ({
    width:'100%', padding:'var(--space-3) var(--space-4)',
    borderRadius:'var(--radius-sm)',
    border: hasErr ? '1px solid var(--accent)' : '1px solid color-mix(in srgb,var(--text) 15%,transparent)',
    background:'color-mix(in srgb,var(--text) 4%,transparent)',
    color:'var(--text)', fontSize:'var(--text-sm)',
    fontFamily:'var(--font-body)', lineHeight:1.5, outline:'none',
    transition:'border-color 160ms var(--ease-out)',
  })

  const outlineBtn: React.CSSProperties = {
    padding:'var(--space-3) var(--space-6)', borderRadius:'var(--radius-full)',
    fontSize:'var(--text-sm)', border:'1px solid color-mix(in srgb,var(--text) 18%,transparent)',
    color:'var(--muted)', transition:'color 160ms var(--ease-out),border-color 160ms',
  }

  return (
    <section id="contact" style={{padding:'clamp(var(--space-16),7vw,var(--space-20)) var(--space-8)'}}>
      <div style={{maxWidth:600,margin:'0 auto'}}>
        <p className="label reveal" style={{fontSize:'var(--text-xs)',textTransform:'uppercase',letterSpacing:'.15em',color:'var(--faint)',marginBottom:'var(--space-8)',display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
          Contact<span style={{flex:1,height:1,maxWidth:48,background:'var(--border)'}}/>
        </p>
        <h2 className="reveal" style={{fontFamily:'var(--font-display)',fontSize:'var(--text-xl)',fontWeight:300,letterSpacing:'-.02em',color:'var(--text)',marginBottom:'var(--space-5)',lineHeight:1.1,fontStyle:'italic'}}>
          Let&apos;s build something <em style={{color:'var(--accent)'}}>remarkable.</em>
        </h2>
        <p className="reveal" style={{fontSize:'var(--text-base)',color:'var(--muted)',marginBottom:'var(--space-10)',lineHeight:1.7}}>
          Whether it&apos;s an internship, a project, or just a chat — I&apos;m always open to new conversations.
        </p>

        {submitted && (
          <div style={{marginBottom:'var(--space-6)',padding:'var(--space-4)',border:'1px solid color-mix(in srgb,var(--accent) 35%,transparent)',background:'color-mix(in srgb,var(--accent) 8%,transparent)',borderRadius:'var(--radius-sm)',fontSize:'var(--text-sm)',color:'var(--accent)'}}>
            ✦ Message received — I&apos;ll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
          {([['name','Name','Your name','text'],['email','Email','you@example.com','email']] as const).map(([field,label,placeholder,type])=>(
            <div key={field}>
              <label style={{display:'block',fontSize:'var(--text-xs)',textTransform:'uppercase',letterSpacing:'.1em',color:'var(--muted)',marginBottom:'var(--space-2)'}}>{label}</label>
              <input type={type} placeholder={placeholder} value={form[field]}
                onChange={e=>setForm({...form,[field]:e.target.value})}
                style={inputStyle(!!errors[field])}
                onFocus={e=>(e.currentTarget.style.borderColor='color-mix(in srgb,var(--accent) 60%,transparent)')}
                onBlur={e=>(e.currentTarget.style.borderColor=errors[field]?'var(--accent)':'color-mix(in srgb,var(--text) 15%,transparent)')}
              />
              {errors[field] && <p style={{fontSize:'var(--text-xs)',color:'var(--accent)',marginTop:'var(--space-2)'}}>{errors[field]}</p>}
            </div>
          ))}
          <div>
            <label style={{display:'block',fontSize:'var(--text-xs)',textTransform:'uppercase',letterSpacing:'.1em',color:'var(--muted)',marginBottom:'var(--space-2)'}}>Message</label>
            <textarea rows={5} placeholder="What's on your mind?" value={form.message}
              onChange={e=>setForm({...form,message:e.target.value})}
              style={{...inputStyle(!!errors.message),resize:'none'}}
              onFocus={e=>(e.currentTarget.style.borderColor='color-mix(in srgb,var(--accent) 60%,transparent)')}
              onBlur={e=>(e.currentTarget.style.borderColor=errors.message?'var(--accent)':'color-mix(in srgb,var(--text) 15%,transparent)')}
            />
            {errors.message && <p style={{fontSize:'var(--text-xs)',color:'var(--accent)',marginTop:'var(--space-2)'}}>{errors.message}</p>}
          </div>
          <button type="submit" style={{alignSelf:'flex-start',padding:'var(--space-3) var(--space-8)',borderRadius:'var(--radius-full)',fontSize:'var(--text-sm)',background:'var(--accent)',color:'var(--inv)',transition:'background 160ms var(--ease-out)'}}
            onMouseEnter={e=>(e.currentTarget.style.background='var(--accent-hover)')}
            onMouseLeave={e=>(e.currentTarget.style.background='var(--accent)')}
          >Send message</button>
        </form>

        <div style={{marginTop:'var(--space-12)',display:'flex',alignItems:'center',justifyContent:'center',gap:'var(--space-3)',flexWrap:'wrap'}}>
          {[
            {label:'Email me', href:'mailto:rufilaarianna@gmail.com', external:false},
            {label:'GitHub', href:'https://github.com/ariannaventi', external:true},
            {label:'LinkedIn', href:'https://www.linkedin.com/in/arianna-rufila/', external:true},
          ].map(btn=>(
            <a key={btn.label} href={btn.href} {...(btn.external?{target:'_blank',rel:'noopener noreferrer'}:{})}
              style={outlineBtn}
              onMouseEnter={e=>{e.currentTarget.style.color='var(--text)';e.currentTarget.style.borderColor='color-mix(in srgb,var(--text) 35%,transparent)'}}
              onMouseLeave={e=>{e.currentTarget.style.color='var(--muted)';e.currentTarget.style.borderColor='color-mix(in srgb,var(--text) 18%,transparent)'}}
            >{btn.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
