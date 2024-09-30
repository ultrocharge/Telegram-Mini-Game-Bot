const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BotSchema = new Schema({
    username: {type: String,  require: true},
    star : {type: Number, default: 0},
    coin : {type: Number, default: 0},
    week : {type: Number, default: 1},
    day : {type: Number, default: 1},
    spin: {type: Number, default: 0},
    date: {type:Date, default: Date.now()}
})

module.exports = Bot = mongoose.model('bots', BotSchema)