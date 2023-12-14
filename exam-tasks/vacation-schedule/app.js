const baseURL = "http://localhost:3030/jsonstore/tasks/";

const nameInput = document.getElementById("name");
const numDaysInput = document.getElementById("num-days");
const dateInput = document.getElementById("from-date");
const addVacationButton = document.getElementById("add-vacation");
const editVacationButton = document.getElementById("edit-vacation");
const loadVacationsButton = document.getElementById("load-vacations");
const vacationsList = document.getElementById("list");

let currentID;

function clearForm() {
  nameInput.value = "";
  numDaysInput.value = "";
  dateInput.value = "";
}

loadVacationsButton.addEventListener("click", loadVacations);

async function loadVacations(e) {
  vacationsList.innerHTML = "";

  const response = await fetch(baseURL);
  const data = await response.json();

  for (const course of Object.values(data)) {
    const name = document.createElement("h2");
    name.textContent = course.name;

    const date = document.createElement("h3");
    date.textContent = course.date;

    const days = document.createElement("h3");
    days.textContent = course.days;

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";

    const doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";

    const container = document.createElement("div");
    container.classList.add("container");
    container.appendChild(name);
    container.appendChild(date);
    container.appendChild(days);
    container.appendChild(changeButton);
    container.appendChild(doneButton);

    vacationsList.appendChild(container);

    editVacationButton.disabled = true;

    changeButton.addEventListener("click", async (e) => {
      currentID = course._id;
      nameInput.value = course.name;
      numDaysInput.value = course.days;
      dateInput.value = course.date;

      vacationsList.removeChild(container);

      editVacationButton.disabled = false;
      addVacationButton.disabled = true;
    });

    doneButton.addEventListener("click", async (e) => {
      currentID = course._id;

      await fetch(`${baseURL}${currentID}`, {
        method: "DELETE",
      });

      loadVacations();
    });
  }
}

addVacationButton.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!nameInput.value || !numDaysInput.value || !dateInput.value) {
    return;
  }

  await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify({
      name: nameInput.value,
      days: numDaysInput.value,
      date: dateInput.value,
    }),
  });

  loadVacations();

  clearForm();
});

editVacationButton.addEventListener("click", async (e) => {
  e.preventDefault();

  await fetch(`${baseURL}${currentID}`, {
    method: "PUT",
    body: JSON.stringify({
      name: nameInput.value,
      days: numDaysInput.value,
      date: dateInput.value,
    }),
  });

  editVacationButton.disabled = true;
  addVacationButton.disabled = false;

  loadVacations();

  clearForm();
});
