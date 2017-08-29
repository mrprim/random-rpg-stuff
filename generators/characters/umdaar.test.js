const mocha = require('mocha')
const expect = require('expect')

const describe = mocha.describe
const it = mocha.it

const umdaar = require('./umdaar')

describe('generators.characters.umdaar', () => {
  it('should return an object', function () {
    const result = umdaar()
    expect(result).toBeTruthy()
  })
})
