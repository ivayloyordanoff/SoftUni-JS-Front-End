function addAndSubtract(num1, num2, num3) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(result, c) {
        return result - c;
    }

    const resultOfSum = sum(num1, num2);
    const finalResult = subtract(resultOfSum, num3);

    return finalResult;
}
