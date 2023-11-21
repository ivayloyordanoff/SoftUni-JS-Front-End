function checkFlightStatus(flightsInfo) {
  class Flight {
    constructor(flightNumber, flightDestination) {
      this.flightNumber = flightNumber;
      this.flightDestination = flightDestination;
      this.flightStatus = "";
    }
  }

  const [flights, changedStatuses, statusToCheck] = flightsInfo;

  let flightsArr = [];

  for (const flightData of flights) {
    const [flightNumber, ...flightDestination] = flightData.split(" ");
    flightsArr.push(new Flight(flightNumber, flightDestination.join(" ")));
  }

  for (const info of changedStatuses) {
    const [number, status] = info.split(" ");

    for (const flight of flightsArr) {
      if (number === flight.flightNumber) {
        flight.flightStatus = status;
      }
    }
  }

  for (const flight of flightsArr) {
    if (statusToCheck[0] === "Ready to fly" && flight.flightStatus === "") {
      flight.flightStatus = "Ready to fly";
      console.log(
        `{ Destination: '${flight.flightDestination}', Status: '${flight.flightStatus}' }`
      );
    } else if (statusToCheck[0] === flight.flightStatus) {
      console.log(
        `{ Destination: '${flight.flightDestination}', Status: '${flight.flightStatus}' }`
      );
    }
  }
}
