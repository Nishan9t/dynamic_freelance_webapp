const mongoose=require('mongoose');

const Gallery=mongoose.Schema({
    img:String,
})

module.exports=mongoose.model("gallery",Gallery)