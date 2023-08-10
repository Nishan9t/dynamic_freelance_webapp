const express =require('express');

//fetching navbar data

const Detail=require('../models/Detail.js');
const Slider = require('../models/Slider.js');
const Service = require('../models/Service.js');
const Contact = require('../models/Contact.js');
const Banner1 = require('../models/Banner1.js');
const About = require('../models/About.js');
const Gallery = require('../models/Gallery.js');


const routes=express.Router()

routes.get("/",async (req,res)=>{

    const details =await Detail.findOne({"_id":"64d32b3a10353258aa104c82"});
   // console.log(details)

   const slides= await Slider.find();
  // console.log(slides);

    const services =await Service.find();

    const banner1=await Banner1.findOne({"_id":"64d498baf34ddd4449366581"});
    const banner2=await Banner1.findOne({"_id":"64d498baf34ddd4449366582"});


    const about=await About.findOne({"_id":"64d49a6c76b8b9dd9870d8fc"});
    

    res.render("index",{
        details:details,
        slides:slides,
        services:services,
        banner1:banner1,
        banner2:banner2,
        about:about
    });
})

routes.get("/gallery",async (req,res)=>{
    const details =await Detail.findOne({"_id":"64d32b3a10353258aa104c82"});
   // console.log(details)

    const gallery= await Gallery.find();

    res.render("gallery",{
        details:details,
        gallery:gallery
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