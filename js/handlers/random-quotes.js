import { quotesTitle, loadMoreQuotesBtn } from '../elemets.js'

import { getRandomQuotes } from '../services/quote-garden.js'

import clearQuotes from '../utils/clear-quotes.js'
import toggleLoader from '../utils/toggleLoader.js'
import renderQuotes from '../utils/render-quotes.js'

async function handleRandomQuotes () {
  clearQuotes()
  toggleLoader()

  try {
    const quotes = await getRandomQuotes()

    toggleLoader()

    quotesTitle.innerHTML = 'Random Quotes'
    
    loadMoreQuotesBtn.dataset.type = 'random'

    renderQuotes({ quotes })
  } catch (error) {
    console.error(error)
  }
}

export default handleRandomQuotes
