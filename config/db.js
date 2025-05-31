const mongoose = require('mongoose')
const env = require('dotenv').config()

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI)
    console.log("Mongodb connected")
  } catch (error) {
    console.log("DB Connection error",error.message)
  }
}

module.exports = connectDB;