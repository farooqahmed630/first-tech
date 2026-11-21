import mongoose from 'mongoose'
const schema = new mongoose.Schema({name:{type:String,required:true}, description:String, rating:Number, reviews:String, color:String, url:String}, {timestamps:true})
export default mongoose.models.Tool || mongoose.model('Tool', schema)
