import excrucian from '../../src/generators/name.excrucian'

describe('generators.names.excrucian', () => {
  it('should return a string', function () {
    const result = excrucian()
    expect(result).toBeTruthy()
    console.log(result)
  })
})
