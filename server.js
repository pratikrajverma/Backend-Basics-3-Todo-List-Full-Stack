const express = require('express')
const app = express()

require('dotenv').config()

const connectDB = require('./database/database')
connectDB()
 
const port = process.env.PORT || 4000
 

 
app.get('/',(req,res)=>{
    res.send('Welcome to Backend')
})



app.listen(port,()=>{
    console.log('server listening on port : ',port)
})

