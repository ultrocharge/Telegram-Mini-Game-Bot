const express = require('express')
const Bot = require('../model/Bot')

const router = express.Router()


router.get('/show', (req, res) => {
    Bot.find()
        .then(bot => {
            res.json(bot)
        })
        .catch(err => console.log(err))
})

router.post('/add', (req, res) => {
    const {username} = req.body

    Bot.findOne({username})
        .then(bot => {
            if(bot) {
                console.log(bot)
            } else {
                new Bot({username}).save()
                    .then(bot => console.log(bot))
                    .catch(err => console.log(err))
            }
        })
})

module.exports = router;