const gurpsStarSystem = require('./gurpsStarSystem')
const sample = require('../../utils/sample')

module.exports = {
  gurpsStarSystem,
  random: () => sample([
    gurpsStarSystem
  ])()
}
