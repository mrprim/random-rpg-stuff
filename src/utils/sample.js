const dice = require('./dice')

const sample = (x = []) => {
  if (!x || !x.length) {
    return
  }

  const l = x.length
  const i = dice.roll(l)
  return x[i - 1]
}

module.exports = sample
