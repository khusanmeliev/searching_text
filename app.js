function button() {
  var searchingText = document.getElementById("input").value;
  var search = document.getElementById("button");
  var text = document.getElementById("text");

  searchingText = searchingText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let pattern = new RegExp(`${searchingText}`, "gi");
  text.innerHTML = text.textContent.replace(
    pattern,
    (match) => `<mark>${match}</mark>`
  );
}
