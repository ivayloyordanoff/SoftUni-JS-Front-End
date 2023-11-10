function numberModification(number) {
    function averageValueOfDigits(num) {
        let digitsArr = num.toString().split('');
        let sumOfDigits = 0;
        let averageSum = 0;

        for (let digit of digitsArr) {
            currentDigit = Number(digit);
            sumOfDigits += currentDigit;
        }

        averageSum = sumOfDigits / digitsArr.length;

        return averageSum;
    }

    while (averageValueOfDigits(number) <= 5) {
        number += '9';
    }

    console.log(number);
}
