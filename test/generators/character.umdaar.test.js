const umdaar = require('./umdaar')

describe('generators.characters.umdaar', () => {
  it('should return an object', function () {
    const result = umdaar()
    expect(result).toBeTruthy()
  })

  it('has a toString function', () => {
    const result = umdaar()
    expect(result.toString).toBeTruthy()
    expect(typeof result.toString).toBe('function')
    expect(typeof result.toString()).toBe('string')
    expect(typeof result.toString()).toBeTruthy()
  })
})
