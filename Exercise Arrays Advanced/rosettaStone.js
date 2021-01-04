function rosettaStone(arr) {
    let templateSize = arr.shift();

    let templateMatrix = [];
    for (let i = 0; i < templateSize; i++) {
        templateMatrix.push(arr.shift()
            .split(' ')
            .map(Number));
    }

    let codeMatrix = [];
    for (let row = 0; row < arr.length; row++) {
        codeMatrix.push(arr[row].split(' ').map(Number))
    }

    let message = '';

    for (let row = 0; row < codeMatrix.length; row++) {
        for (let col = 0; col < codeMatrix[0].length; col++) {
            let currentIndex = codeMatrix[row][col]
            let codeNum = templateMatrix[row % templateMatrix.length][col % templateMatrix[0].length]

            message += String.fromCharCode(((currentIndex + codeNum) % 27) + 64);
        }
    }

    message = message.replace(/@/g, ' ')
    console.log(message);


}

rosettaStone(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22'])