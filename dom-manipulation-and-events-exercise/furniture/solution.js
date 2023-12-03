function solve() {
  const generateButton = document.querySelector("button");
  const buyButton = document.querySelectorAll("button")[1];
  const furnitureTable = document.querySelector(".table > tbody");
  const resultTextArea = document.querySelectorAll("textarea")[1];

  generateButton.addEventListener("click", function () {
    const inputTextArea = document.querySelectorAll("textarea")[0];
    let furnitureData;

    try {
      furnitureData = JSON.parse(inputTextArea.value);
    } catch (error) {
      resultTextArea.textContent =
        "Invalid JSON format. Please input valid JSON.";
      return;
    }

    furnitureData.forEach((item) => {
      const row = document.createElement("tr");
      const imgCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const priceCell = document.createElement("td");
      const decFactorCell = document.createElement("td");
      const markCell = document.createElement("td");
      const img = document.createElement("img");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      img.src = item.img;
      nameCell.textContent = item.name;
      priceCell.textContent = item.price;
      decFactorCell.textContent = item.decFactor;

      imgCell.appendChild(img);
      markCell.appendChild(checkbox);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFactorCell);
      row.appendChild(markCell);

      furnitureTable.appendChild(row);
    });
  });

  buyButton.addEventListener("click", function () {
    const checkedItems = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    );
    const names = checkedItems
      .map(
        (item) =>
          item.parentElement.previousElementSibling.previousElementSibling
            .previousElementSibling.textContent
      )
      .join(", ");
    const prices = checkedItems
      .map((item) =>
        parseFloat(
          item.parentElement.previousElementSibling.previousElementSibling
            .textContent
        )
      )
      .reduce((acc, val) => acc + val, 0);
    const totalDecFactor =
      checkedItems
        .map((item) =>
          parseFloat(item.parentElement.previousElementSibling.textContent)
        )
        .reduce((acc, val) => acc + val, 0) / checkedItems.length;

    resultTextArea.textContent = `Bought furniture: ${names}\nTotal price: ${prices.toFixed(
      2
    )}\nAverage decoration factor: ${totalDecFactor}`;
  });
}
