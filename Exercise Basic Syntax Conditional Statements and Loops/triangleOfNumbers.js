function triangleOfNumbers(end) {

    for (let row = 1; row <= end; row++) {
        let printLine = '';

        for (let number = 1; number <= row; number++) {
            printLine += row + ' ';
        }
        console.log(printLine)
    }
}

triangleOfNumbers(5)