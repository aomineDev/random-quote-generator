import { quotesTitle, searchQuoteInput, loadMoreQuotesBtn } from '../elemets.js'

import { getQuotesbyAuthor } from '../services/quote-garden.js'

import clearQuotes from '../utils/clear-quotes.js'
import toggleLoader from '../utils/toggleLoader.js'
import renderQuotes from '../utils/render-quotes.js'

async function handleSearchQuotes (e) {
  e.preventDefault()

  const author = searchQuoteInput.value

  if (author === '') return

  clearQuotes()
  toggleLoader()

  try {
    const quotes = await getQuotesbyAuthor({ author })

    searchQuoteInput.value = ''
    searchQuoteInput.focus()
    toggleLoader()

    quotesTitle.innerHTML = author

    loadMoreQuotesBtn.dataset.type = 'search'
    loadMoreQuotesBtn.dataset.author = author
    loadMoreQuotesBtn.dataset.page = 1

    renderQuotes({ quotes, withAuthor: false })
  } catch (error) {
    console.error(error)
  }  
}

export default handleSearchQuotes
