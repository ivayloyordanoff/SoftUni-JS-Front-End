function solve(array) {
    array.sort((a, b) => a - b);

    let result = [];

    while (array.length > 0) {
        smallestNumber = array.shift();
        biggestNumber = array.pop();
        result.push(smallestNumber, biggestNumber);
    }

    return result;
}
