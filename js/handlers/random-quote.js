import { getRandomQuotes } from '../services/quote-garden.js'

import clearQuotes from '../utils/clear-quotes.js'
import toggleUI from '../utils/toggleUi.js'
import renderQuotes from '../utils/render-quotes.js'

export default async function handleRandomQuote () {
  clearQuotes()
  toggleUI()

  try {
    const quotes = await getRandomQuotes()

    toggleUI()

    renderQuotes({ author: 'Random', quotes })
  } catch (error) {
    console.error(error)
  }
}