function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/phonebook/";

  const phonebook = document.getElementById("phonebook");
  const loadBtn = document.getElementById("btnLoad");
  const createBtn = document.getElementById("btnCreate");
  const [personInput, phoneInput] = document.getElementsByTagName("input");

  loadBtn.addEventListener("click", loadPhonebook);

  async function loadPhonebook() {
    phonebook.innerHTML = "";

    const response = await fetch(baseURL);
    const contactList = await response.json();

    for (const contact of Object.values(contactList)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${contact.person}: ${contact.phone}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteContact);

      listItem.appendChild(deleteBtn);

      phonebook.appendChild(listItem);

      function deleteContact() {
        fetch(baseURL + contact._id, {
          method: "DELETE",
        });

        listItem.remove();
      }
    }
  }

  createBtn.addEventListener("click", createContact);

  async function createContact() {
    phonebook.innerHTML = "";

    const person = personInput.value;
    const phone = phoneInput.value;

    if (person === "" || phone === "") {
      return;
    }

    await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify({ person, phone }),
    });

    loadPhonebook();

    personInput.value = "";
    phoneInput.value = "";
  }
}

attachEvents();
