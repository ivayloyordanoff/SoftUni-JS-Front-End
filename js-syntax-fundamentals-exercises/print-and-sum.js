function solve(start, end) {
    let print = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        print = print + i + ' ';
        sum = sum + i;
    }

    console.log(print);
    console.log(`Sum: ${sum}`);
}
