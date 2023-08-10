const mongoose=require('mongoose');

const Banner=mongoose.Schema({
    img:String,
    heading:String,
    text:String
})

module.exports=mongoose.model("banners",Banner)