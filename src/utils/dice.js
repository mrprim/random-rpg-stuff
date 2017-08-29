function getRandomInteger (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function roll (sides) {
  return getRandomInteger(1, sides)
}

function roll1dF () {
  return getRandomInteger(-1, 1)
}

function rollNdF (n) {
  const results = []
  for (let i = 0; i < n; i++) {
    results.push(roll1dF())
  }
  return results
}

function roll4dF () {
  return rollNdF(4)
}

function countFateDieResults (rollArray = []) {
  const results = {
    plus: 0,
    minus: 0,
    zero: 0
  }
  return rollArray.reduce(function (rslt, roll) {
    rslt.plus += roll === 1 ? 1 : 0
    rslt.minus += roll === -1 ? 1 : 0
    rslt.zero += roll === 0 ? 1 : 0

    return rslt
  }, results)
}

module.exports = {
  roll,
  roll1dF,
  roll4dF,
  rollNdF,
  countFateDieResults
}
