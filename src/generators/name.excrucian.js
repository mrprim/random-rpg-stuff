import sample from '../utils/sample'
import { roll } from '../utils/dice'
import { primary, secondary, meanings } from '../data/excrucianNameParts'

const getPart = category => {
  const arr = Object.entries(category).map(([definition, values]) => ({ definition, values }))
  const data = sample(arr)
  const definition = data.definition
  const value = sample(data.values)

  return { definition, value }
}

const vowelRegex = /^[aeiouy]$/

const isConsonant = v => !vowelRegex.exec(v)

const getSuffix = () => {
  const k = roll(30)

  if (k === 1) {
    return { definition: 'DIMINUTIVE', value: 'din' }
  } else if (k === 2) {
    return { definition: 'FLOATING', value: sample(['ia', 'ias', 'ius', 'ja', 'ya']) }
  } else if (k === 3) {
    return { definition: 'LIGHT', value: sample(['lin', 'line', 'llino', 'llinus', 'lona']) }
  } else if (k === 4) {
    return { definition: 'NOMINALIZING', value: sample(['in', '\'in']) }
  } else if (k === 5) {
    return { definition: 'PATRONIZING', value: sample(['la', 'las', 'lash', 'lios', 'lla', 'ely']) }
  } else if (k === 6) {
    return { definition: 'DIMINUTIVE_POSSESSIVE', value: sample(['ca', 'ica', 'ikas', 'ka']) }
  } else if (k === 7) {
    return { definition: 'SIMPLE', value: sample(['us', 'dus', '']) }
  } else {
    return getPart(secondary)
  }
}

const getMeaning = (def1, def2) => {
  const isFlipped = ['PEOPLE_OF_THE_END', 'PEOPLE_OF_THE_VOID', 'TOWER'].includes(def1)

  if (def2 === 'DIMINUTIVE_POSSESSIVE') {
    return 'MY ' + translateMeaning(def1)
  } else if (def2 === 'DIMINUTIVE') {
    return sample(['DEAR ', 'SWEET ']) + translateMeaning(def1)
  } else if (def2 === 'FLOATING') {
    const meaning = translateMeaning(def1)
    return meaning + '.  JUST ' + meaning + '.'
  } else if (def2 === 'PATRONIZING') {
    const meaning = translateMeaning(def1)
    return sample(['LITTLE ' + meaning, meaning + 'LET', 'PRECIOUS ' + meaning])
  } else if (def2 === 'SIMPLE') {
    return translateMeaning(def1)
  } else if (isFlipped) {
    return translateMeaning(def2) + translateMeaning(def1 + '_FLIPPED')
  } else if (def2 === 'POSSESSIVE_CASE') {
    return translateMeaning(def1) + '\'S'
  }

  return translateMeaning(def1) + ' ' + translateMeaning(def2)
}

const translateMeaning = def => {
  return meanings[def] ? sample(meanings[def]) : def.replace('_SECONDARY', '')
}

export default () => {
  const prefix = getPart(primary)
  const suffix = getSuffix()

  let mid = ''
  if (isConsonant(prefix.value.charAt(prefix.length - 1)) && isConsonant(suffix.value.charAt(0))) {
    mid = sample(['a', 'e', 'i', 'o', 'u', 'y', 'ae', 'io', 'oo', 'ie', 'ou'])
  }
  const name = prefix.value + mid + suffix.value
  const meaning = getMeaning(prefix.definition, suffix.definition)
  return {
    value: name + ' (' + meaning + ')',
    name,
    meaning
  }
}
