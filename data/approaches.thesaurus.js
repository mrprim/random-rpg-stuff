const sample = require('../utils/sample')

const careful = ['accurate', 'attentive', 'careful', 'choosy', 'circumspect', 'concerned', 'conscientious', 'deliberate', 'discreet', 'judicious', 'leery', 'meticulous', 'mindful', 'precise', 'prudent', 'rigorous', 'scrupulous', 'sober', 'thorough', 'thoughtful', 'vigilant', 'wary', 'alert', 'apprehensive', 'assiduous', 'chary', 'conservative', 'cool', 'exacting', 'fastidious', 'finicky', 'fussy', 'guarded', 'heedful', 'observant', 'particular', 'prim', 'protective', 'provident', 'punctilious', 'regardful', 'religious', 'self-disciplined', 'shy', 'solicitous', 'solid']
const clever = ['able', 'adept', 'adroit', 'alert', 'apt', 'astute', 'brainy', 'brilliant', 'cagey', 'canny', 'capable', 'clever', 'competent', 'crackerjack', 'cunning', 'deep', 'discerning', 'egghead', 'expert', 'foxy', 'gifted', 'good', 'handy', 'intelligent', 'inventive', 'keen', 'knowing', 'knowledgeable', 'many-sided', 'nimble', 'qualified', 'quick-witted', 'rational', 'resourceful', 'sagacious', 'savvy', 'sensible', 'sharp', 'shrewd', 'skilled', 'skillful', 'slick', 'sly', 'smart', 'sprightly', 'talented', 'versatile', 'wise', 'witty']
const flashy = ['flashy', 'garish', 'gaudy', 'glittering', 'glittery', 'jazzy', 'ostentatious', 'showy', 'snazzy', 'tacky', 'blatant', 'brazen', 'catchpenny', 'flaunting', 'florid', 'glaring', 'glitzy', 'loud', 'meretricious', 'ornate', 'sparkling', 'tasteless', 'tawdry', 'vulgar']
const forceful = ['forceful', 'cogent', 'commanding', 'compelling', 'convincing', 'dynamic', 'energetic', 'forcible', 'persuasive', 'strong', 'vehement', 'vigorous', 'violent', 'bullish', 'constraining', 'dominant', 'electric', 'elemental', 'gutsy', 'mighty', 'pithy', 'potent', 'powerhouse', 'puissant', 'punchy', 'steamroller', 'stringent', 'take-charge', 'telling', 'titanic', 'virile', 'weighty']
const sneaky = ['sneaky', 'devious', 'disingenuous', 'nasty', 'shifty', 'sly', 'tricky', 'base', 'contemptible', 'cowardly', 'deceitful', 'double-dealing', 'duplicitous', 'furtive', 'guileful', 'indirect', 'low', 'malicious', 'mean', 'recreant', 'secretive', 'slippery', 'sneaking', 'snide', 'stealthy', 'surreptitious', 'underhanded', 'unreliable', 'unscrupulous', 'untrustworthy', 'yellow']
const quick = ['quick', 'abrupt', 'active', 'agile', 'brief', 'brisk', 'cursory', 'energetic', 'expeditious', 'hasty', 'hurried', 'immediate', 'instantaneous', 'keen', 'nimble', 'rapid', 'sudden', 'swift', 'alert', 'express', 'fleet', 'flying', 'going', 'prompt', 'a move on', 'accelerated', 'animated', 'breakneck', 'curt', 'expeditive', 'harefooted', 'headlong', 'impatient', 'impetuous', 'lively', 'mercurial', 'perfunctory', 'snappy', 'spirited', 'sprightly', 'spry', 'winged']
const approaches = {
  careful,
  clever,
  flashy,
  forceful,
  sneaky,
  quick
}

function getSynonym (approach) {
  const synonyms = approaches[approach.toLowerCase()]
  return sample(synonyms)
}

module.exports = {
  careful,
  clever,
  flashy,
  forceful,
  sneaky,
  quick,
  getSynonym
}
