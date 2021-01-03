function sumFirstAndLastArrayElements(array) {
    let firstNumber = Number(array[0]);
    let secondNumber = Number(array[array.length -1]);
    let sum = firstNumber + secondNumber;
    console.log(sum)
}

sumFirstAndLastArrayElements(['11', '58', '69'])