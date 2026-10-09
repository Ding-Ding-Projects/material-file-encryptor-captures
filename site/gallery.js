const input = document.querySelector("#capture-search");
const cards = [...document.querySelectorAll(".capture-card")];
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");

input?.addEventListener("input", () => {
  const query = input.value.trim().toLocaleLowerCase();
  let visible = 0;
  for (const card of cards) {
    const matches = !query || card.dataset.search.includes(query);
    card.hidden = !matches;
    visible += Number(matches);
  }
  count.textContent = `Showing ${visible} of ${cards.length} captures`;
  empty.hidden = visible !== 0;
});
