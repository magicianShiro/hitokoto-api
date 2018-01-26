const rp = require('request-promise')
const path = require('path')
const hitokoto = require('../config').hitokoto

let returnMsg = (msg) => {
  return `function hitokoto () { document.write('${msg}') }`
}

// 所有
const getAll = async (req, res) => {
  let response = JSON.parse(await rp(hitokoto.BASE_API))
  let kotoba = response.hitokoto
  let from = response.from
  res.send(returnMsg(kotoba))
}
// 动画
const getAnime = async (req, res) => {
  let response = JSON.parse(await rp(hitokoto.BASE_API + '?c=a'))
  let kotoba = response.hitokoto
  let from = response.from
  res.send(returnMsg(kotoba))
}
// 漫画
const getComic = async (req, res) => {
  let response = JSON.parse(await rp(hitokoto.BASE_API + '?c=b'))
  let kotoba = response.hitokoto
  let from = response.from
  res.send(returnMsg(kotoba))
}
// 游戏
const getGame = async (req, res) => {
  let response = JSON.parse(await rp(hitokoto.BASE_API + '?c=c'))
  let kotoba = response.hitokoto
  let from = response.from
  res.send(returnMsg(kotoba))
}
// 小说
const getNovel = async (req, res) => {
  let response = JSON.parse(await rp(hitokoto.BASE_API + '?c=d'))
  let kotoba = response.hitokoto
  let from = response.from
  res.send(returnMsg(kotoba))
}
// 原创
const getMyself = async (req, res) => {
  let response = JSON.parse(await rp(hitokoto.BASE_API + '?c=e'))
  let kotoba = response.hitokoto
  let from = response.from
  res.send(returnMsg(kotoba))
}
// 来自网络
const getInternet = async (req, res) => {
  let response = JSON.parse(await rp(hitokoto.BASE_API + '?c=f'))
  let kotoba = response.hitokoto
  let from = response.from
  res.send(returnMsg(kotoba))
}
// 其他
const getOther = async (req, res) => {
  let response = JSON.parse(await rp(hitokoto.BASE_API + '?c=g'))
  let kotoba = response.hitokoto
  let from = response.from
  res.send(returnMsg(kotoba))
}

module.exports = {
  getAnime,
  getComic,
  getGame,
  getNovel,
  getMyself,
  getInternet,
  getOther,
  getAll
}
