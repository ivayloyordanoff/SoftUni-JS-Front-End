function solve(input) {
  const numberOfBaristas = Number(input.shift());

  const baristas = {};

  for (let index = 0; index < numberOfBaristas; index++) {
    const baristaDetails = input.shift();
    const [name, shift, coffeeTypes] = baristaDetails.split(" ");
    listOfCoffeeTypes = coffeeTypes.split(",");

    baristas[name] = { shift, coffeeTypes: listOfCoffeeTypes };
  }

  let commandLine = input.shift();

  while (commandLine !== "Closed") {
    commandLine = commandLine.split(" / ");

    const command = commandLine.shift();

    switch (command) {
      case "Prepare": {
        const [baristaName, shift, coffeeType] = commandLine;

        if (
          baristas[baristaName].shift === shift &&
          baristas[baristaName].coffeeTypes.includes(coffeeType)
        ) {
          console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
        } else {
          console.log(
            `${baristaName} is not available to prepare a ${coffeeType}.`
          );
        }

        break;
      }

      case "Change Shift": {
        const [baristaName, newShift] = commandLine;

        baristas[baristaName].shift = newShift;

        console.log(`${baristaName} has updated his shift to: ${newShift}`);

        break;
      }

      case "Learn": {
        const [baristaName, newCoffeeType] = commandLine;

        if (baristas[baristaName].coffeeTypes.includes(newCoffeeType)) {
          console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
        } else {
          baristas[baristaName].coffeeTypes.push(newCoffeeType);

          console.log(
            `${baristaName} has learned a new coffee type: ${newCoffeeType}.`
          );
        }

        break;
      }
    }

    commandLine = input.shift();
  }

  for (const barista in baristas) {
    console.log(
      `Barista: ${barista}, Shift: ${
        baristas[barista].shift
      }, Drinks: ${baristas[barista].coffeeTypes.join(", ")}`
    );
  }
}
