function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/collections/books/";
  const submitBtn = document.querySelector("#form > button");
  const formHeader = document.querySelector("#form > h3");
  const booksTable = document.querySelector("table > tbody");
  const [titleInput, authorInput] = Array.from(
    document.querySelectorAll("#form > input")
  );

  let editBookID;

  submitBtn.addEventListener("click", submitForm);

  document.querySelector("#loadBooks").addEventListener("click", loadBooks);

  async function loadBooks() {
    booksTable.innerHTML = "";

    const books = await (await fetch(baseURL)).json();

    for (const bookID in books) {
      const { author, title } = books[bookID];

      const titleCol = document.createElement("td");
      titleCol.textContent = title;

      const authorCol = document.createElement("td");
      authorCol.textContent = author;

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => {
        editBookID = bookID;
        formHeader.textContent = "Edit FORM";
        submitBtn.textContent = "Save";
        titleInput.value = title;
        authorInput.value = author;
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.id = bookID;
      deleteBtn.addEventListener("click", deleteBook);

      const buttonsCol = document.createElement("td");
      buttonsCol.appendChild(editBtn);
      buttonsCol.appendChild(deleteBtn);

      const tableRow = document.createElement("tr");
      tableRow.appendChild(titleCol);
      tableRow.appendChild(authorCol);
      tableRow.appendChild(buttonsCol);

      booksTable.appendChild(tableRow);
    }
  }

  async function submitForm() {
    const title = titleInput.value;
    const author = authorInput.value;

    let url = baseURL;
    let httpMethod = "POST";

    if (!title || !author) {
      return;
    }

    if (formHeader.textContent === "Edit FORM") {
      url += editBookID;
      httpMethod = "PUT";
    }

    await fetch(url, {
      method: httpMethod,
      body: JSON.stringify({ title, author }),
    });

    loadBooks();

    if (formHeader.textContent === "Edit FORM") {
      formHeader.textContent = "FORM";
      submitBtn.textContent = "Submit";
    }

    titleInput.value = "";
    authorInput.value = "";
  }

  async function deleteBook() {
    const id = this.id;

    await fetch(baseURL + id, {
      method: "DELETE",
    });

    loadBooks();
  }
}

attachEvents();
