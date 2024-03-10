const yoshi = require('./data.json')

const fast = yoshi.frameData.sort((a, b) => a.startup - b.startup)

console.log(fast)
