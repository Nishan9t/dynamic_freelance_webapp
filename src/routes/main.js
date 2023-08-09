const express =require('express');

//fetching navbar data

const Detail=require('../models/Detail.js');
const Slider = require('../models/Slider.js');


const routes=express.Router()

routes.get("/",async (req,res)=>{

    const details =await Detail.findOne({"_id":"64d32b3a10353258aa104c82"});
   // console.log(details)

   const slides= await Slider.find();
  // console.log(slides);

    res.render("index",{
        details:details,
        slides:slides
    });
})

routes.get("/gallery",async (req,res)=>{
    const details =await Detail.findOne({"_id":"64d32b3a10353258aa104c82"});
   // console.log(details)



    res.render("gallery",{
        details:details
    });
})


module.exports=routes