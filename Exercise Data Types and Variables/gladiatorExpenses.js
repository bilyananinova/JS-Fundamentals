function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBroke = 0;

    for (let i = 1; i <= lostFightsCount; i++) {

        if (i % 2 == 0) {
            expenses += helmetPrice;
        }

        if (i % 3 == 0) {
            expenses += swordPrice;
        }

        if (i % 2 == 0 && i % 3 == 0) {
            expenses += shieldPrice;
            shieldBroke++;
        }

        if (shieldBroke > 0 && shieldBroke % 2 == 0) {
            expenses += armorPrice;
            shieldBroke = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)