import { quotesWrapper, loadMoreQuotesBtn } from '../elemets.js'

import quote from '../components/quote.js'
import quoteNotFound from '../components/quote-not-found.js'

export default function renderQuotes ({ quotes, withAuthor = true }) {
  if (quotes.length === 0) {
    quotesWrapper.classList.remove('columns')
    loadMoreQuotesBtn.style.display = 'none'

    quotesWrapper.innerHTML += quoteNotFound()
  } else {
    quotesWrapper.classList.add('columns')

    onlyRenderQuotes({ quotes, withAuthor })
  }
}

export function onlyRenderQuotes ({ quotes, withAuthor = true }) {
  quotes.forEach(({ quoteGenre, quoteText, quoteAuthor }) => {
    quotesWrapper.innerHTML += quote({ quoteGenre, quoteText, quoteAuthor, withAuthor })
  })
}
