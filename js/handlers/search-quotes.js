import { getQuotesbyAuthor } from '../services/quote-garden.js'

import { searchTextField } from '../elemets.js'

import clearQuotes from '../utils/clear-quotes.js'
import toggleLoader from '../utils/toggleLoader.js'
import renderQuotes from '../utils/render-quotes.js'

export default async function handleSearchQuote (e) {
  e.preventDefault()

  const author = searchTextField.value

  if (author === '') return

  clearQuotes()
  toggleLoader()

  try {
    const quotes = await getQuotesbyAuthor({ author })

    searchTextField.value = ''
    searchTextField.focus()
    toggleLoader()

    renderQuotes({ title: author, quotes, author })
  } catch (error) {
    console.error(error)
  }  
}
