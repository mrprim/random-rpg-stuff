import * as names from '../constants/names'
import ANIMAL from './animal'
import NAME_BARBARIAN from './name.barbarian'
import BODY_PART from './bodyPart'
import CLASS from './class'
import DESCRIPTOR from './descriptor'
import JOB from './job'
import NOUN from './noun'
import OATH from './oath'
import CHARACTER_UMDAAR from './character.umdaar'
import CHARACTER_NOBILIS_POWER from './character.nobilis.power'
import WEAPON from './weapon'
import SPELL_FOTF from './spell.fotf'
import HAT from './hat'

export default {
  [names.ANIMAL]: ANIMAL,
  [names.NAME.BARBARIAN]: NAME_BARBARIAN,
  [names.BODYPART]: BODY_PART,
  [names.CLASS]: CLASS,
  [names.DESCRIPTOR]: DESCRIPTOR,
  [names.JOB]: JOB,
  [names.NOUN]: NOUN,
  [names.OATH]: OATH,
  [names.CHARACTER.UMDAAR]: CHARACTER_UMDAAR,
  [names.CHARACTER.NOBILIS.POWER]: CHARACTER_NOBILIS_POWER,
  [names.WEAPON]: WEAPON,
  [names.SPELL.FOTF]: SPELL_FOTF,
  [names.HAT]: HAT
}
