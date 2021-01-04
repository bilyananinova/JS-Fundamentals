function searchForANumber(arrayOne, secondArray) {

    let newArrLength = secondArray[0];
    let deleteNum = secondArray[1];
    let searchNum = secondArray[2];

    let newArr = arrayOne.splice(0, newArrLength)
    newArr.splice(0, deleteNum);

    let includes = 0;

    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i] == searchNum) {
            includes++;
        }
    }

    console.log(`Number ${searchNum} occurs ${includes} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)