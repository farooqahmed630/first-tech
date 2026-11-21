import mongoose from 'mongoose'
const schema = new mongoose.Schema({title:{type:String,required:true}, slug:{type:String,unique:true}, excerpt:String, content:String, date:String, category:String, image:String}, {timestamps:true})
export default mongoose.models.Blog || mongoose.model('Blog', schema)
