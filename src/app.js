const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const routes=require('./routes/main.js')
const mongoose = require('mongoose');
const Detail=require("./models/Detail.js");
const Slider = require("./models/Slider.js");
const Service = require('./models/Service.js');
const bodyParser =require('body-parser');
const Banner1 = require('./models/Banner1.js');
const About = require('./models/About.js');
const Gallery = require('./models/Gallery.js');


const app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));
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


    // Gallery.create([
    //     {
    //         img:'/static/images/pic.jpg',
    //     },
    //     {
    //         img:'/static/images/pic.jpg',
    //     },
    //     {
    //         img:'/static/images/pic.jpg',
    //     },
    //     {
    //         img:'/static/images/pic.jpg',
    //     }
    // ])

    // About.create({
    //     heading:'About this side',
    //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda maxime quibusdam libero adipisci quo quas numquam in ipsum obcaecati illo, laudantium minus ducimus ea veniam ut. Facere veniam quibusdam exercitationem.'
    // })

    // Banner1.create([
    //     {
    //         img:'/static/images/banner1.jpg',
    //         heading:'We work for people, not for money',
    //         text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tenetur harum iusto vitae cupiditate, dolorem ducimus deserunt odio officia excepturi reprehenderit veniam autem aperiam nostrum iste iure accusantium laboriosam adipisci'
    //     },
    //     {
    //         img:'/static/images/banner2.jpg',
    //         heading:'We work for people, not for money',
    //         text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tenetur harum iusto vitae cupiditate, dolorem ducimus deserunt odio officia excepturi reprehenderit veniam autem aperiam nostrum iste iure accusantium laboriosam adipisci'
    //     }

    // ])

    // Service.create([
    //     {
    //         icon:'fa-brands fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:"We provide best courses which help our student in learning and placement.",
    //         linkText:"https://www.learncodewithdurgesh.com",
    //         link:'Check'
    //     },
    //     {
    //         icon:'fa-brands fa-affiliatetheme',
    //         title:'Learn Projects',
    //         description:"We provide best courses which help our student in learning and placement.",
    //         linkText:"https://www.learncodewithdurgesh.com",
    //         link:'Learn'
    //     },
    //     {
    //         icon:'fa-brands fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:"We provide best courses which help our student in learning and placement.",
    //         linkText:"https://www.learncodewithdurgesh.com",
    //         link:'Check'
    //     }
    // ])

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