
import generators from '../generators'
import sample from './sample'

export default (generatorStrings, options = {}) => {
  if (typeof generatorStrings === 'string') {
    generatorStrings = [generatorStrings]
  }

  let value = sample(generatorStrings.map(mapGeneratorStringsToRandomValue))

  if (options.format) {
    value = format(options.format, value)
  }

  return value
}

const format = (formatters, x) => {
  if (typeof formatters === 'function') {
    formatters = [formatters]
  }

  return formatters.reduce((val, f) => f(val), x)
}

const mapGeneratorStringsToRandomValue = generatorString => {
  const generator = generators[generatorString]
  if (!generator) throw new Error(generatorString + ' is not a generator.')

  return generator()
}
