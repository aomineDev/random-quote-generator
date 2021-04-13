import { switchTheme, searchQuote, randomBtn } from './elemets.js'

import handleSwitchTheme from './handlers/switch-theme.js'
import handleSearchQuote from './handlers/search-quote.js'
import handleRandomQuote from './handlers/random-quote.js'

switchTheme.addEventListener('click', handleSwitchTheme)

searchQuote.addEventListener('submit', handleSearchQuote)

randomBtn.addEventListener('click', handleRandomQuote)
