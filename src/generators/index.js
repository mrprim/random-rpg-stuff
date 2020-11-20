import * as names from '../constants/names'
import ANIMAL from './animal'
import NAME_BARBARIAN from './name.barbarian'
import NAME_EXCRUCIAN from './name.excrucian'
import BODY_PART from './bodyPart'
import CLASS from './class'
import DESCRIPTOR from './descriptor'
import JOB from './job'
import NOUN from './noun'
import OATH from './oath'
import CHARACTER_UMDAAR from './character.umdaar'
import CHARACTER_NOBILIS_POWER from './character.nobilis.power'
import CHARACTER_NOBILIS_IMPERATOR from './character.nobilis.imperator'
import CHARACTER_NOBILIS_MIMIC from './character.nobilis.mimic'
import CHARACTER_NOBILIS_STRATEGIST from './character.nobilis.strategist'
import CHARACTER_NOBILIS_WARMAIN from './character.nobilis.warmain'
import CHARACTER_NOBILIS_ZU from './character.nobilis.zu'
import WEAPON from './weapon'
import SPELL_FOTF from './spell.fotf'
import HAT from './hat'
import NAME_FULL from './name.full'
import NAME_MODERN_GIVEN from './name.modern.given'
import NAME_MODERN_SURNAME from './name.modern.surname'

export default {
  [names.ANIMAL]: ANIMAL,
  [names.NAME.FULL]: NAME_FULL,
  [names.NAME.BARBARIAN]: NAME_BARBARIAN,
  [names.NAME.MODERN.GIVEN]: NAME_MODERN_SURNAME,
  [names.NAME.MODERN.SURNAME]: NAME_MODERN_SURNAME,
  [names.NAME.EXCRUCIAN]: NAME_EXCRUCIAN,
  [names.BODYPART]: BODY_PART,
  [names.CLASS]: CLASS,
  [names.DESCRIPTOR]: DESCRIPTOR,
  [names.JOB]: JOB,
  [names.NOUN]: NOUN,
  [names.OATH]: OATH,
  [names.CHARACTER.UMDAAR]: CHARACTER_UMDAAR,
  [names.CHARACTER.NOBILIS.IMPERATOR]: CHARACTER_NOBILIS_IMPERATOR,
  [names.CHARACTER.NOBILIS.MIMIC]: CHARACTER_NOBILIS_MIMIC,
  [names.CHARACTER.NOBILIS.STRATEGIST]: CHARACTER_NOBILIS_STRATEGIST,
  [names.CHARACTER.NOBILIS.WARMAIN]: CHARACTER_NOBILIS_WARMAIN,
  [names.CHARACTER.NOBILIS.ZU]: CHARACTER_NOBILIS_ZU,
  [names.CHARACTER.NOBILIS.POWER]: CHARACTER_NOBILIS_POWER,
  [names.WEAPON]: WEAPON,
  [names.SPELL.FOTF]: SPELL_FOTF,
  [names.HAT]: HAT
}
