export default function quote ({ quoteGenre, quoteText }) {
  return /* html */ `
    <div class="quote">
    <h3 class="quote__genre">${quoteGenre}</h3>
    <p class="quote__text">"${quoteText}"</p>
  </div>
  `
}
