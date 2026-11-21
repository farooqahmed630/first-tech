import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Tool from '../models/Tool.js'
import Blog from '../models/Blog.js'
import Testimonial from '../models/Testimonial.js'
import { tools, blogs, testimonials } from './seedData.js'
dotenv.config({ path: new URL('../.env', import.meta.url).pathname })
await mongoose.connect(process.env.MONGODB_URI)
await Tool.deleteMany(); await Blog.deleteMany(); await Testimonial.deleteMany()
await Tool.insertMany(tools); await Blog.insertMany(blogs); await Testimonial.insertMany(testimonials)
console.log('Seeded TechPulse data')
await mongoose.disconnect()
