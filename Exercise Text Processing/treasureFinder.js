function treasureFinder(arr) {
    let key = arr.shift().split(' ');
    let comm = arr.shift().split('');
    let result = [];
    let currentChar;
    let count = 0;

    while (comm != 'find') {
        for (let i = 0; i < comm.length; i++) {
            currentChar = comm[i];
            if (currentChar.charCodeAt() >= 33 && currentChar.charCodeAt() <= 126) {
                currentChar = currentChar.charCodeAt() - key[count];
                count++;
                if (count == key.length) {
                    count = 0;
                }
            }
            let letter = String.fromCharCode(currentChar)
            result.push(letter);
        }

        let startIndexTreasure = result.indexOf('&');
        let stopIndexTreasure = result.indexOf('&', startIndexTreasure + 1);
        let treasureType = result.slice(startIndexTreasure + 1, stopIndexTreasure).join('');

        let startIndexCoordinates = result.indexOf('<');
        let stopIndexCoordinates = result.indexOf('>', startIndexCoordinates + 1);
        let coordinates = result.slice(startIndexCoordinates + 1, stopIndexCoordinates).join('');
        console.log(`Found ${treasureType} at ${coordinates}`);
        result = [];
        comm = arr.shift();
        count = 0;
    }
}

treasureFinder([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'

])