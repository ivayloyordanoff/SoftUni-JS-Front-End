function factorialDivision(numOne, numTwo) {
    function factorial(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }

    console.log(`${(factorial(numOne) / factorial(numTwo)).toFixed(2)}`);
}
