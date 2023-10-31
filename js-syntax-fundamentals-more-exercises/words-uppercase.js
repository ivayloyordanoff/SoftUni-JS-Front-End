function solve(words) {
    const pattern = words.match(/\w+/g);
    const upperCaseWords = pattern.map(word => word.toUpperCase());

    console.log(upperCaseWords.join(', '));
}
