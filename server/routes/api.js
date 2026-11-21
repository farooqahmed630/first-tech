import express from 'express'
import Tool from '../models/Tool.js'
import Blog from '../models/Blog.js'
import Testimonial from '../models/Testimonial.js'
import Subscriber from '../models/Subscriber.js'
import { tools, blogs, testimonials } from '../data/seedData.js'
import mongoose from 'mongoose'
const router = express.Router()
const ready = () => mongoose.connection.readyState === 1
router.get('/tools', async (req,res)=>{ try{ if(ready()){ const d=await Tool.find().sort({rating:-1}); if(d.length) return res.json(d) } }catch{} return res.json(tools) })
router.get('/blogs', async (req,res)=>{ try{ if(ready()){ const d=await Blog.find(); if(d.length) return res.json(d) } }catch{} return res.json(blogs) })
router.get('/testimonials', async (req,res)=>{ try{ if(ready()){ const d=await Testimonial.find(); if(d.length) return res.json(d) } }catch{} return res.json(testimonials) })
router.post('/newsletter', async (req,res)=>{
  const { email } = req.body || {}
  if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({message:'Valid email required'})
  try{ if(ready()) await Subscriber.updateOne({email},{$set:{email}},{upsert:true}) }catch{}
  return res.status(201).json({message:'Subscribed successfully'})
})
export default router
