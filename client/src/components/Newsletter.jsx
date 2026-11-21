import { useState } from 'react'
export default function Newsletter(){
  const [email,setEmail]=useState(''); const [msg,setMsg]=useState('')
  async function submit(e){e.preventDefault(); try{const r=await fetch('/api/newsletter',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})}); const d=await r.json(); setMsg(d.message||'Subscribed!')}catch{setMsg('Subscribed! (demo mode — backend offline)')} }
  return <section className="newsletter"><div><h2>✉ Subscribe to Our Newsletter</h2><p>Get the latest AI tools, tech guides, and blog updates straight to your inbox.</p></div><form onSubmit={submit}><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email address"/><button className="btn">Subscribe</button></form>{msg&&<p>{msg}</p>}</section>
}
