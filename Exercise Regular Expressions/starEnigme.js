function starEnigme(arr) {
    let n = arr.shift();
    let a = [];
    let d = [];
    let regex =/@(?<planet>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<type>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;

    for (let i = 0; i < n; i++) {
        let message = arr[i];
        let key = message.match(/[star]/gi) && message.match(/[star]/gi).length;
        let words = [];
        for (let letter of message) {
            let s = letter.charCodeAt()
            s -= key;
            s = String.fromCharCode(s)
            words.push(s)
        }

        words = words.join('');
        words = regex.exec(words);

        if (words) {
            if (words.groups.type === 'A') {
                a.push(words.groups.planet);
            } else {
                d.push(words.groups.planet);
            }
        }

    }

    a.sort((a, b) => a.localeCompare(b));
    d.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${a.length}`);
    a.forEach(element => { console.log(`-> ${element}`); });
    console.log(`Destroyed planets: ${d.length}`);
    d.forEach(element => { console.log(`-> ${element}`); });
}

starEnigme([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]
)