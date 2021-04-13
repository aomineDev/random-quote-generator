import { quotesAuthor, quotesWrapper } from '../elemets.js'

import quote from '../components/quote.js'
import quoteNotFound from '../components/quote-not-found.js'

export default function renderQuotes ({ author, quotes }) {
  quotesAuthor.innerHTML = author

  if (quotes.length === 0) {
    quotesWrapper.classList.remove('is-column')

    quotesWrapper.innerHTML += quoteNotFound()
  } else {
    quotes.forEach(({ quoteGenre, quoteText }) => {
      quotesWrapper.classList.add('is-column')
      
      quotesWrapper.innerHTML += quote({ quoteGenre, quoteText })
    })
  }
}
