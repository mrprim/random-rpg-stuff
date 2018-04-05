const oath = require('./oath')
const descriptors = require('./descriptors')
const sample = require('../../utils/sample')

module.exports = {
  oath,
  descriptors,
  random: () => sample([
    oath,
    descriptors
  ])()
}
