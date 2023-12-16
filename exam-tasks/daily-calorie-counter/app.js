const baseURL = "http://localhost:3030/jsonstore/tasks/";

const foodInput = document.getElementById("food");
const timeInput = document.getElementById("time");
const caloriesInput = document.getElementById("calories");
const addMealButton = document.getElementById("add-meal");
const editMealButton = document.getElementById("edit-meal");
const loadMealsButton = document.getElementById("load-meals");
const recordsList = document.getElementById("list");

let currentID;

loadMealsButton.addEventListener("click", loadMeals);

async function loadMeals(e) {
  recordsList.innerHTML = "";

  const response = await fetch(baseURL);
  const data = await response.json();

  for (const record of Object.values(data)) {
    const foodElement = document.createElement("h2");
    foodElement.textContent = record.food;

    const timeElement = document.createElement("h3");
    timeElement.textContent = record.time;

    const caloriesElement = document.createElement("h3");
    caloriesElement.textContent = record.calories;

    const changeMealButton = document.createElement("button");
    changeMealButton.textContent = "Change";
    changeMealButton.classList.add("change-meal");

    const deleteMealButton = document.createElement("button");
    deleteMealButton.textContent = "Delete";
    deleteMealButton.classList.add("delete-meal");

    const buttonsDiv = document.createElement("div");
    buttonsDiv.id = "meal-buttons";
    buttonsDiv.appendChild(changeMealButton);
    buttonsDiv.appendChild(deleteMealButton);

    mealDiv = document.createElement("div");
    mealDiv.classList.add("meal");
    mealDiv.appendChild(foodElement);
    mealDiv.appendChild(timeElement);
    mealDiv.appendChild(caloriesElement);
    mealDiv.appendChild(buttonsDiv);

    recordsList.appendChild(mealDiv);

    editMealButton.disabled = true;

    changeMealButton.addEventListener("click", async (e) => {
      currentID = record._id;

      foodInput.value = foodElement.textContent;
      timeInput.value = timeElement.textContent;
      caloriesInput.value = caloriesElement.textContent;

      recordsList.removeChild(mealDiv);

      editMealButton.disabled = false;
      addMealButton.disabled = true;
    });

    deleteMealButton.addEventListener("click", async (e) => {
      currentID = record._id;

      await fetch(`${baseURL}${currentID}`, {
        method: "DELETE",
      });

      loadMeals();
    });
  }
}

addMealButton.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!foodInput.value || !timeInput.value || !caloriesInput.value) {
    return;
  }

  await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify({
      food: foodInput.value,
      time: timeInput.value,
      calories: caloriesInput.value,
    }),
  });

  loadMeals();

  clearForm();
});

editMealButton.addEventListener("click", async (e) => {
  e.preventDefault();

  await fetch(`${baseURL}${currentID}`, {
    method: "PUT",
    body: JSON.stringify({
      food: foodInput.value,
      time: timeInput.value,
      calories: caloriesInput.value,
    }),
  });

  loadMeals();

  clearForm();

  editMealButton.disabled = true;
  addMealButton.disabled = false;
});

function clearForm() {
  foodInput.value = "";
  timeInput.value = "";
  caloriesInput.value = "";
}
