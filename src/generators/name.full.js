import sample from '../utils/sample'
import * as names from '../constants/names'
import getRandom from '../utils/getRandom'
import { roll } from '../utils/dice'

export default () => {
  const parts = []
  if (roll(6) === 6) {
    parts.push(getRandom(names.DESCRIPTOR))
  }
  parts.push(getRandom([
    names.NAME.MODERN.GIVEN,
    names.NAME.MODERN.GIVEN,
    names.NAME.MODERN.GIVEN,
    names.NAME.MODERN.GIVEN,
    names.NAME.EXCRUCIAN,
    names.NAME.BARBARIAN
  ]))

  if (roll(6) >= 2) {
    parts.push(getRandom(names.NAME.MODERN.SURNAME))
  }

  return parts.join(' ')
}