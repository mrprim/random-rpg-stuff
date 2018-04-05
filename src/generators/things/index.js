const bodypart = require('./bodypart')
const weapon = require('./weapon')
const animals = require('./animals')
const sample = require('../../utils/sample')

module.exports = {
  bodypart,
  weapon,
  animals,
  random: () => sample([
    bodypart,
    weapon,
    animals
  ])()
}
