function reverseAnArrayOfStrings2(array) {
    let newArr = [];
    let printLine = ''

    for (let i = 0; i < array.length; i++) {
        newArr[i] = array[array.length - 1 - i];
    }

    for (let i = 0; i < newArr.length; i++) {
        printLine += newArr[i] + ' '
    }

        console.log(printLine);
}

reverseAnArrayOfStrings2(['a', 'b', 'c', 'd', 'e'])