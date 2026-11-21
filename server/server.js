import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import apiRoutes from './routes/api.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.get('/api/health', (req,res)=>res.json({status:'ok', service:'TechPulse API', mongo: mongoose.connection.readyState===1 ? 'connected' : 'seed-fallback'}))
app.use('/api', apiRoutes)
const PORT = process.env.PORT || 5000
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('MongoDB connected')).catch(err=>console.warn('MongoDB not connected, using seed fallback:', err.message))
} else {
  console.warn('No MONGODB_URI set — API will serve seed data (demo mode)')
}
app.listen(PORT, ()=>console.log(`TechPulse server running on port ${PORT}`))
export default app
