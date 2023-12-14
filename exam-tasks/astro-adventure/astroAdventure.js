function solve(input) {
  const astronauts = {};

  const maxOxygenLevel = 100;
  const maxEnergyReserves = 200;

  const numberOfAstronauts = input.shift();

  for (let index = 0; index < numberOfAstronauts; index++) {
    const astronautsDetails = input.shift();
    const [name, oxygenLevel, energyReserves] = astronautsDetails.split(" ");

    astronauts[name] = {
      oxygenLevel: Number(oxygenLevel),
      energyReserves: Number(energyReserves),
    };
  }

  let commandLine = input.shift();

  while (commandLine !== "End") {
    commandLine = commandLine.split(" - ");
    const command = commandLine.shift();

    switch (command) {
      case "Explore": {
        const [astronaut, energyNeeded] = commandLine;

        if (astronauts[astronaut].energyReserves >= energyNeeded) {
          astronauts[astronaut].energyReserves -= energyNeeded;

          console.log(
            `${astronaut} has successfully explored a new area and now has ${astronauts[astronaut].energyReserves} energy!`
          );
        } else {
          console.log(`${astronaut} does not have enough energy to explore!`);
        }

        break;
      }

      case "Refuel": {
        let [astronaut, amount] = commandLine;

        if (
          astronauts[astronaut].energyReserves + Number(amount) >
          maxEnergyReserves
        ) {
          amount = maxEnergyReserves - astronauts[astronaut].energyReserves;
          astronauts[astronaut].energyReserves = maxEnergyReserves;
        } else {
          astronauts[astronaut].energyReserves += Number(amount);
        }

        console.log(`${astronaut} refueled their energy by ${amount}!`);

        break;
      }

      case "Breathe": {
        let [astronaut, amount] = commandLine;

        if (
          astronauts[astronaut].oxygenLevel + Number(amount) >
          maxOxygenLevel
        ) {
          amount = maxOxygenLevel - astronauts[astronaut].oxygenLevel;
          astronauts[astronaut].oxygenLevel = maxOxygenLevel;
        } else {
          astronauts[astronaut].oxygenLevel += Number(amount);
        }

        console.log(
          `${astronaut} took a breath and recovered ${amount} oxygen!`
        );

        break;
      }
    }

    commandLine = input.shift();
  }

  for (const astronaut in astronauts) {
    console.log(
      `Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygenLevel}, Energy: ${astronauts[astronaut].energyReserves}`
    );
  }
}
