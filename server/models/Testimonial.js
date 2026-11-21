import mongoose from 'mongoose'
const schema = new mongoose.Schema({name:{type:String,required:true}, quote:String, rating:{type:Number,default:5}, avatar:String}, {timestamps:true})
export default mongoose.models.Testimonial || mongoose.model('Testimonial', schema)
