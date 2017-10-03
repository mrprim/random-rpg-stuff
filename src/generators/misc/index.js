const oath = require('./oath')
const sample = require('../../utils/sample')

module.exports = {
  oath: oath,
  random: () => sample([
    oath
  ])()
}
