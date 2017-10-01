const mocha = require('mocha')
const expect = require('expect')

const describe = mocha.describe
const it = mocha.it

const sample = require('./sample')

describe('sample', () => {
  it('no part should be undefined/NaN', function () {
    const arr = [1, 2, 3, 4, 5, 6]
    const result = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0
    }

    for (let i = 0; i < 500; i++) {
      const r = sample(arr)
      result[r]++
    }
    expect(result[0]).toEqual(0)
    expect(result[7]).toEqual(0)
  })
})
