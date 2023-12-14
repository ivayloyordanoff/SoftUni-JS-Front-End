const baseURL = "http://localhost:3030/jsonstore/tasks/";

const locationInput = document.getElementById("location");
const temperatureInput = document.getElementById("temperature");
const dateInput = document.getElementById("date");
const addWeatherButton = document.getElementById("add-weather");
const editWeatherButton = document.getElementById("edit-weather");
const loadHistoryButton = document.getElementById("load-history");
const recordsList = document.getElementById("list");

let currentID;

loadHistoryButton.addEventListener("click", loadHistory);

async function loadHistory(e) {
  recordsList.innerHTML = "";

  const response = await fetch(baseURL);
  const data = await response.json();

  for (const record of Object.values(data)) {
    const locationElement = document.createElement("h2");
    locationElement.textContent = `${record.location}`;

    const dateElement = document.createElement("h3");
    dateElement.textContent = `${record.date}`;

    const temperatureElement = document.createElement("h3");
    temperatureElement.textContent = `${record.temperature}`;
    temperatureElement.id = "celsius";

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    const buttonsContainer = document.createElement("div");
    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    const container = document.createElement("div");
    container.classList.add("container");
    container.appendChild(locationElement);
    container.appendChild(dateElement);
    container.appendChild(temperatureElement);
    container.appendChild(buttonsContainer);

    recordsList.appendChild(container);

    editWeatherButton.disabled = true;

    changeButton.addEventListener("click", async (e) => {
      currentID = record._id;

      locationInput.value = locationElement.textContent;
      temperatureInput.value = temperatureElement.textContent;
      dateInput.value = dateElement.textContent;

      recordsList.removeChild(container);

      editWeatherButton.disabled = false;
      addWeatherButton.disabled = true;
    });

    deleteButton.addEventListener("click", async (e) => {
      currentID = record._id;

      await fetch(`${baseURL}${currentID}`, {
        method: "DELETE",
      });

      loadHistory();
    });
  }
}

addWeatherButton.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!locationInput.value || !temperatureInput.value || !dateInput.value) {
    return;
  }

  await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify({
      location: locationInput.value,
      temperature: temperatureInput.value,
      date: dateInput.value,
    }),
  });

  loadHistory();

  clearForm();
});

editWeatherButton.addEventListener("click", async (e) => {
  e.preventDefault();

  await fetch(`${baseURL}${currentID}`, {
    method: "PUT",
    body: JSON.stringify({
      location: locationInput.value,
      temperature: temperatureInput.value,
      date: dateInput.value,
    }),
  });

  loadHistory();

  clearForm();

  editWeatherButton.disabled = true;
  addWeatherButton.disabled = false;
});

function clearForm() {
  locationInput.value = "";
  temperatureInput.value = "";
  dateInput.value = "";
}
