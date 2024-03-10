const kuma = require('./data.json')

const fast = kuma.frameData.dstance.sort((a, b) => a.startup - b.startup)

console.log(fast)
