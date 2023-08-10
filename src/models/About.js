const mongoose=require('mongoose');

const About=mongoose.Schema({
    heading:String,
    description:String
})

module.exports=mongoose.model("abouts",About)