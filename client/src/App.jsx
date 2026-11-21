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
import { tools as seedTools, blogs as seedBlogs, testimonials as seedTestimonials } from './data/seed.js'

export default function App(){
  const [tools,setTools]=useState(seedTools)
  const [blogs,setBlogs]=useState(seedBlogs)
  const [testimonials,setTestimonials]=useState(seedTestimonials)
  useEffect(()=>{
    const load=async(path,setter)=>{ try{ const r=await fetch(path); if(!r.ok) throw new Error(); const d=await r.json(); if(Array.isArray(d)&&d.length) setter(d) }catch{} }
    load('/api/tools',setTools); load('/api/blogs',setBlogs); load('/api/testimonials',setTestimonials)
  },[])
  return <><Header/><main><Hero/><Features/><PopularTools tools={tools}/><LatestBlogs blogs={blogs}/><WhyChoose/><Testimonials testimonials={testimonials}/><Newsletter/></main><Footer/></>
}
