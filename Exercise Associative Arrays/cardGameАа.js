function cardGame(arr) {
    let cardP = new Map();
    cardP.set('J', 11);
    cardP.set('Q', 12);
    cardP.set('K', 13);
    cardP.set('A', 14);

    let cardT = new Map();
    cardT.set('S', 4);
    cardT.set('H', 3);
    cardT.set('D', 2);
    cardT.set('C', 1);

    let list = new Map();

    for (let line of arr) {
        let [name, currentCard] = line.split(': ');
        currentCard = currentCard.split(', ');
        if (list.has(name)) {
            let old = list.get(name);
            let newCards = old.concat(currentCard);
            list.set(name, newCards);
        } else {
            list.set(name, currentCard);
        }
    }

    for (let key of list) {

        let cards = new Set(key[1]);
        let name = key[0];
        let total = 0;
        Array.from(cards).forEach(card => {
            card = card.split('');
            let cardType = card.pop();
            let cardPower = card.join('');

            if (isNaN(cardPower)) {
                cardPower = cardP.get(cardPower);

            }
            cardType = cardT.get(cardType);
            total += Number(cardPower) * cardType;
        });

        console.log(`${ name}: ${total}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)