import { searchQuoteInput, searchQuoteBtn, randomQuotesBtn, quotesLoader, loadMoreQuotesBtn } from '../elemets.js'

export default function toggleLoader () {
  searchQuoteInput.disabled = !searchQuoteInput.disabled
  searchQuoteBtn.disabled = !searchQuoteBtn.disabled
  randomQuotesBtn.disabled = !randomQuotesBtn.disabled
  quotesLoader.classList.toggle('is-loading')
  loadMoreQuotesBtn.style.display = searchQuoteBtn.disabled ? 'none' : 'flex'
}
