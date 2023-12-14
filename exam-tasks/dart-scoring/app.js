window.addEventListener("load", solve);

function solve() {
  const playerInput = document.getElementById("player");
  const scoreInput = document.getElementById("score");
  const roundInput = document.getElementById("round");
  const addButton = document.getElementById("add-btn");
  const sureList = document.getElementById("sure-list");
  const scoreboardList = document.getElementById("scoreboard-list");
  const clearButton = document.querySelector(".btn.clear");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!playerInput.value || !scoreInput.value || !roundInput.value) {
      return;
    }

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = playerInput.value;

    const scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = `Score: ${scoreInput.value}`;

    const roundParagraph = document.createElement("p");
    roundParagraph.textContent = `Round: ${roundInput.value}`;

    const articleElement = document.createElement("article");
    articleElement.appendChild(nameParagraph);
    articleElement.appendChild(scoreParagraph);
    articleElement.appendChild(roundParagraph);

    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.classList.add("btn");
    editButton.classList.add("edit");

    const okButton = document.createElement("button");
    okButton.textContent = "ok";
    okButton.classList.add("btn");
    okButton.classList.add("ok");

    const listItem = document.createElement("li");
    listItem.classList.add("dart-item");
    listItem.appendChild(articleElement);
    listItem.appendChild(editButton);
    listItem.appendChild(okButton);

    sureList.appendChild(listItem);

    addButton.disabled = true;

    clearForm();

    editButton.addEventListener("click", (e) => {
      playerInput.value = nameParagraph.textContent;
      scoreInput.value = scoreParagraph.textContent.split(": ")[1];
      roundInput.value = roundParagraph.textContent.split(": ")[1];

      sureList.removeChild(listItem);

      addButton.disabled = false;
    });

    okButton.addEventListener("click", (e) => {
      editButton.remove();
      okButton.remove();

      scoreboardList.appendChild(listItem);
      sureList.innerHTML = "";

      addButton.disabled = false;
    });

    clearButton.addEventListener("click", (e) => {
      scoreboardList.innerHTML = "";
    });
  });

  function clearForm() {
    playerInput.value = "";
    scoreInput.value = "";
    roundInput.value = "";
  }
}
