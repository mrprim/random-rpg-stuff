const bodypart = require('./bodypart')
const weapon = require('./weapon')
const sample = require('../../utils/sample')
module.exports = {
  bodypart: bodypart,
  weapon: weapon,
  random: () => sample([
    bodypart,
    weapon
  ])()
}
