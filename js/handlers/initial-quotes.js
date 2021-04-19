import { loaderScreen } from '../elemets.js'

import { getQuotes } from '../services/quote-garden.js'

import renderQuotes from '../utils/render-quotes.js'

export default async function handleInitialQuotes () {
  try {
    const quotes = await getQuotes()

    loaderScreen.classList.add('is-complete')

    renderQuotes({ title: 'Last Quotes', quotes })
  } catch (error) {
    console.error(error)
  }
}
