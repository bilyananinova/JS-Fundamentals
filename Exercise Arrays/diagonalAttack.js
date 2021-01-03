function diagonalAttack(input) {

    let matrix = [];
    let newMatrix = [];

    for (let line of input) {
        matrix.push(line.split(' '))
    }

    let mainDiagonal = 0;
    let secondDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {

        mainDiagonal += Number(matrix[row][row]);
        secondDiagonal += Number(matrix[row][matrix.length - row - 1]);
    }

    if (mainDiagonal == secondDiagonal) {

        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix[row].length; col++) {
                if (row != col && row != matrix.length - 1 - col) {
                    matrix[row][col] = mainDiagonal;
                }
            }

        }

    }

    matrix.forEach(r => console.log(r.join(' ')));
}

diagonalAttack(
    [
        '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]
);

console.log('------');

diagonalAttack(
    [
        '1 1 1',
        '1 1 1',
        '1 1 0'
    ]

)