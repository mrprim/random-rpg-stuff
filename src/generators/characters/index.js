const umdaar = require('./umdaar')
const sample = require('../../utils/sample')

module.exports = {
  umdaar: umdaar,
  random: () => sample([
    umdaar
  ])()
}
