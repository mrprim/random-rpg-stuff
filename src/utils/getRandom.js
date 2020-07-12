
import generators from '../generators'
import sample from './sample'

export default (names, options = {}) => {
  const name = getName(names)
  const generator = generators[name]

  let result = generator(options)
  if (options.format) {
    if (typeof value === 'object') {
      result.value = format(options.format, result.value)
    } else {
      result = format(options.format, result)
    }
  }

  return buildResult(name, options, result)
}

const format = (formatters, x) => {
  if (typeof formatters === 'function') {
    formatters = [formatters]
  }

  return formatters.reduce((val, f) => f(val), x)
}

const getName = name => {
  if (Array.isArray(name)) {
    return sample(name.map(getName))
  } else if (typeof name === 'object') {
    return sample(Object.values(name).map(getName))
  } else {
    return name.toUpperCase()
  }
}

const buildResult = (name, options, value) => {
  if (!options.details) return value

  return {
    name,
    options,
    value
  }
}
