const nina = require('./data.json')

// const fast = nina.frameData.duckstep.sort((a, b) => a.startup - b.startup)
const dmg = nina.frameData.sway.sort((a, b) => b.damage - a.damage)

console.log(dmg)
