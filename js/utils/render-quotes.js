import { quotesTitle, quotesWrapper } from '../elemets.js'

import quote from '../components/quote.js'
import quoteNotFound from '../components/quote-not-found.js'

export default function renderQuotes ({ title, quotes, author }) {
  quotesTitle.innerHTML = title

  if (quotes.length === 0) {
    quotesWrapper.classList.remove('columns')

    quotesWrapper.innerHTML += quoteNotFound()
  } else {
    quotes.forEach(({ quoteGenre, quoteText, quoteAuthor }) => {
      quotesWrapper.classList.add('columns')

      const withAuthor = !Boolean(author)

      quotesWrapper.innerHTML += quote({ quoteGenre, quoteText, quoteAuthor, withAuthor })
    })
  }
}
