import { names, getRandom } from '@mrprim/random-rpg-stuff'

const load = function () {
  addOptions()
  addClick()
  setGenerator()
}

const addOptions = () => {
  const select = document.getElementById('generator')

  getNames(names).forEach(n => {
    const option = document.createElement('option')
    option.text = n
    option.value = n
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

  if (!name) {
    return
  }
  handleGenerate(name)
}

const handleGenerate = (name) => {
  const value = getRandom(name)
  const result = document.getElementById('results')
  const final = document.createElement('li')
  final.innerHTML = value

  result.prepend(final)
}

const setGenerator = () => {
  const select = document.getElementById('generator')
  const params = getParams(window.location.search)

  if (params.g) {
    select.value = params.g
  }

  if (params.r && +params.r && select.value) {
    console.log([...new Array(+params.r)]);
    ([...new Array(+params.r)]).forEach(() => {
      handleGenerate(select.value)
    })
  }
}

const getParams = (queryString) => new Proxy(new URLSearchParams(queryString), {
  get: (searchParams, prop) => searchParams.get(prop)
})

load()
