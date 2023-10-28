function solve(num) {
    let result = 0;
    let numString = num.toString();

    for (let i in numString) {
        result += Number(numString[i]);
    }

    console.log(result);
}
