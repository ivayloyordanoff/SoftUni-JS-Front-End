window.addEventListener("load", solve);

function solve() {
  const studentInput = document.getElementById("student");
  const universityInput = document.getElementById("university");
  const scoreInput = document.getElementById("score");
  const nextButton = document.getElementById("next-btn");
  const previewList = document.getElementById("preview-list");
  const candidatesList = document.getElementById("candidates-list");

  function clearForm() {
    studentInput.value = "";
    universityInput.value = "";
    scoreInput.value = "";
  }

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!studentInput.value || !universityInput.value || !scoreInput.value) {
      return;
    }

    const studentHeading = document.createElement("h4");
    studentHeading.textContent = studentInput.value;

    const universityParagraph = document.createElement("p");
    universityParagraph.textContent = `University: ${universityInput.value}`;

    const scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = `Score: ${scoreInput.value}`;

    const articleElement = document.createElement("article");
    articleElement.appendChild(studentHeading);
    articleElement.appendChild(universityParagraph);
    articleElement.appendChild(scoreParagraph);

    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.classList.add("action-btn");
    editButton.classList.add("edit");

    const applyButton = document.createElement("button");
    applyButton.textContent = "apply";
    applyButton.classList.add("action-btn");
    applyButton.classList.add("apply");

    const listItemElement = document.createElement("li");
    listItemElement.classList.add("application");
    listItemElement.appendChild(articleElement);
    listItemElement.appendChild(editButton);
    listItemElement.appendChild(applyButton);

    previewList.appendChild(listItemElement);

    nextButton.disabled = true;

    clearForm();

    editButton.addEventListener("click", (e) => {
      studentInput.value = studentHeading.textContent;
      universityInput.value = universityParagraph.textContent.split(": ")[1];
      scoreInput.value = scoreParagraph.textContent.split(": ")[1];

      previewList.removeChild(listItemElement);

      nextButton.disabled = false;
    });

    applyButton.addEventListener("click", (e) => {
      editButton.remove();
      applyButton.remove();

      candidatesList.appendChild(listItemElement);
      previewList.removeChild(listItemElement);

      nextButton.disabled = false;
    });
  });
}
