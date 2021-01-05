function cardGame(arr) {
    // {name[cards]}
    let cardPower = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }

    let cardType = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }

    let object = {};

    for (let i = 0; i < arr.length; i++) {
        let [name, currentCards] = arr[i].split(': ');
        currentCards = currentCards.split(', ')
        if (!object.hasOwnProperty(name)) {
            object[name] = currentCards;
        } else {
            object[name].push(...currentCards);
        }
    }

    for (let line of Object.keys(object)) {
        let name = line;
        let total = 0;
        let cards = new Set(object[line]);
        for (let card of cards) {
            card = card.split('');
            let type = card.pop();
            let number = card.join('');

            if(number <= 10) {
                total += Number(cardType[type]) * Number(number);
            } else {
                total += Number(cardType[type]) * Number(cardPower[number]);
            } 
        }
        console.log(`${line}: ${total}`);
    }
}

cardGame([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD',
]
)