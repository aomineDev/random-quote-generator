import { switchTheme, searchQuote, randomBtn } from './elemets.js'

import handleSwitchTheme from './handlers/switch-theme.js'
import handleInitialQuotes from './handlers/initial-quotes.js'
import handleSearchQuotes from './handlers/search-quotes.js'
import handleRandomQuotes from './handlers/random-quotes.js'

document.addEventListener('DOMContentLoaded', handleInitialQuotes)

switchTheme.addEventListener('click', handleSwitchTheme)

searchQuote.addEventListener('submit', handleSearchQuotes)

randomBtn.addEventListener('click', handleRandomQuotes)
