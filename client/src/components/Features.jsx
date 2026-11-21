const items=[['🚀','Latest Updates','Get fresh content daily'],['🛡️','Trusted Reviews','Honest & unbiased'],['💼','Free AI Tools','Boost your productivity'],['👥','Expert Guides','Learn step-by-step']]
export default function Features(){return <section className="features">{items.map(([i,t,d])=><div key={t}><span>{i}</span><div><strong>{t}</strong><small>{d}</small></div></div>)}</section>}
