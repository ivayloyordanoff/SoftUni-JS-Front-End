function getInfo() {
  const baseURL = "http://localhost:3030/jsonstore/bus/businfo/";
  const stopID = document.querySelector("#stopId").value;
  const stopName = document.querySelector("#stopName");
  const busesList = document.querySelector("#buses");

  stopName.textContent = "";
  busesList.innerHTML = "";

  fetch(`${baseURL}${stopID}`)
    .then((res) => res.json())
    .then((busInfo) => {
      const { name, buses } = busInfo;
      stopName.textContent = name;

      for (const busID in buses) {
        const listItem = document.createElement("li");
        listItem.textContent = `Bus ${busID} arrives in ${buses[busID]} minutes`;
        busesList.appendChild(listItem);
      }
    })
    .catch((err) => {
      stopName.textContent = "Error";
    });
}
