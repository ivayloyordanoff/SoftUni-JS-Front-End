function solve(array) {
    let evenSum = 0;
    let oddSum = 0;

    for (let el of array) {
        num = Number(el);

        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
}
