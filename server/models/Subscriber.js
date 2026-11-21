import mongoose from 'mongoose'
const schema = new mongoose.Schema({email:{type:String,required:true,unique:true}, subscribedAt:{type:Date,default:Date.now}}, {timestamps:true})
export default mongoose.models.Subscriber || mongoose.model('Subscriber', schema)
