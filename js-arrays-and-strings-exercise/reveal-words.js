function solve(words, text) {
    words = words.split(', ');
    text = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (text[j].includes('*') && text[j].length === words[i].length) {
                text[j] = words[i];
            }
        }
    }

    console.log(text.join(' '));
}
