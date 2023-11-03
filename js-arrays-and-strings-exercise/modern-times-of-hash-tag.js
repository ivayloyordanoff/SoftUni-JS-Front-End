function solve(inputString) {
    let pattern = /#[A-Za-z]+/gm;
    let matches = inputString.match(pattern);

    for (let match of matches) {
        console.log(match.replace('#', ''));
    }
}
