import { getQuotes } from '../services/quote-garden.js'

import clearQuotes from '../utils/clear-quotes.js'
import toggleUI from '../utils/toggleUi.js'
import renderQuotes from '../utils/render-quotes.js'

export default async function handleRandomQuote () {
  clearQuotes()
  toggleUI()

  try {
    const quotes = await getQuotes({})

    toggleUI()

    renderQuotes({ author: 'Random', quotes })
  } catch (error) {
    console.error(error)
  }
}