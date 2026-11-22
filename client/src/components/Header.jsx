import { useState } from 'react'

export default function Header({ route }){
  const [q, setQ] = useState('')
  function go(e){
    e.preventDefault()
    window.location.hash = '#/tools?q=' + encodeURIComponent(q.trim())
  }
  const link = (path, label) => <a className={route === path ? 'active' : ''} href={'#' + path}>{label}</a>
  return <header className="header"><a className="logo" href="#/">⚡ TechPulse</a>
    <nav>{link('/', 'Home')}{link('/tools', 'AI Tools')}{link('/blog', 'Blog')}{link('/about', 'About')}{link('/contact', 'Contact')}</nav>
    <div className="header-actions"><form onSubmit={go}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search AI tools..." aria-label="Search"/></form><a className="btn small" href="#/blog">Read Blog</a></div></header>
}
