import toggleLoader from '../utils/toggleLoader.js'

import { getQuotes, getQuotesbyAuthor, getRandomQuotes } from '../services/quote-garden.js'

import { onlyRenderQuotes } from '../utils/render-quotes.js'

async function handleLoadMoreQuotes () {
  this.dataset.page = parseInt(this.dataset.page) + 1

  toggleLoader()

  try {
    let quotes = []

    switch (this.dataset.type) {
      case 'initial':
        quotes = await getQuotes({ page: this.dataset.page })

        onlyRenderQuotes({ quotes })
        break
      case 'random':
        quotes = await getRandomQuotes()

        onlyRenderQuotes({ quotes })
        break
      case 'search':
        quotes = await getQuotesbyAuthor({ author: this.dataset.author, page: this.dataset.page })

        onlyRenderQuotes({ quotes, withAuthor: false })
        break
      default:
        break
    }

    toggleLoader()

    if (quotes.length === 0) this.style.display= 'none'
  } catch (error) {
    console.error(error)
  }
}

export default handleLoadMoreQuotes
