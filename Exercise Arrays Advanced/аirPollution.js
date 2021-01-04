function аirPollution(firstArr, secondArr) {
    let result = [];
    let polutionArea = 0;

    let map = firstArr
        .map(str => str.split(' ').map(x => Number(x)));
    let forcesAndPower = secondArr.map(str => str.split(' '));

    for (let i = 0; i < secondArr.length; i++) {
        forcesAndPower = secondArr[i].split(' ')
        let force = forcesAndPower[0];
        let value = Number(forcesAndPower[1]);

        if (force == 'breeze') {
            for (let row = value; row < value + 1; row++) {
                for (let col = 0; col < map[row].length; col++) {

                    map[row][col] -= 15;

                    if (map[row][col] < 0) {
                        map[row][col] = 0;
                        continue;
                    }

                }
            }
        }

        if (force == 'gale') {
            for (let row = 0; row < map.length; row++) {
                for (let col = value; col < map[row].length; col++) {

                    map[row][col] -= 20;
                    break;

                }
            }
        }

        if (force == 'smog') {
            for (let row = 0; row < map.length; row++) {
                for (let col = 0; col < map[row].length; col++) {
                    map[row][col] += value;
                }
            }
        }

    }

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] >= 50) {
                result.push(`[${row}-${col}]`)
                polutionArea++;
            }
        }
    }

    if (polutionArea > 0) {
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

аirPollution(["5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"]
)