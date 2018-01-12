const router = require('koa-router')()
const hotokoto = require('../controller/hitokoto')

router.prefix('/hitokoto')

router.get('/', async (ctx, next) => {
  await hotokoto.getAll(ctx, next)
})

router.get('/anime', async (ctx, next) => {
  await hotokoto.getAnime(ctx, next)
})

router.get('/comic', async (ctx, next) => {
  await hotokoto.getComic(ctx, next)
})

router.get('/game', async (ctx, next) => {
  await hotokoto.getGame(ctx, next)
})

router.get('/novel', async (ctx, next) => {
  await hotokoto.getNovel(ctx, next)
})

router.get('/myself', async (ctx, next) => {
  await hotokoto.getMyself(ctx, next)
})

router.get('/internet', async (ctx, next) => {
  await hotokoto.getMyself(ctx, next)
})

router.get('/other', async (ctx, next) => {
  await hotokoto.getMyself(ctx, next)
})

module.exports = router
