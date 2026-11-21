import { tools as fallback } from '../data/seed.js'
export default function PopularTools({tools=fallback}){
  return <section id="tools" className="section"><span className="pill">Popular Picks</span>
  <div className="split"><div><h2>Most Popular <span>AI Tools</span></h2><p>Top AI tools jo aapki life ko asan aur productive banayein.</p><a className="btn" href="#tools">View All Tools →</a></div>
  <div className="grid tools">{(tools?.length?tools:fallback).map(t=><article className="card" key={t._id||t.name}><div className="tool-icon" style={{background:t.color||'#7c3aed'}}>{t.name?.[0]}</div><h3>{t.name}</h3><p>{t.description}</p><p>⭐ {t.rating} ({t.reviews})</p><a className="btn small" href="#tools">Try Now →</a></article>)}</div></div></section>
}
