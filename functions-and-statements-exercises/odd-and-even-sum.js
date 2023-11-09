function oddAndEvenSum(number) {
    let array = String(number).split('');
    let oddSum = 0;
    let evenSum = 0;

    for (const element of array) {
        currentNumber = Number(element);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
