const express = require('express')
const moverzbot = require('./bot')
const connectDB = require('./config/db')
const app = express()

connectDB()

moverzbot()

app.listen(5000, console.log("Server running on port 5000"))