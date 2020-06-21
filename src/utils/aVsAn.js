export default word => {
  if (!word) return 'a'
  return ['a', 'e', 'i', 'o', 'u'].indexOf(word[0].toLowerCase()) >= 0 ? 'an' : 'a'
}
