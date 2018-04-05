const umdaar = require('./umdaar')
const classes = require('./classes')
const sample = require('../../utils/sample')

module.exports = {
  umdaar: umdaar,
  random: () => sample([
    umdaar,
    classes
  ])()
}
