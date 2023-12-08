function solve() {
  const busInfo = document.querySelector("#info .info");
  const departBtn = document.querySelector("#depart");
  const arriveBtn = document.querySelector("#arrive");

  let busStopInfo = {
    name: "",
    next: "depot",
  };

  function depart() {
    fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`)
      .then((res) => res.json())
      .then((busStop) => {
        busStopInfo = busStop;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        busInfo.textContent = `Next stop ${busStopInfo.name}`;
      })
      .catch(() => {
        departBtn.disabled = true;
        arriveBtn.disabled = true;
        busInfo.textContent = "Error";
      });
  }

  async function arrive() {
    departBtn.disabled = false;
    arriveBtn.disabled = true;
    busInfo.textContent = `Arriving at ${busStopInfo.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
