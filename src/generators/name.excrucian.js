import sample from '../utils/sample'
import { roll } from '../utils/dice'

const primary = {
  AESTHETIC: ['Fred', 'Fret', 'Frid', 'Frit'],
  ANCIENT: ['Ald', 'Cam', 'Gamal'],
  ARMY: ['Ar', 'Arg', 'Har', 'Harja'],
  ATTENTION: ['Aid', 'Ed'],
  AXE_BLOOD: ['Bil', 'Bel', 'Pel'],
  BATTLE: ['Ad', 'Hadu', 'Hath', 'Ba', 'Bad', 'Bat', 'Paid', 'Pat'],
  BEAUTY: ['Beu'],
  BELOVED: ['Leov', 'Leub', 'Liuv'],
  BOLD: ['Balt', 'Balth'],
  BLADE: ['As'],
  BLESSED: ['Ala', 'Alla', 'Alo'],
  BOAR: ['Eber', 'Ebr'],
  BRAVE: ['Amal', 'Athal', 'Ata', 'Amm', 'Hem', 'Hart', 'Herle'],
  BRIGHT: ['Glad'],
  BURNING: ['Bran', 'Brands', 'Gabr'],
  FANTASTIC: ['Recca', 'Recce', 'Reki', 'Reic', 'Rici', 'Riq'],
  FASTMOVING: ['Ra', 'Ran', 'Rana', 'Rani'],
  FEARSOME: ['Mata'],
  FEAST: ['Namat'],
  FICKLE: ['Alb', 'Av'],
  FIGHTING: ['Gonth', 'Gund', 'Gunt', 'Gunth'],
  FOREIGN: ['Ali', 'Erland'],
  FOREST: ['Ved', 'Vet', 'Vid', 'Vit', 'Vith', 'Wit', 'Witt'],
  FORMLESS: ['Pelen'],
  FORTHCOMING: ['Bi'],
  FUZZY: ['Lamp'],
  GENEROUS: ['Gaf', 'Geb', 'Gef'],
  GENTLE_KIND: ['Sel'],
  GHOST: ['Gual', 'Qual', 'Val', 'Wal'],
  GLEAMING: ['Glis'],
  GOLDEN: ['Corin'],
  GOOD: ['Go', 'God', 'Godi', 'Goi', 'Gud'],
  GREAT: ['Erman', 'Herman', 'Hermen', 'Hermin'],
  GRIM: ['Gal'],
  GRINDER: ['Mal'],
  GUARDIAN: ['Hleo', 'Leo'],
  HAND: ['Teik', 'Tex'],
  HARSH: ['Ard', 'Aurd', 'Aord', 'Ord'],
  HEART: ['Kar'],
  HELM: ['Grim', 'Kriem'],
  HIDDEN: ['Fel', 'Fil', 'Fili'],
  HOMEBREWED: ['Gai'],
  HOME: ['Emm', 'Heim'],
  INFUSED: ['Cast', 'Gast'],
  INHERITED: ['Ath'],
  INNER: ['Semse'],
  IRON: ['Eisarn', 'Esme', 'Hisarn'],
  JOYFUL: ['Guin', 'Quin', 'Vin', 'Vinid', 'Vinith'],
  KIN: ['Cuni'],
  LAW: ['Dulci', 'Dolci', 'Ducli', 'Dukli'],
  LIKENESS: ['Lec', 'Leik', 'Lex', 'Lic', 'Liec'],
  LITTLE: ['Un'],
  LOREKEEPER: ['Gan'],
  LOSTLING: ['Cec'],
  MAJESTIC: ['Valens', 'Valent'],
  MANOR: ['Sa', 'Sala', 'Salla'],
  MERRY: ['Gail', 'Gel'],
  MY: ['Khe', 'Ky', 'Sue'],
  NASCENT: ['Pep'],
  NEST: ['Nida'],
  NOT: ['Goma', 'Ni'],
  ONE: ['Aun', 'On'],
  ORACLE: ['Cixi'],
  PEOPLE: ['Folch', 'Laod', 'Leud', 'Liut'],
  PEOPLE_OF_THE_END: ['Galin', 'Galind'],
  PEOPLE_OF_THE_VOID: ['Caud', 'Gaud', 'Gaut', 'Gouth', 'Joce'],
  PILLAR: ['Tul'],
  PLAY: ['Helde', 'Heldu', 'Hilde', 'Ildi'],
  PRECIOUS: ['Pras'],
  PRODIGIOUS: ['Thoris', 'Thraus', 'Thraf', 'Thur', 'Thuris', 'Tur', 'Turis'],
  PROMISED: ['Aithan', 'Atan', 'Athan', 'Tan'],
  RAT: ['Raus', 'Res'],
  REDEMPTION: ['Gist', 'Qist'],
  REFORGED: ['Haid'],
  REMNANT: ['An'],
  REQUIEM: ['Sis', 'Ses'],
  RESTFUL: ['Rhim'],
  RESULT: ['Ioch', 'Yoch'],
  RING_SHAPED: ['Baug', 'Hring', 'Ring'],
  RIVER: ['Ib'],
  ROYAL: ['Aquinc', 'Quinc'],
  RUINED: ['Laid', 'Laith'],
  SACRAL: ['Himne', 'Hine', 'Hinne'],
  SAPPHIRE: ['Saf', 'Saph', 'Sav'],
  SATED: ['Sada'],
  SCHOLAR: ['Canna', 'Canno', 'Cn'],
  SEIZE: ['In', 'Ind'],
  SEXTUPLE: ['Sen'],
  SHELLCOVERED: ['Brun'],
  SHINING: ['Luc'],
  SICKLE: ['Gals'],
  SILVERED: ['Silf', 'Silv'],
  SPEAR: ['Gals', 'Gen', 'Gens', 'Ges', 'Gis', 'Giso', 'Geis'],
  SPLENDROUS: ['Vult', 'Vultu', 'Ultro'],
  STOMACH: ['Vamb', 'Wamb'],
  STRATEGIST: ['Mod', 'Modah', 'Mon', 'Mun', 'Mund', 'Tancr'],
  STRONG: ['Kad', 'Vald', 'Suatri'],
  SUBLIME: ['Ercan', 'Erchen', 'Eorcen', 'Helchen'],
  SUMMER: ['Chinda', 'Sans'],
  TAMELESS: ['Hed', 'Het'],
  TANGLED: ['Bess'],
  TEARFUL: ['Grad', 'Grat'],
  TEMPORAL: ['Chron'],
  THREADBARE: ['Fa', 'Pha', 'Tas', 'Zaz'],
  THORNCOVERED: ['Sar', 'Ser'],
  THUNDEROUS: ['Theod', 'Theud', 'Thiud', 'Tot'],
  TORMENTED: ['Lod'],
  TOWER: ['Cl', 'Madel'],
  TRANSIENT: ['Hlith', 'Lith'],
  TRAVELER: ['Farn', 'Fran'],
  TREASURED: ['Ans', 'Os', 'Osd'],
  TRIPLE: ['Tri'],
  TREACHEROUS: ['Tain'],
  TUFF: ['Tuf'],
  UNRIVALED: ['Visi'],
  UNWATCHED: ['Cel', 'Kall'],
  URGED: ['Hrad', 'Rad', 'Rag', 'Ragin', 'Ragn', 'Rat', 'Ret', 'Radis', 'Re'],
  VALUING_THE_WORLDLY: ['Gild'],
  VAMPIRE: ['Bruc'],
  VICTORY: ['Nik', 'Send', 'Sind', 'Sint', 'Si'],
  VIRTUOUS: ['Aria'],
  VOICE: ['Ced', 'Ceth'],
  WANDERER: ['Guandal', 'Vandal', 'Vandil'],
  WAR: ['Er', 'Era', 'Ere', 'Eri', 'Her', 'Euse'],
  WATCH: ['Sun', 'Sunn'],
  WATERY_VOID: ['Lag'],
  WEALTH: ['Adh', 'Aud', 'Od', 'Or'],
  WILD: ['Bair', 'Ber', 'Bera', 'Bere', 'Beri', 'Beru', 'Bess'],
  WINDBLOWN: ['Thras', 'Thrasa'],
  WOLF: ['Ulf', 'Wulf'],
  WORLDENDING: ['Ach', 'Act', 'Oct', 'Ag', 'Agn', 'Eg', 'Agr', 'Ei'],
  WORLD: ['Ab', 'Abh', 'Avh'],
  WYRD: ['Vyrd', 'Wyrd', 'Wyrth', 'Yrd'],
  WYRDLING: ['Carl', 'Cyril'],
  WYRM: ['Drog'],
  YES_BUT: ['Gaath', 'Gaatha', 'Gutth'],
  YOUNG: ['Te', 'The', 'Thi', 'Ving', 'Wing', 'Jung'],
  UNKNOWN: ['Ao', 'Au', 'O']
}

const secondary = {
  ABSCESS: ['covefa'],
  ARMY: ['airh', 'aris', 'arius', 'ares', 'eiro'],
  BATTLEFIELD: ['bad', 'baudes', 'gond', 'gund', 'gunde', 'had', 'va', 'vig', 'wig'],
  BEAN: ['bian'],
  BORDER: ['marca', 'marka', 'merca'],
  CHARGE: ['vindra'],
  CHILD: ['chan', 'chun', 'cine', 'kun'],
  CHRYSALIS: ['man'],
  CLAY: ['cadican', 'gadigan'],
  COMMANDER: ['aric', 'eric', 'ric', 'rich', 'ricus', 'ry'],
  CONSORT: ['vius', 'viv'],
  CROWN: ['iel', 'iela', 'il', 'ila', 'uil', 'uila'],
  DARING: ['bald', 'anda', 'nand', 'nanda', 'nant', 'nanta'],
  DAY: ['dag', 'dagis', 'tag', 'tach'],
  DEATH: ['das', 'thas'],
  DESIRE: ['gern', 'digern'],
  DESTROYER: ['ariman'],
  EAST: ['ester', 'estre'],
  ELEGY: ['treik', 'tric', 'trix', 'vayne'],
  ENDING: ['ander'],
  ENEMY: ['drasteia'],
  FEAST: ['nault'],
  FEVER: ['mar', 'maris', 'mer', 'meris', 'mers', 'mir', 'miris', 'quevir'],
  FIRE: ['brand'],
  FLOWERS: ['kai'],
  FOREST: ['vid', 'vida'],
  GAME: ['hild', 'hilda', 'hilt', 'ilda', 'ildi'],
  GOOD: ['co', 'gud', 'mad', 'maph', 'math'],
  GRAVE: ['stila', 'stilla', 'vald'],
  GREED: ['avi'],
  GUARD: ['senta', 'sontha', 'suentha', 'suintha', 'suntha', 'svintha', 'swinth', 'swintha', 'swinthe', 'swith'],
  GUEST: ['gast', 'gaster', 'gastes', 'bastus'],
  HAT: ['elm'],
  HEART: ['hard', 'hart'],
  HONOR: ['rin', 'rina', 'ryna'],
  HOUSE: ['gard', 'garde'],
  JOY: ['uin', 'win'],
  JUSTICE: ['ce'],
  KEEP: ['bur', 'but', 'buth', 'bod', 'rebic'],
  LIFE: ['an', 'ana', 'en', 'enne', 'ian', 'iana', 'ienne', 'gaya', 'geniya'],
  LIGHT: ['de'],
  LIKENESS: ['lec', 'leik'],
  LOCAL_ARISTOCRAT: ['dau', 'dav', 'dava'],
  LOVE: ['bia', 'leova', 'leuva', 'lieva', 'liva', 'live', 'luva'],
  MERRIMENT: ['ba', 'bas', 'bias', 'bius'],
  MONSTER: ['is'],
  ONE: ['in'],
  PASSAGE: ['hlid', 'hlida', 'hlith', 'hlitha', 'litha', 'lithae'],
  PEACE: ['sten', 'stena', 'stina'],
  PERSEVERANCE: ['fredus', 'frid', 'fridia', 'frida', 'frithila', 'fidil', 'ph', 'phrasia'],
  PERSON: ['gotha', 'gotho', 'gothus', 'goto'],
  PLACE: ['nuan'],
  PLAY: ['gisclus', 'gisel', 'gisklos'],
  POSSESSIVE_CASE: ['im'],
  POWER: ['ker'],
  PRIZE: ['gelda', 'gelis', 'gild', 'gilda', 'gildus'],
  RAVEN: ['hrabans', 'hrams', 'ram', 'ravans'],
  RIDER: ['rit', 'sind', 'sinda'],
  SALVATION: ['nas'],
  SEA: ['sius'],
  SELF: ['sicus'],
  SLAUGHTER: ['da', 'do', 'to', 'tta', 'tto'],
  SOFTNESS: ['lind'],
  SOUL: ['sael', 'sila', 'sula'],
  SPEAR: ['gais', 'gaisus', 'gaith', 'gaithus', 'geis', 'geisus', 'ges', 'gesus', 'gid', 'gidus', 'gis', 'gisus', 'gares', 'za'],
  SPLENDOR: ['vult'],
  STAFF: ['rung'],
  STRAIGHTAWAY: ['rago', 'rax'],
  STRATEGY: ['mod', 'moda', 'mond', 'mud', 'mund', 'munds', 'mut'],
  STRENGTH: ['fortis', 'trude'],
  THUNDER: ['donia'],
  TRIAD: ['trius', 'terius'],
  TRANSFORMATION: ['goia'],
  TREASUREHOUSE: ['archos', 'ark', 'arkos', 'arkus'],
  VALLEY: ['del', 'dela', 'dila'],
  VISION: ['red', 'rev', 'rid', 'rida', 'ridius', 'ridus', 'rith'],
  VIZIER: ['dia', 'té', 'teus', 'theus', 'thia', 'tius', 'tis', 'zia'],
  VOID: ['nnia', 'nia', 'nya'],
  WATCHFULNESS: ['acer', 'vacar', 'vara', 'vera'],
  WEAPONRY: ['sar'],
  WELCOME: ['berg', 'berga', 'verga'],
  WEST: ['stria'],
  WOLF: ['olf', 'ulf', 'wulf'],
  UNKNOWN: ['pa', 'pas']
}

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
  const k = roll(20)

  if (k === 1) {
    return { definition: '[DIMINUTIVE]', value: 'din' }
  } else if (k === 2) {
    return { definition: '[FLOATING]', value: sample(['ia', 'ias', 'ius', 'ja', 'ya']) }
  } else if (k === 3) {
    return { definition: '[LIGHT]', value: sample(['lin', 'line', 'llino', 'llinus', 'lona']) }
  } else if (k === 4) {
    return { definition: '[NOMINALIZING]', value: sample(['in', '\'in']) }
  } else if (k === 5) {
    return { definition: '[PATRONIZING]', value: sample(['la', 'las', 'lash', 'lios', 'lla', 'ely']) }
  } else if (k === 6) {
    return { definition: '[POSSESSIVE]', value: sample(['ca', 'ica', 'ikas', 'ka']) }
  } else if (k === 7) {
    return { definition: '[SIMPLE]', value: sample(['us', 'dus']) }
  } else {
    return getPart(secondary)
  }
}
export default () => {
  const prefix = getPart(primary)
  const suffix = getSuffix()

  let mid = ''
  if (isConsonant(prefix.value.charAt(prefix.length - 1)) && isConsonant(suffix.value.charAt(0))) {
    mid = sample(['a', 'e', 'i', 'o', 'u', 'y', 'ae', 'io', 'oo', 'ie', 'ou'])
  }
  const name = prefix.value + mid + suffix.value
  const luthe = prefix.definition + ' / ' + suffix.definition
  return {
    value: name + ' (' + luthe + ')',
    name,
    luthe
  }
}
