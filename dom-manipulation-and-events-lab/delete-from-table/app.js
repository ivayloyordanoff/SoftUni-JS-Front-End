function deleteByEmail() {
  let tableRows = document.querySelectorAll("tbody tr");
  let email = document.querySelector('input[name="email"]').value;
  let result = document.getElementById("result");

  for (const row of tableRows) {
    if (row.children[1].textContent === email) {
      row.remove();
      result.textContent = "Deleted.";
      return;
    } else {
      result.textContent = "Not found.";
    }
  }
}
