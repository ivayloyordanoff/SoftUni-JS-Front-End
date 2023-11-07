function solve(array) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;

    let money = 0;
    let firstDayBoughtBitcoin = 0;
    let totalBitcoins = 0;

    for (let i = 0; i < array.length; i++) {
        let day = i + 1;
        let gramsOfGold = array[i];

        if (day % 3 === 0) {
            gramsOfGold *= 0.7;
        }

        money += gramsOfGold * goldPrice;

        if (money >= bitcoinPrice) {
            if (totalBitcoins < 1) {
                firstDayBoughtBitcoin = day;
            }

            let boughtBitcoins = Math.floor(money / bitcoinPrice);

            totalBitcoins += boughtBitcoins;
            money -= boughtBitcoins * bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBoughtBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
