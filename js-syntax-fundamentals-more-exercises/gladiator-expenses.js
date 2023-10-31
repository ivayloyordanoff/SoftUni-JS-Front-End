function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
            if (i % 3 === 0) {
                expenses += swordPrice;
                expenses += shieldPrice;
            } if (i % 12 === 0) {
                expenses += armorPrice;
            }
        } else if (i % 3 === 0) {
            expenses += swordPrice;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
