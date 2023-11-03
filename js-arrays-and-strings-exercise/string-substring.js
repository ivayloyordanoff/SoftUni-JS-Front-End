function solve(word, text) {
    text = text.toLowerCase().split(' ');

    let foundWord = false;

    for (const currentWord of text) {
        if (currentWord === word) {
            foundWord = true;
        }
    }

    if (foundWord) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
