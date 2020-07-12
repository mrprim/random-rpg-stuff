import barbarian from '../../src/generators/name.barbarian'

describe('generators.names.barbarian', () => {
  it('should return a string', function () {
    const result = barbarian()
    expect(result).toBeTruthy()
    expect(typeof result).toEqual('string')
  })

  it('no part should be undefined/NaN', function () {
    for (let i = 0; i < 500; i++) {
      const result = barbarian()
      expect(result.indexOf('undefined')).toEqual(-1, 'is undefined')
      expect(result.indexOf('NaN')).toEqual(-1, 'is NaN')
    }
  })
})
