const sample = require('../utils/sample')
const barbarian = require('./barbarianName')
const bodyPart = require('./bodyPart')
const weapon = require('./weapon')
const toTitleCase = require('../utils/toTitleCase')

const thing = () => {
  return sample([bodyPart, weapon])()
}

export default  () => {
  const oaths = [
    'By the ' + toTitleCase(thing()) + ' of ' + toTitleCase(barbarian()) + '!',
    'By ' + toTitleCase(barbarian()) + '!',
    toTitleCase(barbarian()) + '\'s ' + toTitleCase(thing()) + '!'
  ]

  return sample(oaths)
}
