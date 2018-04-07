var roll = require('../utils/dice').roll

var rollThree = () => roll(6) + roll(6) + roll(6)

var between = (val, min, max) => {
  return val >= min && val <= max
}

function getStarCount() {
  var val = rollThree()

  if (between(val, 3, 10)) {
    return [{}]
  } else if (between(val, 11, 15)) {
    return [{}, {}]
  } else {
    return [{}, {}, {}]
  }
}

function getSystemProperties() {
  const val1 = rollThree()
  const properties = {}
  let base, a, b

  if (val1 === 3) {
    properties.population = 'Extreme I'
    base = 0
    a = 0
    b = 0
  } else if (between(val1, 4, 6)) {
    properties.population = 'Young I'
    base = 0.1
    a = 0.3
    b = 0.05
  } else if (between(val1, 7, 10)) {
    properties.population = 'Intermediate I'
    base = 2
    a = 0.6
    b = 0.1
  } else if (between(val1, 11, 14)) {
    properties.population = 'Old I'
    base = 5.6
    a = 0.6
    b = 0.1
  } else if (between(val1, 15, 17)) {
    properties.population = 'Intermediate II'
    base = 8
    a = 0.6
    b = 0.1
  } else {
    properties.population = 'Extreme II'
    base = 10
    a = 0.6
    b = 0.1
  }

  properties.age = (base) + (roll(6) - a - 1) + (roll(6) - b - 1)
  return properties
}
function getStarMass() {
  var val1 = rollThree()
  var val2 = rollThree()

  switch (val1) {
    case 3:
      if (between(val2, 3, 10)) {
        return 2
      } else {
        return 1.9
      }
    case 4:
      if (between(val2, 3, 8)) {
        return 1.8
      } else if (between(val2, 9, 11)) {
        return 1.7
      } else {
        return 1.6
      }
    case 5:
      if (between(val2, 3, 7)) {
        return 1.5
      } else if (between(val2, 8, 10)) {
        return 1.45
      } else if (between(val2, 11, 12)) {
        return 1.40
      } else {
        return 1.35
      }
    case 6:
      if (between(val2, 3, 7)) {
        return 1.3
      } else if (between(val2, 8, 9)) {
        return 1.25
      } else if (val2 === 10) {
        return 1.20
      } else if (between(val2, 11, 12)) {
        return 1.15
      } else {
        return 1.10
      }
    case 7:
      if (between(val2, 3, 7)) {
        return 1.05
      } else if (between(val2, 8, 9)) {
        return 1.00
      } else if (val2 === 10) {
        return 0.95
      } else if (between(val2, 11, 12)) {
        return 0.90
      } else {
        return 0.85
      }
    case 8:
      if (between(val2, 3, 7)) {
        return 0.8
      } else if (between(val2, 8, 9)) {
        return 0.75
      } else if (val2 === 10) {
        return 0.7
      } else if (between(val2, 11, 12)) {
        return 0.65
      } else {
        return 0.6
      }
    case 9:
      if (between(val2, 3, 8)) {
        return 0.55
      } else if (between(val2, 9, 11)) {
        return 0.5
      } else {
        return 0.45
      }
    case 10:
      if (between(val2, 3, 8)) {
        return 0.40
      } else if (between(val2, 9, 11)) {
        return 0.35
      } else {
        return 0.30
      }
    case 11:
      return 0.25
    case 12:
      return 0.20
    case 13:
      return 0.15
    default:
      return 0.1
  }
}

function getStarProperties(star, age) {
  const properties = {}
  let type, temp, lMin, lMax, mSpan, sSpan, gSpan

  switch (star.mass) {
    case 0.1:
      type = 'M7'
      temp = 3100
      lMin = 0.0012
      break
    case 0.15:
      type = 'M6'
      temp = 3200
      lMin = 0.0036
      break
    case 0.2:
      type = 'M5'
      temp = 3200
      lMin = 0.0079
      break
    case 0.25:
      type = 'M4'
      temp = 3300
      lMin = 0.015
      break
    case 0.3:
      type = 'M4'
      temp = 3300
      lMin = 0.024
      break
    case 0.35:
      type = 'M3'
      temp = 3400
      lMin = 0.037
      break
    case 0.4:
      type = 'M2'
      temp = 3500
      lMin = 0.054
      break
    case 0.45:
      type = 'M1'
      temp = 3600
      lMin = 0.07
      lMax = 0.8
      mSpan = 70
      break
    case 0.5:
      type = 'M0'
      temp = 3800
      lMin = 0.09
      lMax = 0.11
      mSpan = 59
      break
    case 0.55:
      type = 'K8'
      temp = 4000
      lMin = 0.11
      lMax = 0.15
      mSpan = 50
      break
    case 0.6:
      type = 'K6'
      temp = 4200
      lMin = 0.13
      lMax = 0.2
      mSpan = 42
      break
    case 0.65:
      type = 'K5'
      temp = 4400
      lMin = 0.15
      lMax = 0.25
      mSpan = 37
      break
    case 0.7:
      type = 'K4'
      temp = 4600
      lMin = 0.19
      lMax = 0.35
      mSpan = 30
      break
    case 0.75:
      type = 'K2'
      temp = 4900
      lMin = 0.23
      lMax = 0.48
      mSpan = 24
      break
    case 0.8:
      type = 'K0'
      temp = 5200
      lMin = 0.28
      lMax = 0.65
      mSpan = 20
      break
    case 0.85:
      type = 'G8'
      temp = 5400
      lMin = 0.36
      lMax = 0.84
      mSpan = 17
      break
    case 0.9:
      type = 'G6'
      temp = 5500
      lMin = 0.45
      lMax = 1
      mSpan = 14
      break
    case 0.95:
      type = 'G4'
      temp = 5700
      lMin = 0.56
      lMax = 1.3
      mSpan = 12
      sSpan = 1.8
      gSpan = 1.1
      break
    case 1:
      type = 'G2'
      temp = 5800
      lMin = 0.68
      lMax = 1.6
      mSpan = 10
      sSpan = 1.6
      gSpan = 1
      break
    case 1.05:
      type = 'G1'
      temp = 5900
      lMin = 0.87
      lMax = 1.9
      mSpan = 8.8
      sSpan = 1.4
      gSpan = 0.8
      break
    case 1.1:
      type = 'G0'
      temp = 6000
      lMin = 1.1
      lMax = 2.2
      mSpan = 7.7
      sSpan = 1.2
      gSpan = 0.7
      break
    case 1.15:
      type = 'F9'
      temp = 6100
      lMin = 1.4
      lMax = 2.6
      mSpan = 6.7
      sSpan = 1.0
      gSpan = 0.6
      break
    case 1.2:
      type = 'F8'
      temp = 6300
      lMin = 1.7
      lMax = 3
      mSpan = 5.9
      sSpan = 0.9
      gSpan = 0.6
      break
    case 1.25:
      type = 'F7'
      temp = 6400
      lMin = 2.1
      lMax = 3.5
      mSpan = 5.2
      sSpan = 0.8
      gSpan = 0.5
      break
    case 1.3:
      type = 'F6'
      temp = 6500
      lMin = 2.5
      lMax = 3.9
      mSpan = 4.6
      sSpan = 0.7
      gSpan = 0.4
      break
    case 1.35:
      type = 'F5'
      temp = 6600
      lMin = 3.1
      lMax = 4.5
      mSpan = 4.1
      sSpan = 0.6
      gSpan = 0.4
      break
    case 1.4:
      type = 'F4'
      temp = 6700
      lMin = 3.7
      lMax = 5.1
      mSpan = 3.7
      sSpan = 0.6
      gSpan = 0.4
      break
    case 1.45:
      type = 'F3'
      temp = 6900
      lMin = 4.3
      lMax = 5.7
      mSpan = 3.3
      sSpan = 0.5
      gSpan = 0.3
      break
    case 1.5:
      type = 'F2'
      temp = 7000
      lMin = 5.1
      lMax = 6.5
      mSpan = 3
      sSpan = 0.5
      gSpan = 0.3
      break
    case 1.6:
      type = 'F0'
      temp = 7300
      lMin = 6.7
      lMax = 8.2
      mSpan = 2.5
      sSpan = 0.4
      gSpan = 0.2
      break
    case 1.7:
      type = 'A9'
      temp = 7500
      lMin = 8.6
      lMax = 10
      mSpan = 2.1
      sSpan = 0.3
      gSpan = 0.2
      break
    case 1.8:
      type = 'A7'
      temp = 7800
      lMin = 11
      lMax = 13
      mSpan = 1.8
      sSpan = 0.3
      gSpan = 0.2
      break
    case 1.9:
      type = 'A6'
      temp = 8000
      lMin = 13
      lMax = 16
      mSpan = 1.5
      sSpan = 0.2
      gSpan = 0.1
      break
    case 2:
      type = 'A5'
      temp = 8200
      lMin = 16
      lMax = 20
      mSpan = 1.3
      sSpan = 0.2
      gSpan = 0.1
      break
  }

  properties.class = getClass(age, mSpan, sSpan, gSpan)

  switch (properties.class) {
    case 'main sequence':
      properties.luminosity = getMainSequenceLuminosity(age, mSpan, lMin, lMax)
      properties.temperature = temp + (roll(200) - 100)
      break
    case 'subgiant':
      properties.luminosity = lMax * (roll(20) + 90 * 0.01)
      properties.temperature = getSubgiantTemperature(temp, age, sSpan)
      break
    case 'giant':
      properties.luminosity = varyByTenPercent(25 * (lMax * (roll(20) + 90 * 0.01)))
      properties.temperature = getGiantTemperature()
      break
    case 'white dwarf':
      properties.mass = (roll(6) + roll(6) - 2) * 0.05 + 0.9
      break
  }
  return properties
}

function getClass(age, mSpan, sSpan, gSpan) {
  if (age <= mSpan) {
    return 'main sequence'
  } else if (age <= (mSpan + sSpan)) {
    return 'subgiant'
  } else if (age <= (mSpan + sSpan + gSpan)) {
    return 'giant'
  } else {
    return 'white dwarf'
  }
}

function getMainSequenceLuminosity(age, mSpan, lMin, lMax) {
  if (!lMax) {
    return varyByTenPercent(lMin)
  }
  return lMin + ((age / mSpan) * (lMax - lMin))
}

function varyByTenPercent(val) {
  return val * (roll(20) + 90 * 0.01)
}
function getSubgiantTemperature(temp, age, sSpan) {
  return temp - ((age / sSpan) * (temp - 4800))
}

function getGiantTemperature() {
  return (roll(6) + roll(6) - 2) * 200 + 3000
}

function generateSystem() {
  const system = {}
  system.stars = getStarCount()
  var sysProps = getSystemProperties()
  system.age = sysProps.age
  system.population = sysProps.population
  system.stars.map((star, i) => {
    if (i === 0) star.primary = true
    star.mass = getStarMass()
    const properties = getStarProperties(star, system.age)
    star.mass = properties.mass || star.mass
    star.luminosity = properties.luminosity
    star.temperature = properties.temperature
    star.class = properties.class
    return star
  })
  return system
}

module.exports = generateSystem
