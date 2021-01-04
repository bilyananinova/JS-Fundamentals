function sequences(input) {
    let result = []
    input = input.map(el => JSON.parse(el).sort((a, b) => b - a))
    for (let i = 0; i < input.length; i++) {
        let currentArray = input[i];
        let isSpecial = true;
        for (let j = 0; j < result.length; j++) {
            let nextArray = input[j];

            if ((JSON.stringify(currentArray) == JSON.stringify(nextArray))) {
                isSpecial = false;
                break;
            }

        }

        if (isSpecial) {
            result.push(currentArray)
        }
    }

    let sort = result.sort((a, b) => a.length - b.length);

    sort.forEach(element => {
        console.log(`[${element.join(', ')}]`);
    });
}

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])