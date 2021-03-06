import sample from '../utils/sample'
import nameGenerator from './name.barbarian'
import { roll4dF } from '../utils/dice'
import { getFateChartValue } from '../data/layout.fate'
import { getSynonym } from '../data/approaches.thesaurus'
import { getClass } from '../data/classes'

import bioforms from '../data/bioforms.fate'
import bugsAndFish from '../data/bugsAndFish.fate'
import herpsAndDinos from '../data/herpsAndDinos.fate'
import birdsAndMammals from '../data/birdsAndMammals.fate'
import powers from '../data/powers.fate'
import weapons from '../data/weapons.fate'
import adaptations from '../data/adaptations.fate'

const animalCharts = [bugsAndFish, herpsAndDinos, birdsAndMammals]
const stuntCharts = [powers, weapons, adaptations]

const getName = () => {
  const name = nameGenerator()
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const formatAnimalString = animal => {
  const animalOptions = animal.subvalue ? animal.subvalue.split(',') : animal.value.split(',')

  return sample(animalOptions).trim()
}

const getApproaches = setupApproaches => {
  const rslt = []
  const values = [3, 2, 2, 1, 1, 0]
  let approaches = ['Careful', 'Clever', 'Flashy', 'Forceful', 'Quick', 'Sneaky']

  while (setupApproaches.length > 0) {
    const approach = sample(setupApproaches)
    const value = values[0]
    rslt.push({ approach, value })
    setupApproaches = setupApproaches.filter(a => a !== approach)
    approaches = approaches.filter(a => a !== approach)
    values.shift()
  }

  while (approaches.length > 0) {
    const approach = sample(approaches)
    const value = values[0]
    rslt.push({ approach, value })
    approaches = approaches.filter(a => a !== approach)
    values.shift()
  }

  rslt.sort((a, b) => {
    if (a.value < b.value) {
      return +1
    }
    if (a.value > b.value) {
      return -1
    }
    if (a.approach < b.approach) {
      return -1
    }
    if (a.approach > b.approach) {
      return +1
    }
    return 0
  })
  return rslt
}

const getDescriptorFromApproaches = approaches => {
  return getSynonym(approaches[0].approach)
}

const getClassFromApproaches = approaches => {
  return getClass(approaches[0].approach)
}

const getStunt = previousStunt => {
  const stuntChart = sample(stuntCharts)
  let stunt = getFateChartValue(stuntChart, roll4dF())

  while (stunt === previousStunt) {
    stunt = getFateChartValue(stuntChart, roll4dF())
  }

  if (stuntChart === powers) {
    stunt.type = 'Power'
  } else if (stuntChart === adaptations) {
    stunt.type = 'Adaptation'
  } else if (stuntChart === weapons) {
    stunt.type = 'Weapon'
  }
  return stunt
}

const getAspects = (character = {}) => {
  return {
    bioform: getMainConcept(character)
  }
}

const getMainConcept = (character) => {
  const { type, animals, descriptor, characterClass } = character
  const animalString = animals.length ? animals.join('/').trim() + '-' : ''

  return (descriptor + ' ' + animalString + type + ' ' + characterClass).toLowerCase()
}

const characterGenerator = options => {
  const character = {}
  const animals = []
  const stunts = []
  //  const aspects = {}
  let approaches = []
  const setupApproaches = []
  let firstAnimalChart

  const bioform = getFateChartValue(bioforms, roll4dF())

  if (bioform.approach) {
    setupApproaches.push(bioform.approach)
  }

  if (bioform.animal) {
    const chart = sample(animalCharts)
    const animal = getFateChartValue(chart, roll4dF())
    const animalString = formatAnimalString(animal)

    animals.push(animalString)
    setupApproaches.push(animal.approach)
    firstAnimalChart = chart
  }

  if (bioform.animal && bioform.secondAnimal) {
    const filteredCharts = animalCharts.filter((chart, i) => firstAnimalChart !== chart)
    const chart = sample(filteredCharts)
    const animal = getFateChartValue(chart, roll4dF())
    const animalString = formatAnimalString(animal)

    animals.push(animalString)
    setupApproaches.push(animal.approach)
  }

  const stunt1 = getStunt()
  const stunt2 = getStunt(stunt1)

  stunts.push(stunt1)
  setupApproaches.push(sample(stunt1.approach.split('/')))
  stunts.push(stunt2)
  setupApproaches.push(sample(stunt2.approach.split('/')))

  approaches = getApproaches(setupApproaches)
  character.name = getName()
  character.type = bioform.value
  character.animals = animals
  character.stunts = stunts
  character.approaches = approaches
  character.descriptor = getDescriptorFromApproaches(approaches)
  character.characterClass = getClassFromApproaches(approaches)
  character.aspects = getAspects(character)

  return {
    value: getValue(character),
    detail: character
  }
}

const getValue = character => {
  const { name, type, animals, descriptor, characterClass } = character

  const animalString = animals.length ? animals.join('/').trim() + '-' : ''
  const bioform = descriptor + ' ' + animalString.replace('/', '-') + type + ' ' + characterClass

  return name + ' the ' + bioform
}

export default characterGenerator
