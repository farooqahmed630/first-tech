import { testimonials as fallback } from '../data/seed.js'
export default function Testimonials({testimonials=fallback}){
  const list=testimonials?.length?testimonials:fallback
  return <section className="section dark"><span className="pill">What Our Users Say</span><h2>Trusted by <span>Millions</span></h2><p>Join our growing community of tech enthusiasts who love TechPulse.</p>
  <div className="grid testimonials">{list.map((t,i)=><article className="card" key={t._id||t.name}><div className="avatar" style={{backgroundImage:'url(/assets/testimonial-avatars.webp)',backgroundPosition:`${i*50}% 0%`,backgroundSize:'300% 100%'}}></div><blockquote>“{t.quote}”</blockquote><h3>{t.name}</h3><p>{'★'.repeat(t.rating||5)}</p></article>)}</div><a className="btn" href="#testimonials">Read More Reviews →</a></section>
}
