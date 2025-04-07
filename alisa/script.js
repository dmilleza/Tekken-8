const alisa = require('./gameplan.json')
const singlehitlows = alisa.singleHitDamage.low

console.log(singlehitlows.sort((a, b) => b.damage - a.damage))
// const added = nina.frameData.dstance
//   .concat(nina.frameData.sway)
//   .concat(nina.frameData.duckstep)

// returns ordered range with less object keys
// const ranges = added
//   .map((item) => ({
//     move: `${item.move}`,
//     startup: item.startup,
//     damage: item.damage,
//     range: item.range,
//   }))
//   .sort((a, b) => b.range - a.range)

// const fast = added.sort((a, b) => b.damage - a.damage)

// gets all objects that have 'type' key and then shows crouches
// const combos = added
//   .filter((combo) => combo.hasOwnProperty('type'))
//   .filter((item) => item.type.includes('crouch'))

// gets moves that are 0 or plus on block
// const good = added
//   .filter((item) => item.block >= 0 && item.block != null)
//   .sort((a, b) => b.block - a.block)
//   .map((item) => ({
//     move: `${item.move}`,
//     startup: item.startup,
//     damage: item.damage,
//     range: item.range,
//     block: item.block,
//   }))
