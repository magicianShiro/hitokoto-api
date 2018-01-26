const express = require('express')
const proxy = require('http-proxy-middleware')
const path = require('path')
const app = express()
const pug = require('pug')

const index = require('./routes/index.js')
const hitokoto = require('./routes/hitokoto')
const introduce = require('./routes/introduce')

let option = {
  target: 'https://i.pximg.net', // target host
  changeOrigin: true,               // needed for virtual hosted sites
  pathRewrite: {
    '^/image': ''     // rewrite path
  },
  headers: {
    'Referer': 'https://www.pixiv.net/'
  }
}
app.use('/image', proxy(option))

app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', index)
app.use('/hitokoto', hitokoto)
app.use('/introduce', introduce)

app.listen(2222, () => {
    console.log('server is running in port 2222')
})