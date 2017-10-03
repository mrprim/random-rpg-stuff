const barbarian = require('./barbarian')
const sample = require('../../utils/sample')

module.exports = {
  barbarian: barbarian,
  random: () => sample([
    'barbarian'
  ])()
}
