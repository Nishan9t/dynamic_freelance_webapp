const express =require('express');

//fetching navbar data

const Detail=require('../models/Detail.js');
const Slider = require('../models/Slider.js');
const Service = require('../models/Service.js');
const Contact = require('../models/Contact.js');


const routes=express.Router()

routes.get("/",async (req,res)=>{

    const details =await Detail.findOne({"_id":"64d32b3a10353258aa104c82"});
   // console.log(details)

   const slides= await Slider.find();
  // console.log(slides);

    const services =await Service.find();
    

    res.render("index",{
        details:details,
        slides:slides,
        services:services
    });
})

routes.get("/gallery",async (req,res)=>{
    const details =await Detail.findOne({"_id":"64d32b3a10353258aa104c82"});
   // console.log(details)



    res.render("gallery",{
        details:details
    });
})


routes.post("/process-contact-form",async(req,res)=>{
    // console.log("this form is submitted");
    // console.log(req.body);

    //save the data to db
    try{
        const data=await Contact.create(req.body)
        console.log(data);
        res.redirect("/")
    }
    catch(e){
        console.log(e);
        res.redirect("/")
    }

})


module.exports=routes