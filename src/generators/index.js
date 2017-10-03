const characters = require('./characters')
const names = require('./names')
const misc = require('./misc')
const things = require('./things')
const sample = require('../utils/sample')

module.exports = {
  characters: characters,
  names: names,
  misc: misc,
  things: things,
  random: () => sample([
    characters,
    names,
    misc,
    things
  ])()
}
