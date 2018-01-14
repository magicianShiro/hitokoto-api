const rp = require('request-promise')
const pixiv = require('../config').pixiv

// 设置主页背景图
const setBgImage = async (ctx) => {
  let imageInfo = JSON.parse(await rp(pixiv.BASE_API))
  let random = Math.floor(Math.random()*imageInfo.length)
  let url = imageInfo[random].image_url
  await ctx.render('index', {
    url
  })
}

module.exports = {
  setBgImage
}
