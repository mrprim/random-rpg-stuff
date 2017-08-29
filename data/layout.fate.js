const countFateDieResults = require('../utils/dice').countFateDieResults

const layout = [
  {
    pos: 'a',
    row: 0,
    column: 0
  },
  {
    pos: 'b',
    row: 0,
    column: 1
  },
  {
    pos: 'c',
    row: 0,
    column: 2
  },
  {
    pos: 'd',
    row: 0,
    column: 3
  },
  {
    pos: 'e',
    row: 0,
    column: 4
  },
  {
    pos: 'f',
    row: 1,
    column: 0
  },
  {
    pos: 'g',
    row: 1,
    column: 1
  },
  {
    pos: 'h',
    row: 1,
    column: 2
  },
  {
    pos: 'i',
    row: 1,
    column: 3
  },
  {
    pos: 'j',
    row: 2,
    column: 0
  },
  {
    pos: 'k',
    row: 2,
    column: 1
  },
  {
    pos: 'l',
    row: 2,
    column: 2
  },
  {
    pos: 'm',
    row: 3,
    column: 0
  },
  {
    pos: 'n',
    row: 3,
    column: 1
  },
  {
    pos: 'o',
    row: 4,
    column: 0
  }
]

function getPosFromFateRoll(roll = []) {
  const { plus, minus } = countFateDieResults(roll)
  return layout.reduce(function (pos, obj) {
    if (obj.column === plus && obj.row === minus) {
      pos = obj.pos
    }
    return pos
  }, 'a')
}

function getFateChartValue(chart = {}, roll = []) {
  const pos = getPosFromFateRoll(roll)
  const val = chart.filter((value) => value.pos === pos)
  return val.length && val[0]
}

module.exports = {
  layout,
  getFateChartValue,
  getPosFromFateRoll
}
