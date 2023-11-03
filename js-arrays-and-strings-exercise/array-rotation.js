function solve(array, rotations) {
    for (let i = 1; i <= rotations; i++) {
        array.push(array.shift());
    }

    console.log(array.join(' '));
}
