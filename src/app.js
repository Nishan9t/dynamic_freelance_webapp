const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const routes=require('./routes/main.js')

const app=express();

//to use static folder in project
//static/css/style.css
app.use('/static',express.static("public"))
app.use('',routes);

//template engine => hbs
app.set("view engine","hbs");
//second views is name of folder
app.set("views","views");



PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})