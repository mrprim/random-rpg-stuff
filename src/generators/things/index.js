const bodypart = require('./bodypart')
const weapon = require('./weapon')
const descriptors = require('./descriptors')
const animals = require('./animals')
const sample = require('../../utils/sample')

module.exports = {
  bodypart: bodypart,
  weapon: weapon,
  random: () => sample([
    bodypart,
    weapon,
    descriptors,
    animals
  ])()
}
