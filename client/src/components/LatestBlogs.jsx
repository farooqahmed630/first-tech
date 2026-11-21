import { blogs as fallback } from '../data/seed.js'
export default function LatestBlogs({blogs=fallback}){
  const list=blogs?.length?blogs:fallback
  return <section id="blogs" className="section dark"><span className="pill">Latest Articles</span><div className="row"><div><h2>Latest Tech Blogs</h2><p>Stay updated with the latest trends, tutorials, and insights in the world of AI and Technology.</p></div><a href="#blogs">View All Blogs →</a></div>
  <div className="grid blogs">{list.map((b,i)=><article className="card blog" key={b._id||b.title}><div className="thumb" style={{backgroundImage:'url(/assets/blog-thumbnails.webp)',backgroundPosition:`${(i%2)*100}% ${Math.floor(i/2)*100}%`,backgroundSize:'200% 200%'}}><span>{b.date}</span></div><h3>{b.title}</h3><a href="#blogs">Read More →</a></article>)}</div></section>
}
