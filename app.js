const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const db = require('./config/db')
db()

app.listen(process.env.PORT, ()=>{
  console.log(`server is running on ${process.env.PORT}`)
})

module.exports=app 