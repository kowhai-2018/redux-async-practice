const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/dog', (req, res) => {
  request
    .get(`https://dog.ceo/api/breed/husky/images/random`)
    .end((err, result) => {
      if (err) {
        console.log('dog router err')
        res.status(500).send(err.message)
      } else {
        console.log('dog router')
        res.json(result.body)
      }
    })
})

module.exports = router
