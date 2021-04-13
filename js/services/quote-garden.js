import config from '../config/index.js'

async function getQuotes ({ author }) {
  let apiUrl = `${config.apiBaseUrl}?author=${author}&limit=4`
    

  const response = await fetch(apiUrl)
  const { data } = await response.json()

  return data
}

async function getRandomQuotes () {
  const randomNumber = Math.ceil(Math.random() * 7000)
  let apiUrl = `${config.apiBaseUrl}?page=${randomNumber}&limit=4`

  const response = await fetch(apiUrl)
  const { data } = await response.json()

  return data
}

export {
  getQuotes,
  getRandomQuotes
}
