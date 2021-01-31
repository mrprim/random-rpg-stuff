import { names, getRandom } from '@mrprim/random-rpg-stuff'

const load = function () {
  addOptions()
  addClick()
}

const addOptions = () => {
  const select = document.getElementById('generator')

  getNames(names).forEach(n => {
    const option = document.createElement('option')
    option.text = n
    select.add(option)
  })
}

const getNames = (object, list = []) =>
  Object.entries(object).reduce((arr, [k, v]) => {
    if (typeof v === 'string') {
      return [...arr, v]
    } else {
      return getNames(v, arr)
    }
  }, list)

const addClick = () => {
  const btn = document.getElementById('get')
  btn.onclick = onClick
}

const onClick = ev => {
  const name = document.getElementById('generator').value
  const value = getRandom(name)
  const result = document.getElementById('results')
  const final = document.createElement('div')
  final.innerHTML = value

  result.prepend(final)
}

load()
