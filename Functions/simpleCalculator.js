function simpleCalculator(numOne, numTwo, operator) {
    let operation = null;

    switch (operator) {
        case 'multiply':
            operation = (a, b) => a * b;
            break;
        case 'divide':
            operation = (a, b) => a / b;
            break;
        case 'add':
            operation = (a, b) => a + b;
            break;
        case 'subtract':
            operation = (a, b) => a - b;
            break;
    }

    let result = operation(numOne, numTwo)

    console.log(result)

}

simpleCalculator(5, 5, 'multiply')