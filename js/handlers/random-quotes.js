import { getRandomQuotes } from '../services/quote-garden.js'

import clearQuotes from '../utils/clear-quotes.js'
import toggleLoader from '../utils/toggleLoader.js'
import renderQuotes from '../utils/render-quotes.js'

export default async function handleRandomQuote () {
  clearQuotes()
  toggleLoader()

  try {
    const quotes = await getRandomQuotes()

    toggleLoader()

    renderQuotes({ title: 'Random Quotes', quotes })
  } catch (error) {
    console.error(error)
  }
}
