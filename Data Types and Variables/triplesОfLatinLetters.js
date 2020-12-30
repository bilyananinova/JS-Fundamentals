function triplesОfLatinLetters(n) {
    let firstLetter = '';
    let secondLetter = '';
    let thirdLEtter = '';

    for (let i = 0; i < n; i++) {
        firstLetter = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            secondLetter = String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                thirdLEtter = String.fromCharCode(97 + k);
                console.log(`${firstLetter}${secondLetter}${thirdLEtter}`);
            }
        }
    }
}

triplesОfLatinLetters(3)