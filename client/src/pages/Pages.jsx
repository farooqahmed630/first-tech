import { useMemo, useState } from 'react'
import { blogs, tools } from '../data/seed.js'
import { BlogCard } from '../components/LatestBlogs.jsx'
import { ToolCard } from '../components/PopularTools.jsx'
import NativeBanner from '../components/NativeBanner.jsx'

export const EMAIL = 'fm8971421@gmail.com'

export function BlogPage(){
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const cats = ['All', ...new Set(blogs.map(b => b.category))]
  const list = useMemo(()=> blogs.filter(b =>
    (cat === 'All' || b.category === cat) &&
    (b.title + ' ' + b.excerpt + ' ' + (b.tags||[]).join(' ')).toLowerCase().includes(q.toLowerCase())
  ), [q, cat])
  return <main className="page"><span className="pill">TechPulse Blog</span>
    <h1>Guides, Reviews & <span>AI News</span></h1>
    <p className="lead">Har post practical hai — step-by-step guides, honest reviews aur wo AI tips jo asal mein kaam karti hain. Search karein ya category chunein:</p>
    <div className="filters"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search posts... (e.g. ChatGPT, video, students)" aria-label="Search posts"/>
    <div className="chips">{cats.map(c=><button key={c} className={'chip' + (cat===c ? ' on' : '')} onClick={()=>setCat(c)}>{c}</button>)}</div></div>
    {list.length ? <div className="grid blogs">{list.map((b,i)=><BlogCard b={b} i={i} key={b._id||b.slug}/>)}</div>
    : <p className="empty">Koi post nahi mili — koi aur lafz try karein.</p>}
    <NativeBanner/></main>
}

export function PostPage({ slug }){
  const post = blogs.find(b => b.slug === slug)
  if(!post) return <main className="page"><h1>Post not found</h1><p className="lead">Ye post mojood nahi hai.</p><a className="btn" href="#/blog">← All Blogs</a></main>
  const related = blogs.filter(b => b.slug !== slug && b.category === post.category).slice(0, 3)
  const more = related.length ? related : blogs.filter(b => b.slug !== slug).slice(0, 3)
  const shareUrl = encodeURIComponent('https://first-tech.vercel.app/#/blog/' + post.slug)
  const shareText = encodeURIComponent(post.title + ' — via TechPulse')
  return <main className="page article">
    <a className="backlink" href="#/blog">← All Blogs</a>
    <p className="meta">{post.category} · {post.date} · {post.readTime} · By TechPulse Team</p>
    <h1>{post.title}</h1>
    <p className="lead">{post.excerpt}</p>
    <div className="keypoints"><h3>⚡ Key Points</h3><ul>{post.points.map((p,i)=><li key={i}>{p}</li>)}</ul></div>
    {post.content.map((para,i)=><p className="para" key={i}>{para}</p>)}
    <NativeBanner/>
    <div className="share"><span>Share this post:</span>
      <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${shareText}%20${shareUrl}`}>WhatsApp</a>
      <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}>Facebook</a>
      <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}>X / Twitter</a>
      <a target="_blank" rel="noopener noreferrer" href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}>Telegram</a></div>
    <p className="tags">{post.tags.map(t=><span className="tag" key={t}>#{t}</span>)}</p>
    <h2 className="related-h">Read Next</h2>
    <div className="grid blogs">{more.map((b,i)=><BlogCard b={b} i={i} key={b._id||b.slug}/>)}</div>
  </main>
}

export function ToolsPage({ initialQ = '' }){
  const [q, setQ] = useState(initialQ)
  const [cat, setCat] = useState('All')
  const cats = ['All', ...new Set(tools.map(t => t.category))]
  const list = useMemo(()=> tools.filter(t =>
    (cat === 'All' || t.category === cat) &&
    (t.name + ' ' + t.description + ' ' + t.category).toLowerCase().includes(q.toLowerCase())
  ), [q, cat])
  return <main className="page"><span className="pill">AI Tools Directory</span>
    <h1>Best AI Tools, <span>One Search Away</span></h1>
    <p className="lead">{tools.length} hand-picked AI tools — chatbots, image, video, voice, design aur productivity. Search karein, category filter karein, aur Try Now se seedha official site par jayein.</p>
    <div className="filters"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools... (e.g. video, image, free)" aria-label="Search tools"/>
    <div className="chips">{cats.map(c=><button key={c} className={'chip' + (cat===c ? ' on' : '')} onClick={()=>setCat(c)}>{c}</button>)}</div></div>
    {list.length ? <div className="grid tools wide">{list.map(t=><ToolCard t={t} key={t._id||t.name}/>)}</div>
    : <p className="empty">Koi tool nahi mila — search change karke try karein.</p>}
    <NativeBanner/></main>
}

export function AboutPage(){
  return <main className="page"><span className="pill">About Us</span>
    <h1>About <span>TechPulse</span></h1>
    <p className="lead">TechPulse ek technology aur AI tools blog hai jahan hum mushkil tech ko asan zuban mein samjhate hain — taake students, freelancers aur creators AI se asal faida utha saken.</p>
    <div className="grid why">
      <div className="card dark-card"><h3>🎯 Our Mission</h3><p>Har reader ko wo AI tool aur guide dena jo uske kaam, study ya business mein foran kaam aye — bina fazool hype ke.</p></div>
      <div className="card dark-card"><h3>📝 What We Publish</h3><p>Step-by-step guides, honest tool reviews, comparisons aur free AI tools ki tested lists — har post pehle khud try karke likhte hain.</p></div>
      <div className="card dark-card"><h3>👥 Who Reads Us</h3><p>Students, freelancers, YouTubers, TikTok creators aur small business owners jo social media se seekh kar grow karna chahte hain.</p></div>
    </div>
    <h2>Talk to us</h2>
    <p className="para">Sawal, suggestion ya kisi tool ki request ho to hamein email karein: <a className="mail" href={'mailto:' + EMAIL}>{EMAIL}</a> — hum har message parhte hain aur 24–48 ghanton mein reply ki koshish karte hain.</p>
    <p className="para">Note: TechPulse ki koi mobile app nahi hai — hamari official website sirf yehi hai: first-tech.vercel.app. Kisi aur app ya site ko hamari official na samjhein.</p>
    <a className="btn" href="#/blog">Read Our Latest Posts →</a></main>
}

export function ContactPage(){
  const [name, setName] = useState(''); const [subject, setSubject] = useState(''); const [message, setMessage] = useState('')
  function send(e){
    e.preventDefault()
    const body = encodeURIComponent('Name: ' + name + '\n\n' + message)
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject || 'TechPulse Contact') + '&body=' + body
  }
  return <main className="page"><span className="pill">Contact</span>
    <h1>Contact <span>TechPulse</span></h1>
    <p className="lead">Sawal hai? Koi AI tool review karwana hai? Ya sirf hello kehna hai — form bharein, ye aapke email app se seedha hamare inbox mein ayega:</p>
    <p className="para">✉ Email: <a className="mail" href={'mailto:' + EMAIL}>{EMAIL}</a></p>
    <form className="contact-form" onSubmit={send}>
      <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" aria-label="Your name"/>
      <input required value={subject} onChange={e=>setSubject(e.target.value)} placeholder="Subject" aria-label="Subject"/>
      <textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="Your message..." rows="6" aria-label="Your message"/>
      <button className="btn" type="submit">Send via Email →</button>
    </form>
    <p className="para small-note">Form submit karne par aapka apna email app khulega jahan se message {EMAIL} par send hoga.</p></main>
}

export function PrivacyPage(){
  return <main className="page article"><span className="pill">Legal</span>
    <h1>Privacy Policy</h1>
    <p className="para">Last updated: Nov 22, 2026</p>
    <h2>What we collect</h2>
    <p className="para">TechPulse sirf wahi maloomat collect karta hai jo aap khud dete hain — jaise newsletter ke liye email address ya contact form se bheja gaya message. Hum aapki maloomat kisi ko bechte nahi hain.</p>
    <h2>Cookies & advertising</h2>
    <p className="para">Is website par third-party advertising partners (jaise Adsterra) ke ads show hote hain. Ye partners cookies ya isi tarah ki technology use karke ads dikhate aur unki performance measure karte hain. Aap apne browser ki settings se cookies kabhi bhi band ya delete kar sakte hain.</p>
    <h2>External links</h2>
    <p className="para">Hamari posts mein dusri websites (AI tools ki official sites waghera) ke links hote hain. Un websites ki privacy practices ki zimmedari hamari nahi hai — wahan ki policy zaroor parhein.</p>
    <h2>Your choices</h2>
    <p className="para">Aap kabhi bhi apni maloomat delete karwane ya newsletter se unsubscribe karne ke liye hamein email kar sakte hain: <a className="mail" href={'mailto:' + EMAIL}>{EMAIL}</a>.</p>
    <h2>Terms in short</h2>
    <p className="para">Is site ka content sirf educational maqsad ke liye hai. AI tools ki prices aur features badal sakte hain — koi bhi paid plan lene se pehle official website par confirm kar lein. Content ko bina credit ke copy karna mana hai.</p></main>
}
