function toTitleCase (str = '') {
  const smallWords = ['the']
  let words = str.split(' ')

  words = words.map((word, i) => {
    word = word.toLowerCase()
    if (i === 0) {
      return wordToTitleCase(word)
    }
    if (smallWords.indexOf(word) >= 0) {
      return word
    }
    return wordToTitleCase(word)
  })

  return words.join(' ')
}

function wordToTitleCase (word) {
  return word.replace(/(^|\s|-|\/)[a-z]/g, (f) => f.toUpperCase())
}

module.exports = toTitleCase
