function orbit(input) {
    let [width, height, x, y] = input;
    let matrix = [];
    for (let col = 0; col < height; col++) {
        let r = []
        for (let row = 0; row < width; row++) {
            r.push(0);
        }
        matrix.push(r)
    }

    matrix[x][y] = 1;

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }
    matrix.forEach(r => {
        console.log(r.join(' '))
    })
}

orbit([5,5,2,2,])