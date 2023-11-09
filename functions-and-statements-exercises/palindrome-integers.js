function palindromeIntegers(numsArr) {
    for (const num of numsArr) {
        const reverseNum = Number(String(num).split('').reverse().join(''));

        if (reverseNum === num) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
