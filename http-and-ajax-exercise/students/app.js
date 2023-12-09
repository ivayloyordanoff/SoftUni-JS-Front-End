async function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/collections/students";

  const tableBody = document.querySelector("tbody");
  const submitBtn = document.getElementById("submit");
  const [firstName, lastName, facultyNumber, grade] =
    document.querySelectorAll("input");

  submitBtn.addEventListener("click", submit);

  const response = await fetch(baseURL);
  const resData = await response.json();

  for (const studentInfo of Object.values(resData)) {
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
      <tr>
        <td>${studentInfo.firstName}</td>
        <td>${studentInfo.lastName}</td>
        <td>${studentInfo.facultyNumber}</td>
        <td>${studentInfo.grade}</td>
      </tr>
    `;

    tableBody.appendChild(tableRow);
  }

  async function submit() {
    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      facultyNumber.value !== "" &&
      grade.value !== ""
    ) {
      await fetch(baseURL, {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          facultyNumber: facultyNumber.value,
          grade: grade.value,
        }),
      });

      const tableRow = document.createElement("tr");

      tableRow.innerHTML = `
        <tr>
          <td>${firstName.value}</td>
          <td>${lastName.value}</td>
          <td>${facultyNumber.value}</td>
          <td>${grade.value}</td>
        </tr>
      `;

      tableBody.appendChild(tableRow);

      firstName.value = "";
      lastName.value = "";
      facultyNumber.value = "";
      grade.value = "";
    }
  }
}

attachEvents();
