function solve(num) {
    let numString = num.toString();
    let firstDigit = numString[0];
    let sameNumbers = true;
    let result = 0;

    for (let i in numString) {
        if (numString[i] !== firstDigit) {
            sameNumbers = false;
        }

        result += Number(numString[i]);
    }

    console.log(sameNumbers);
    console.log(result);
}
