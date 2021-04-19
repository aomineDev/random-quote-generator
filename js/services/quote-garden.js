import config from '../config/index.js'

async function getQuotes ({ page = 1 }) {
  let apiUrl = `${config.apiBaseUrl}?limit=4&page=${page}`

  const response = await fetch(apiUrl)
  const { data } = await response.json()

  return data
}

async function getQuotesbyAuthor ({ author, page = 1 }) {
  let apiUrl = `${config.apiBaseUrl}?author=${author}&limit=4&page=${page}`
    
  const response = await fetch(apiUrl)
  const { data } = await response.json()

  return data
}

async function getRandomQuotes () {
  const randomNumber = Math.ceil(Math.random() * 18000)
  let apiUrl = `${config.apiBaseUrl}?page=${randomNumber}&limit=4`

  const response = await fetch(apiUrl)
  const { data } = await response.json()

  return data
}

export {
  getQuotes,
  getQuotesbyAuthor,
  getRandomQuotes
}
