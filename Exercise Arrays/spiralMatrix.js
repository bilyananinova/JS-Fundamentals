function spiralMatrix(x, y) {

    let matrix = [];
    for (let col = 0; col < x; col++) {
        let r = []
        for (let row = 0; row < y; row++) {
            r.push([]);
        }
        matrix.push(r)
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = x - 1;
    let startRow = 0;
    let endRow = y - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;


        // Right column
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        //Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;

    }
    
    matrix.forEach(r => {
        console.log(r.join(' '))
    })
}

spiralMatrix(3,3)