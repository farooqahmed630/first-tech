import { tools as fallback } from '../data/seed.js'

export function ToolCard({ t }){
  return <article className="card" key={t._id || t.name}>
    <div className="tool-icon" style={{background:t.color || '#7c3aed'}}>{t.name?.[0]}</div>
    <h3>{t.name}</h3>
    <p>{t.description}</p>
    <p className="meta">{t.category} · {t.pricing}</p>
    <p>⭐ {t.rating} ({t.reviews})</p>
    <a className="btn small" href={t.url} target="_blank" rel="noopener noreferrer">Try Now →</a>
  </article>
}

export default function PopularTools({ tools = fallback }){
  const list = (tools?.length ? tools : fallback).slice(0, 8)
  return <section id="tools" className="section"><span className="pill">Popular Picks</span>
    <div className="split"><div><h2>Most Popular <span>AI Tools</span></h2><p>Top AI tools jo aapki life ko asan aur productive banayein. Search, compare aur apne kaam ke liye best tool chunein.</p><a className="btn" href="#/tools">View All Tools →</a></div>
    <div className="grid tools">{list.map(t=><ToolCard t={t} key={t._id||t.name}/>)}</div></div></section>
}
