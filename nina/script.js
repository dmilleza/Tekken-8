const nina = require('./data.json')

const fast = nina.frameData.dstance.sort((a, b) => a.startup - b.startup)

console.log(fast)
