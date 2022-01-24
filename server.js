// import f express
const express = require('express')
const isAuth=require('./middleware/isAuth')
//instance app of methods
const app=new express()
//create PORT
const PORT =5000
// route

app.use(isAuth);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pages/home.html")
})

app.get("/closed", (req, res) => {
    res.sendFile(__dirname +"/pages/closed.html")
})

app.get("/service",(req,res)=>{
    res.sendFile(__dirname+"/pages/our-services.html")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/style.css")
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/pages/contact.html")
})

//create server
app.listen(PORT, (err)=>{
    (err)?console.log(err):console.log(`server is runing on ${PORT}`)
})