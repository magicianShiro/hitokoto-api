const express = require('express')
const router = express.Router()
const hotokoto = require('../controller/hitokoto')

router.get('/', (req, res) => {
  hotokoto.getAll(req, res)
})

router.get('/anime', (req, res) => {
  hotokoto.getAnime(req, res)
})

router.get('/comic', (req, res) => {
  hotokoto.getComic(req, res)
})

router.get('/game', (req, res) => {
  hotokoto.getGame(req, res)
})

router.get('/novel', (req, res) => {
  hotokoto.getNovel(req, res)
})

router.get('/myself', (req, res) => {
  hotokoto.getMyself(req, res)
})

router.get('/internet', (req, res) => {
  hotokoto.getMyself(req, res)
})

router.get('/other', (req, res) => {
  hotokoto.getMyself(req, res)
})

module.exports = router
