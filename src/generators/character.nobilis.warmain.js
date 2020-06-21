import * as names from '../constants/names'
import pluralize from 'pluralize'
import getRandom from '../utils/getRandom'
import aVsAn from '../utils/aVsAn.js'

export default () => {
  const identity = getRandom([names.JOB, names.JOB, names.ANIMAL, names.CLASS])
  const adjective = getRandom([names.DESCRIPTOR])
  const estate = pluralize(getRandom(names.NOUN))

  return `${aVsAn(identity)} ${identity} who is the ${adjective} warmain who wields the test of ${pluralize(estate)}`
}
