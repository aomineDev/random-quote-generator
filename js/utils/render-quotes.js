import { quotesAuthor, quotesWrapper } from '../elemets.js'

export default function renderQuotes ({ author, quotes }) {
  quotesAuthor.innerHTML = author

  if (quotes.length === 0) {
    quotesWrapper.classList.remove('is-column')

    quotesWrapper.innerHTML += /* html */ `
      <div class="quotes__not-found">
        <img src="./img/no-content.svg" alt="no content" class="quotes__not-found__img">
        <p class="quotes__not-found__text">Quotes not found.</p>
      </div>
    `
  } else {
    quotes.forEach(({ quoteGenre, quoteText }) => {
      quotesWrapper.classList.add('is-column')
      
      quotesWrapper.innerHTML += /* html */ `
      <div class="quote">
        <h3 class="quote__genre">${quoteGenre}</h3>
        <p class="quote__text">"${quoteText}"</p>
      </div>
    `
    });
  }
}
