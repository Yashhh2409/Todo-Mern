const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})