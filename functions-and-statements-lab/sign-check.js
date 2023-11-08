function signCheck(numOne, numTwo, numThree) {
    numsArr = [numOne, numTwo, numThree];
    negativeNumsCount = 0;

    for (const num of numsArr) {
        if (num < 0) {
            negativeNumsCount++;
        }
    }

    if (negativeNumsCount % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
