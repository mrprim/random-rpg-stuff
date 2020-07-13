import excrucian from '../../src/generators/name.excrucian'
import { primary, secondary, meanings } from '../../src/data/excrucianNameParts'

describe('generators.names.excrucian', () => {
  it('test primary/secondary/meanings', () => {
    const meaningKeys = Object.keys(meanings)

    let doubled = 'DOUBLED UP\n'
    let missing = 'MISSING\n'
    meaningKeys.map(m => {
      if (primary[m] && secondary[m]) {
        doubled += '-' + m + '\n'
      }

      if (!primary[m] && !secondary[m]) {
        missing += '-' + m + '\n'
      }
    })

    console.log(doubled)
    console.log(missing)
  })

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
