function addItem() {
  let items = document.querySelector("#items");
  let text = document.querySelector("#newItemText").value;
  let li = document.createElement("li");

  li.textContent = text;
  items.appendChild(li);
  document.querySelector("#newItemText").value = "";
}
