const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

const postrouter = require('./routes/api/posts')

app.get('/' ,(req,res) => {
    res.send("Heknfaklsdjgn")
})

mongoose.connect(process.env.Config,{useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {
    console.log("Connected");
})
.catch((Err) => {
    console.log(Err)
})

app.use('/api/posts',postrouter)



const port = process.env.PORT || 3030

app.listen(port,()=>{console.log("Server started");})