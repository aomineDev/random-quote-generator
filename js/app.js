import {
  switchTheme,
  searchQuoteForm,
  randomQuotesBtn,
  loadMoreQuotesBtn
} from './elemets.js'

import {
  handleSwitchTheme,
  handleInitialQuotes,
  handleSearchQuotes,
  handleRandomQuotes,
  handleLoadMoreQuotes
} from './handlers/index.js'


document.addEventListener('DOMContentLoaded', handleInitialQuotes)

switchTheme.addEventListener('click', handleSwitchTheme)

searchQuoteForm.addEventListener('submit', handleSearchQuotes)

randomQuotesBtn.addEventListener('click', handleRandomQuotes)

loadMoreQuotesBtn.addEventListener('click', handleLoadMoreQuotes)
