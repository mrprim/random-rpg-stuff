import get, { names } from '../src/index'

describe('roll', () => {
  it('test', () => {
    // console.log(get(names.ANIMAL))
    // console.log(get([names.ANIMAL, names.BODYPART]))
    // console.log(get(names.NAME))
    console.log(get([names.CHARACTER], { format: s => s.toLowerCase() }))
    // console.log(get([names.CHARACTER.NOBILIS]))
    // console.log(get([names.CHARACTER.NOBILIS.POWER]))
    // console.log(get(names.ANIMAL))
    // console.log(get(names.ANIMAL))

    expect(true).toBeTruthy()
  })
})
