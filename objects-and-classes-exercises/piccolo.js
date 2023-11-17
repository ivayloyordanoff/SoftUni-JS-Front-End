function manageParkingLot(arr) {
  let parkingLot = [];

  for (const data of arr) {
    let [direction, carNumber] = data.split(", ");

    if (direction === "IN" && !parkingLot.includes(carNumber)) {
      parkingLot.push(carNumber);
    } else if (direction === "OUT" && parkingLot.includes(carNumber)) {
      let index = parkingLot.indexOf(carNumber);
      parkingLot.splice(index, 1);
    }
  }

  if (parkingLot.length > 0) {
    parkingLot.sort((a, b) => a.localeCompare(b));
    console.log(parkingLot.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}
