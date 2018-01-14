const router = require('koa-router')()
const index = require('../controller/index')

router.get('/', async (ctx, next) => {
  await index.setBgImage(ctx)
})

module.exports = router
