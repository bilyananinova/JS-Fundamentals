function mergeArrays(firstArray, secondArray) {
    let thirdArray = [];
    let output = '';

    for (const index in firstArray) {
        if (index % 2 == 1) {
            thirdArray[index] = firstArray[index] + secondArray[index];
        } else {
            thirdArray[index] = Number(firstArray[index]) + Number(secondArray[index]);
        }

        if (index < firstArray.length - 1) {
            output += thirdArray[index] + ' - ';
        } else {
            output += thirdArray[index];
        }
    }

    console.log(output)

}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])