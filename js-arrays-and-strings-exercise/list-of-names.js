function solve(array) {
    array.sort((a, b) => {
        return a.localeCompare(b);
    });

    let index = 1

    for (const name of array) {
        console.log(`${index++}.${name}`);
    }
}
