function magicMatrices(arr) {
    let isMagic = false;
    let firstRow = arr.shift();
    let secondRow = arr.shift();
    let thirdRow = arr.shift();

    let sumFirstRow = firstRow[0] + firstRow[1] + firstRow[2];
    let sumSecondRow = secondRow[0] + secondRow[1] + secondRow[2];
    let sumThirdRow = thirdRow[0] + thirdRow[1] + thirdRow[2];

    if (sumFirstRow != sumSecondRow && sumSecondRow != sumThirdRow && sumFirstRow != sumThirdRow) {
        isMagic = false;

    } else {

        for (let i = 0; i < firstRow.length; i++) {
            let sumCol = 0;
            let column = [];

            column.push(firstRow[i], secondRow[i], thirdRow[i]);
            sumCol = firstRow[i] + secondRow[i] + thirdRow[i];

            if (sumCol == sumFirstRow) {
                isMagic = true;
            } else {
                isMagic = false;
                break;
            }
        }
    }

    console.log(isMagic);

}

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])