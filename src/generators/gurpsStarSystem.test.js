const mocha = require('mocha')
const expect = require('expect')

const describe = mocha.describe
const it = mocha.it

const gurpsStarSystem = require('./gurpsStarSystem')

describe('generators.locations.gurpsStarSystem', () => {
  it('should return an object', function () {
    const result = gurpsStarSystem()
    expect(result).toBeTruthy()
    for (let i = 0; i < 10; i++) {
      console.log(JSON.stringify(gurpsStarSystem()))
      console.log(' ')
    }
  })

  it('has a toString function', () => {
    const result = gurpsStarSystem()
    expect(result.toString).toBeTruthy()
    expect(typeof result.toString).toBe('function')
    expect(typeof result.toString()).toBe('string')
    expect(typeof result.toString()).toBeTruthy()
  })
})
