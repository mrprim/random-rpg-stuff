import excrucian from '../../src/generators/name.excrucian'

describe('generators.names.excrucian', () => {
  it('should return a string', function () {
    console.log(`
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    ${excrucian().value}
    `)
  })
})
