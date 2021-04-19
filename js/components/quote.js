export default function quote ({ quoteGenre, quoteText, quoteAuthor, withAuthor }) {
  const author = withAuthor ? `<p class="quote__author"><em>${quoteAuthor}</em></p>` : ''

  return /*  */ `
    <div class="quote">
    <h3 class="quote__genre">${quoteGenre}</h3>
    <p class="quote__text">"${quoteText}"</p>
    ${author}
  </div>
  `
}
