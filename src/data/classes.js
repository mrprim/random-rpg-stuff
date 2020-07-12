import sample from '../utils/sample'

const careful = ['battlemind', 'bishop', 'cavalier', 'cleric', 'demon hunter', 'disciple', 'druid', 'geomancer', 'guardian', 'healer', 'knight', 'magehunter', 'medic', 'oracle', 'priest', 'runecaster', 'seer', 'sentinel', 'shaman', 'skyguard', 'soulguard', 'spiritwalker', 'templar', 'totemist', 'warden', 'weaver']
const clever = ['adept', 'alchemist', 'arachnomancer', 'arcanist', 'archmage', 'binder', 'demonologist', 'diabolist', 'engineer', 'inquisitor', 'loremaster', 'mage', 'mystic', 'navigator', 'necromancer', 'puppet master', 'sage', 'spellcaster', 'summoner', 'tactician', 'transmuter', 'warlock', 'witch', 'witch doctor']
const flashy = ['archer', 'bard', 'bladesinger', 'champion', 'conjurer', 'dancer', 'dragonfire adept', 'elementalist', 'emissary', 'gladiator', 'harbinger', 'jester', 'lord', 'marshal', 'master', 'mystic knight', 'paladin', 'paragon', 'prophet', 'siren', 'skymage', 'sorcerer', 'soulcaster', 'spelldancer', 'spellsinger', 'stormcaster', 'stormlord', 'stormsinger', 'sunlord', 'sunmaster', 'warlord']
const forceful = ['battlemage', 'barbarian', 'berserker', 'brawler', 'butcher', 'crusader', 'dark knight', 'death knight', 'doomcaster', 'doomlord', 'dragon knight', 'hellreaver', 'legionnaire', 'marauder', 'marine', 'mauler', 'mercenary', 'ravager', 'samurai', 'slayer', 'valkyrie', 'viking', 'warmage', 'warmaster', 'warpriest', 'warrior', 'weapon master']
const sneaky = ['agent', 'bounty hunter', 'chameleon', 'demonbinder', 'enchanter', 'ghostwalker', 'highwayman', 'infiltrator', 'ninja', 'pirate', 'rogue', 'scavenger', 'shadowblade', 'shadowdancer', 'shadowsmith', 'shadowstalker', 'spellthief', 'spy', 'spymaster', 'stalker', 'thief', 'trapsmith', 'trickster', 'vampire']
const quick = ['beastmaster', 'blade dancer', 'corsair', 'dragon rider', 'gunslinger', 'hexblade', 'hunter', 'illusionist', 'monk', 'outrider', 'ranger', 'scout', 'sniper', 'soulknife', 'spellsword', 'swashbuckler', 'tempest', 'windwalker']
const classes = {
  careful,
  clever,
  flashy,
  forceful,
  sneaky,
  quick
}

const getClass = approach => {
  const rslt = classes[approach.toLowerCase()]
  return sample(rslt)
}

export {
  careful,
  clever,
  flashy,
  forceful,
  sneaky,
  quick,
  getClass
}
