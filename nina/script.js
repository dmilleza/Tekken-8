const nina = require('./data.json')

// const added = nina.frameData.dstance
//   .concat(nina.frameData.sway)
//   .concat(nina.frameData.duckstep)

// const fast = added.sort((a, b) => b.damage - a.damage)

const combos = nina.combos
  .filter((combo) => combo.hasOwnProperty('type'))
  .filter((item) => item.type.includes('true'))

console.log(combos)
