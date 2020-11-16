function bitcoin(goldGrams) {
    let totalMoney = 0;
    let currentDay = 0;
    let totalBitcoin = 0;
    let count = 0;
    let bitcoinCount = 0;
    let leftMoney = 0;

    for (let i = 0; i <= goldGrams.length-1; i++) {
        count++;

        if (count % 3 == 0) {
            goldGrams[i] *= 0.70;
        }

        totalMoney += goldGrams[i] * 67.51;

        if (totalMoney > 11949.16) {
            
            if (currentDay == 0) {
                currentDay = count;
            }

            bitcoinCount = Math.floor(totalMoney / 11949.16);

            totalBitcoin += bitcoinCount;

            leftMoney = totalMoney - (bitcoinCount * 11949.16);

            totalMoney = leftMoney;
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoin}`);
    if (currentDay >0) {
        console.log(`Day of the first purchased bitcoin: ${currentDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoin([100, 200, 300])
