import sample from '../utils/sample'
import barbarian from './name.barbarian'
import bodyPart from './bodyPart'
import weapon from './weapon'
import toTitleCase from '../utils/toTitleCase'

const thing = () => {
  return sample([bodyPart, weapon])()
}

export default () => {
  const oaths = [
    'By the ' + toTitleCase(thing()) + ' of ' + toTitleCase(barbarian()) + '!',
    'By ' + toTitleCase(barbarian()) + '!',
    toTitleCase(barbarian()) + '\'s ' + toTitleCase(thing()) + '!'
  ]

  return sample(oaths)
}
