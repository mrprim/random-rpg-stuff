module.exports = {
  em: x => '<emphasis level="moderate">' + x + '</emphasis>',
  strong: x => '<emphasis level="strong">' + x + '</emphasis>',
  small: x => '<emphasis level="reduced">' + x + '</emphasis>',
  t: (x, y) => y,
  p: x => x => '<p>' + x + '</p>'
}
