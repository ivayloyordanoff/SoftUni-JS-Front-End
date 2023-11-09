function charactersInRange(firstChar, secondChar) {
    const asciiOfFirstChar = firstChar.charCodeAt(0);
    const asciiOfSecondChar = secondChar.charCodeAt(0);

    let result = [];

    if (asciiOfFirstChar < asciiOfSecondChar) {
        for (let i = asciiOfFirstChar + 1; i < asciiOfSecondChar; i++) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = asciiOfSecondChar + 1; i < asciiOfFirstChar; i++) {
            result.push(String.fromCharCode(i));
        }
    }

    console.log(result.join(' '));
}
