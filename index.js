const generators = require('./src/generators')
const sample = require('./src/utils/sample')

const getRandom = (generatorStrings, option) => {
  if (typeof generatorStrings === 'string') {
    generatorStrings = [generatorStrings]
  }

  return sample(generatorStrings.map(mapGeneratorStringsToRandomValue))
}

const mapGeneratorStringsToRandomValue = generatorString => {
  const generator = generators[generatorString]
  if (!generator) throw new Error(generatorString + ' is not a generator.')

  return generator()
}

module.exports = getRandom
