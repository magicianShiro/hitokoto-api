const rp = require('request-promise')
const request = require('request')
const pixiv = require('../config').pixiv

let prefix = 'https://i.pximg.net'

// 设置主页背景图
const setBgImage = (req, res) => {
  request(pixiv.BASE_API, (err, response, body) => {
    let imageInfo = JSON.parse(body)
    let random = Math.floor(Math.random()*imageInfo.length)
    let url = imageInfo[random].image_url.replace(prefix, '/image')
    res.render('index', {
      url
    })
  })
}

// 设置主页背景图
const proxyImage = async (ctx) => {
  let URL = ctx.path.replace('/image', prefix)
  let options = {
    uri: URL,
    encoding: null,
    headers: {
      'Referer': 'https://www.pixiv.net/'
    },
  }
  let result = await rp(options)
  ctx.set('ETag', '123')
  ctx.type = 'png'
  ctx.body = result
}

module.exports = {
  setBgImage,
  proxyImage
}
