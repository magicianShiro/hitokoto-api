const router = require('koa-router')()
const introduce = require('../controller/introduce')

router.prefix('/introduce')

router.get('/:target', async (ctx, next) => {
  await introduce.toIntroducePage(ctx)
})

module.exports = router
