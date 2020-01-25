import { roll } from './dice'

export default (x = []) => {
  if (!x || !x.length) {
    return
  }

  const l = x.length
  const i = roll(l)
  return x[i - 1]
}
