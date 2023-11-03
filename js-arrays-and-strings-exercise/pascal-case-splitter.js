function solve(inputString) {
    let pattern = /[A-Z][a-z]*/gm;
    let matches = inputString.match(pattern);

    console.log(matches.join(', '));
}
