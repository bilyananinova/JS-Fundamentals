function bunnyKill(arr) {
    //определяме координатите на бомбите
    let bombCoordinates = arr.pop().split(' ').map(string => string.split(',').map(x => Number(x)))

    //правим си матрица
    let matrix = arr.map(row => row.split(' ').map(x => Number(x)))

    let damage = 0;
    let killCounter = 0;

    //цикъл защото коррдинатите са с поече от една бомба
    for (let i = 0; i < bombCoordinates.length; i++) {
        //определяме реда на бомбата
        let bombRow = bombCoordinates[i][0];
        //определяме колоната на бомбата
        let bombCol = bombCoordinates[i][1];
        // определяме силата на бомбата с матрицата
        let bombPower = matrix[bombRow][bombCol];

        if (bombPower <= 0) {
            continue;
        }

        //намираме старт ред за щети
        let startRow = Math.max(0, bombRow - 1);
        //намираме стоп ред за щети
        let endRow = Math.min(bombRow + 1, arr.length - 1);

        //цикъл за щетите
        for (let row = startRow; row <= endRow; row++) {
            //намираме старт колона за щети
            let startCol = Math.max(0, bombCol - 1);
            //намираме стоп колона за щети
            let endCol = Math.min(bombCol + 1, arr[row].length - 1);
            for (let col = startCol; col <= endCol; col++) {
                //правим си матрица за щетите и от нея вадим стойността на бомбата
                matrix[row][col] -= bombPower;
            }

        }

        killCounter++;
        damage += bombPower;
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                damage += matrix[row][col];
                killCounter++;
            }
        }
    }

    console.log(damage);
    console.log(killCounter);
}

bunnyKill(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']
)