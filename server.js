const express = require('express')
const moverzbot = require('./bot')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

connectDB()


app.use(cors({ origin: 'http://localhost:3000' }));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/moverz', require('./routes/bot'))

moverzbot()

app.listen(5000, console.log("Server running on port 5000"))