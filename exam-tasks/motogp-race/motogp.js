function solve(input) {
  class Rider {
    constructor(name, fuelCapacity, position) {
      this.name = name;
      this.fuelCapacity = fuelCapacity;
      this.position = position;
    }
  }

  function findRider(riderName) {
    const rider = ridersList.find((r) => r.name === riderName);

    return rider;
  }

  const ridersCount = input.shift();
  const ridersList = [];

  for (let index = 0; index < ridersCount; index++) {
    const riderDetails = input.shift();
    const [name, fuelCapacity, position] = riderDetails.split("|");

    ridersList.push(new Rider(name, Number(fuelCapacity), Number(position)));
  }

  let commandLine = input.shift();

  while (commandLine !== "Finish") {
    commandLine = commandLine.split(" - ");
    const command = commandLine.shift();

    switch (command) {
      case "StopForFuel": {
        const [riderName, minimumFuel, changedPosition] = commandLine;
        const rider = findRider(riderName);

        if (rider.fuelCapacity < Number(minimumFuel)) {
          rider.position = changedPosition;

          console.log(
            `${rider.name} stopped to refuel but lost his position, now he is ${changedPosition}.`
          );
        } else {
          console.log(`${rider.name} does not need to stop for fuel!`);
        }

        break;
      }

      case "Overtaking": {
        const [firstRiderName, secondRiderName] = commandLine;
        const firstRider = findRider(firstRiderName);
        const secondRider = findRider(secondRiderName);
        const firstRiderPosition = firstRider.position;
        const secondRiderPosition = secondRider.position;

        if (firstRiderPosition < secondRiderPosition) {
          firstRider.position = secondRiderPosition;
          secondRider.position = firstRiderPosition;

          console.log(`${firstRider.name} overtook ${secondRider.name}!`);
        }
        break;
      }

      case "EngineFail": {
        const [riderName, lapsLeft] = commandLine;
        const rider = findRider(riderName);
        const riderIndex = ridersList.indexOf(rider);

        ridersList.splice(riderIndex, 1);

        console.log(
          `${rider.name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
        );
        break;
      }
    }

    commandLine = input.shift();
  }

  for (const rider of ridersList) {
    console.log(`${rider.name}\n  Final position: ${rider.position}`);
  }
}
