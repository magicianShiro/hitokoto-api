const express = require('express')
const router = express.Router()
const introduce = require('../controller/introduce')

router.get('/:target', (req, res) => {
  introduce.toIntroducePage(req, res)
})

module.exports = router
