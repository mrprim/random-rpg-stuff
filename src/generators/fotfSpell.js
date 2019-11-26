const spellParts = require('../data/spellParts.fotf')
const roll = require('../utils/dice').roll
const sample = require('../utils/sample')

module.exports = () => {
  const { element } = sample(spellParts)
  const { form } = sample(spellParts)
  const { adjective } = sample(spellParts)
  const { name1 } = sample(spellParts)
  const { name2 } = sample(spellParts)
  const name = (name1 + name2).replace('--', '')

  const template = roll(12)

  switch (template) {
    case 1:
    case 2:
      return `${element} ${form}`

    case 3:
    case 4:
      return `${adjective} ${form}`
    case 5:
    case 6:
      return `${adjective} ${element}`
    case 7:
      return `${form} of ${element}`
    case 8:
      return `${form} of ${adjective} ${element}`
    case 9:
      return `${name}’s ${adjective} ${form}`
    case 10:
      return `${name}’s ${adjective} ${element}`
    case 11:
      return `${name}’s ${form} of ${element}`
    case 12:
      return `${name}’s ${element} ${form}`
  }
}
