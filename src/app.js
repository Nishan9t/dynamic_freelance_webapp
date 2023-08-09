const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const routes=require('./routes/main.js')
const mongoose = require('mongoose');
const Detail=require("./models/Detail.js");
const Slider = require("./models/Slider.js");


const app=express();

//to use static folder in project
//static/css/style.css
app.use('/static',express.static("public"))
app.use('',routes);

//template engine => hbs
app.set("view engine","hbs");
//second views is name of folder
app.set("views","views");
//setting partials
hbs.registerPartials("views/partials/");


//db connection
mongoose.connect("mongodb://localhost:27017/dynamic_webapp").then(()=>{
    console.log("db connected");

    // Slider.create([
    //     {
    //         title:"Learn Java in very easy manner",
    //         subTitle:'Java is one of the most popular programming language',
    //         imageUrl:"/static/images/s1.jpg"
    //     },
    //     {
    //         title:'Learn Node in very easy manner',
    //         subTitle:'Node is one of the most popular Backend Programming language',
    //         imageUrl:"/static/images/s2.jpg"
    //     },
    //     {
    //         title:'Learn React in very easy manner',
    //         subTitle:'React is one of the most popular Frontend programming language',
    //         imageUrl:"/static/images/s3.png"
    //     }
    // ])


    // Detail.create({
    //     brandName:"Info Tech Solution",
    //     brandIconUrl:"static/images/rocket.png",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         },

    //     ]
    // })
    

})




PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})