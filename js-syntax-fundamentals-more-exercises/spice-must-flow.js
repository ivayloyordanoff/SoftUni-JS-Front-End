function solve(startingYield) {
    let days = 0;
    let totalSpices = 0;

    for (let i = startingYield; i >= 100;) {
        days += 1;
        totalSpices += i;
        totalSpices -= 26;
        i -= 10;
    }

    if (totalSpices >= 26) {
        totalSpices -= 26;
    } else {
        totalSpices -= totalSpices;
    }

    console.log(days);
    console.log(totalSpices);
}
