import { blogs as fallback } from '../data/seed.js'

export function BlogCard({ b, i = 0 }){
  return <article className="card blog" key={b._id || b.slug}>
    <a href={'#/blog/' + b.slug}><div className="thumb" style={{backgroundImage:'url(/assets/blog-thumbnails.webp)',backgroundPosition:`${(i%2)*100}% ${Math.floor(i/2)%2*100}%`,backgroundSize:'200% 200%'}}><span>{b.date}</span></div></a>
    <p className="meta">{b.category} · {b.readTime}</p>
    <h3><a href={'#/blog/' + b.slug}>{b.title}</a></h3>
    <p className="excerpt">{b.excerpt}</p>
    <a className="readmore" href={'#/blog/' + b.slug}>Read More →</a>
  </article>
}

export default function LatestBlogs({ blogs = fallback }){
  const list = (blogs?.length ? blogs : fallback).slice(0, 4)
  return <section id="blogs" className="section dark"><span className="pill">Latest Articles</span>
    <div className="row"><div><h2>Latest Tech Blogs</h2><p>Stay updated with the latest trends, tutorials, and insights in the world of AI and Technology.</p></div><a href="#/blog">View All Blogs →</a></div>
    <div className="grid blogs">{list.map((b,i)=><BlogCard b={b} i={i} key={b._id||b.slug}/>)}</div></section>
}
