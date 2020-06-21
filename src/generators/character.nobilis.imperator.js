import * as names from '../constants/names'
import pluralize from 'pluralize'
import getRandom from '../utils/getRandom'
import aVsAn from '../utils/aVsAn.js'
import sample from '../utils/sample'
import { roll } from '../utils/dice'

const formatEstateList = estates => {
  estates = [...estates]
  if (estates.length < 2) {
    return estates
  }

  const last = estates.pop()

  return `${estates.join(', ')} and ${last}`
}

export default () => {
  const estateCount = roll(4) + 2
  const estates = []
  for (let i = 0; i < estateCount; i++) {
    estates.push(pluralize(getRandom(names.NOUN)))
  }

  const type = sample(['angel', 'true god', 'light magister', 'dark magister', 'wild magister', 'devil', 'child of the ash'])
  const identity = getRandom([names.JOB, names.JOB, names.ANIMAL, names.CLASS])
  const adjective = getRandom([names.DESCRIPTOR])
  const estatesString = formatEstateList(estates)

  return `${aVsAn(identity)} ${identity} who is the ${adjective} ${type} who bears the estates of ${estatesString}`
}
