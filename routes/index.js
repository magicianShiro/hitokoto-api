const express = require('express')
const router = express.Router()
const index = require('../controller/index')


router.get('/', (req, res) => {
  index.setBgImage(req, res)
})

module.exports = router
