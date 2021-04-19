import { quotesTitle, loaderScreen } from '../elemets.js'

import { getQuotes } from '../services/quote-garden.js'

import renderQuotes from '../utils/render-quotes.js'

async function handleInitialQuotes () {
  try {
    const quotes = await getQuotes({})

    loaderScreen.classList.add('is-complete')

    quotesTitle.innerHTML = 'Last Quotes'

    renderQuotes({ quotes })
  } catch (error) {
    console.error(error)
  }
}

export default handleInitialQuotes
