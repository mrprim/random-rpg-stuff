const sample = require('../utils/sample')

const careful = ['Battlemind', 'Bishop', 'Cavalier', 'Cleric', 'Demon Hunter', 'Disciple', 'Druid', 'Geomancer', 'Guardian', 'Healer', 'Knight', 'Magehunter', 'Medic', 'Oracle', 'Priest', 'Runecaster', 'Seer', 'Sentinel', 'Shaman', 'Skyguard', 'Soulguard', 'Spiritwalker', 'Templar', 'Totemist', 'Warden', 'Weaver']
const clever = ['Adept', 'Alchemist', 'Arachnomancer', 'Arcanist', 'Archmage', 'Binder', 'Demonologist', 'Diabolist', 'Engineer', 'Inquisitor', 'Loremaster', 'Mage', 'Mystic', 'Navigator', 'Necromancer', 'Puppet Master', 'Sage', 'Spellcaster', 'Summoner', 'Tactician', 'Transmuter', 'Warlock', 'Witch', 'Witch Doctor']
const flashy = ['Archer', 'Bard', 'Bladesinger', 'Champion', 'Conjurer', 'Dancer', 'Dragonfire Adept', 'Elementalist', 'Emissary', 'Gladiator', 'Harbinger', 'Jester', 'Lord', 'Marshal', 'Master', 'Mystic Knight', 'Paladin', 'Paragon', 'Prophet', 'Siren', 'Skymage', 'Sorcerer', 'Soulcaster', 'Spelldancer', 'Spellsinger', 'Stormcaster', 'Stormlord', 'Stormsinger', 'Sunlord', 'Sunmaster', 'Warlord']
const forceful = ['Battlemage', 'Barbarian', 'Berserker', 'Brawler', 'Butcher', 'Crusader', 'Dark Knight', 'Death Knight', 'Doomcaster', 'Doomlord', 'Dragon Knight', 'Hellreaver', 'Legionnaire', 'Marauder', 'Marine', 'Mauler', 'Mercenary', 'Ravager', 'Samurai', 'Slayer', 'Valkyrie', 'Viking', 'Warmage', 'Warmaster', 'Warpriest', 'Warrior', 'Weapon Master']
const sneaky = ['Agent', 'Bounty Hunter', 'Chameleon', 'Demonbinder', 'Enchanter', 'Ghostwalker', 'Highwayman', 'Infiltrator', 'Ninja', 'Pirate', 'Rogue', 'Scavenger', 'Shadowblade', 'Shadowdancer', 'Shadowsmith', 'Shadowstalker', 'Spellthief', 'Spy', 'Spymaster', 'Stalker', 'Thief', 'Trapsmith', 'Trickster', 'Vampire']
const quick = ['Beastmaster', 'Blade Dancer', 'Corsair', 'Dragon Rider', 'Gunslinger', 'Hexblade', 'Hunter', 'Illusionist', 'Monk', 'Outrider', 'Ranger', 'Scout', 'Sniper', 'Soulknife', 'Spellsword', 'Swashbuckler', 'Tempest', 'Windwalker']
const classes = {
  careful,
  clever,
  flashy,
  forceful,
  sneaky,
  quick
}

function getClass (approach) {
  const rslt = classes[approach.toLowerCase()]
  return sample(rslt)
}

module.exports = {
  careful,
  clever,
  flashy,
  forceful,
  sneaky,
  quick,
  getClass
}
