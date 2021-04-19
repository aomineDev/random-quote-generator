import { searchTextField, searchBtn, randomBtn, quotesLoader } from '../elemets.js'

export default function toggleUI () {
  searchTextField.disabled = !searchTextField.disabled
  searchBtn.disabled = !searchBtn.disabled
  randomBtn.disabled = !randomBtn.disabled
  quotesLoader.classList.toggle('is-loading')
}
