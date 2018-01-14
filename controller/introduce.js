
let catMap = {
  all: '任意类型',
  anime: '动画',
  comic: '漫画',
  game: '游戏',
  novel: '小说',
  myself: '原创',
  internet: '来自网络',
  other: '其他'
}

const toIntroducePage = async (ctx) => { 
  console.log(ctx.params.target)
  let target = ctx.params.target
  let cat = catMap[target]
  if (target === 'all') target = '/'
  await ctx.render('introduce', {
    target,
    cat
  })
}

module.exports = {
  toIntroducePage
}
