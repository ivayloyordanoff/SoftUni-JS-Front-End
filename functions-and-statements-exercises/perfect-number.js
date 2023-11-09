function perfectNumber(number) {
    let sumOfDivisors = 0;

    for (let i = number - 1; i > 0; i--) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }

    if (number === sumOfDivisors) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
