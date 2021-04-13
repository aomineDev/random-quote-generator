import { getQuotes } from '../services/quote-garden.js'

import { searchTextField } from '../elemets.js'

import clearQuotes from '../utils/clear-quotes.js'
import toggleUI from '../utils/toggleUi.js'
import renderQuotes from '../utils/render-quotes.js'

export default async function handleSearchQuote (e) {
  e.preventDefault()

  const author = searchTextField.value

  if (author === '') return

  clearQuotes()
  toggleUI()

  try {
    const quotes = await getQuotes({ author })

    searchTextField.value = ''
    searchTextField.focus()
    toggleUI()

    renderQuotes({ author, quotes })
  } catch (error) {
    console.error(error)
  }  
}
