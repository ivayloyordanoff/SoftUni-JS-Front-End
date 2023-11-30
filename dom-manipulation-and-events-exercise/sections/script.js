function create(words) {
  for (const word of words) {
    let div = document.createElement("div");
    let paragraph = document.createElement("p");

    paragraph.textContent = word;
    paragraph.style.display = "none";

    div.appendChild(paragraph);

    div.addEventListener("click", displayParagraph);

    function displayParagraph(e) {
      let currentParagraph = e.currentTarget.firstChild;
      currentParagraph.style.display = "";
    }

    divParent = document.getElementById("content");
    divParent.appendChild(div);
  }
}
