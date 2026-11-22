import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import PopularTools from './components/PopularTools.jsx'
import LatestBlogs from './components/LatestBlogs.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Testimonials from './components/Testimonials.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import NativeBanner from './components/NativeBanner.jsx'
import { BlogPage, PostPage, ToolsPage, AboutPage, ContactPage, PrivacyPage } from './pages/Pages.jsx'
import { tools as seedTools, blogs as seedBlogs, testimonials as seedTestimonials } from './data/seed.js'

function parseRoute(){
  const h = window.location.hash || '#/'
  const [path, query] = h.slice(1).split('?')
  return { path: path || '/', params: new URLSearchParams(query || '') }
}

function Home({ tools, blogs, testimonials }){
  return <main><Hero/><Features/><PopularTools tools={tools}/><LatestBlogs blogs={blogs}/><NativeBanner/><WhyChoose/><Testimonials testimonials={testimonials}/><Newsletter/></main>
}

export default function App(){
  const [tools, setTools] = useState(seedTools)
  const [blogs, setBlogs] = useState(seedBlogs)
  const [testimonials, setTestimonials] = useState(seedTestimonials)
  const [route, setRoute] = useState(parseRoute)

  useEffect(()=>{
    const onHash = ()=>{ setRoute(parseRoute()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onHash)
    return ()=> window.removeEventListener('hashchange', onHash)
  },[])

  useEffect(()=>{
    // Live site uses the client seed data; only replace it if the API ever returns a larger set
    const load = async(path, seed, setter)=>{ try{ const r = await fetch(path); if(!r.ok) throw new Error(); const d = await r.json(); if(Array.isArray(d) && d.length > seed.length) setter(d) }catch{} }
    load('/api/tools', seedTools, setTools)
    load('/api/blogs', seedBlogs, setBlogs)
    load('/api/testimonials', seedTestimonials, setTestimonials)
  },[])

  let page
  if(route.path === '/' || route.path === '') page = <Home tools={tools} blogs={blogs} testimonials={testimonials}/>
  else if(route.path === '/blog') page = <BlogPage/>
  else if(route.path.startsWith('/blog/')) page = <PostPage slug={route.path.slice('/blog/'.length)}/>
  else if(route.path === '/tools') page = <ToolsPage initialQ={route.params.get('q') || ''}/>
  else if(route.path === '/about') page = <AboutPage/>
  else if(route.path === '/contact') page = <ContactPage/>
  else if(route.path === '/privacy') page = <PrivacyPage/>
  else page = <Home tools={tools} blogs={blogs} testimonials={testimonials}/>

  const topRoute = route.path.startsWith('/blog') ? '/blog' : route.path
  return <><Header route={topRoute}/>{page}<Footer/></>
}
