const characters = require('./characters')
const locations = require('./locations')
const names = require('./names')
const misc = require('./misc')
const things = require('./things')
const sample = require('../utils/sample')

module.exports = {
  characters,
  locations,
  names,
  misc,
  things,
  random: () => sample([
    characters,
    //    locations,
    names,
    misc,
    things
  ])()
}
