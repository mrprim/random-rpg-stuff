const mocha = require('mocha')
const expect = require('expect')

const describe = mocha.describe
const it = mocha.it

const oath = require('./oath')

describe('generators.misc.oath', () => {
  it('should return a string', function () {
    const result = oath()
    expect(result).toBeTruthy()
    expect(typeof result).toEqual('string')
  })

  it('no part should be undefined/NaN', function () {
    for (let i = 0; i < 500; i++) {
      const result = oath()
      expect(result.indexOf('undefined')).toEqual(-1, 'is undefined')
      expect(result.indexOf('NaN')).toEqual(-1, 'is NaN')
      console.log(result)
    }
  })
})
