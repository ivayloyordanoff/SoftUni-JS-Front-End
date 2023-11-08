function solve(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;
    let finalHeight = 0;
    let stepCounter = 0;

    for (let step = base; step >= 1; step -= 2) {
        finalHeight += increment;
        stepCounter++;

        if (step === 1 || step === 2) {
            totalGold = Math.pow(step, 2) * increment;
            break;
        }

        const stoneWidth = step - 2;
        const stoneLength = step - 2;
        const stoneArea = stoneWidth * stoneLength;
        totalStone += stoneArea * increment;

        const outerLayerPerimeter = (4 * step) - 4;
        const outerLayerArea = outerLayerPerimeter * increment;

        if (stepCounter % 5 === 0) {
            totalLapisLazuli += outerLayerArea;
        } else {
            totalMarble += outerLayerArea;
        }
    }

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);
}
