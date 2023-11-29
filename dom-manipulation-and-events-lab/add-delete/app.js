function addItem() {
  let items = document.querySelector("#items");
  let text = document.querySelector("#newItemText").value;
  let li = document.createElement("li");
  let deleteLink = document.createElement("a");

  li.textContent = text;
  deleteLink.textContent = "[Delete]";
  deleteLink.href = "#";

  li.appendChild(deleteLink);
  items.appendChild(li);

  document.querySelector("#newItemText").value = "";

  deleteLink.addEventListener("click", deleteItem);

  function deleteItem(e) {
    let row = e.currentTarget.parentNode;
    row.remove();
  }
}
