function jansNotation(arr) {
    let numArr = [];
    let operatorArr = [];
    arr.map(Number)

    for (let index = 0; index < arr.length; index++) {

        for (const element of arr) {

            if (element === Number(element)) {
                numArr.push(element)
            } else {
                operatorArr.push(element)
            }
        }

        if (operatorArr.length >= numArr.length) {
            break;
        }

        if((numArr.length - 1) > operatorArr.length) {
            break;
        }

        for (let i = 0; i < numArr.length; i++) {

            let firstOperand = numArr.pop();
            let secondOperand = numArr.pop();
            let operator = operatorArr.shift()
            let result = 0;

            if (operator === '+') {
                result = Math.ceil(secondOperand + firstOperand);
            } else if (operator === '-') {
                result = Math.ceil(secondOperand - firstOperand)
            } else if (operator === '*') {
                result = Math.ceil(secondOperand * firstOperand)
            } else if (operator === '/') {
                result = Math.ceil(secondOperand / firstOperand);
            }
            numArr.push(result)

        }

        if (numArr.length <= 1) {
            break;
        }
    }

    if (operatorArr.length >= numArr.length) {
        console.log('Error: not enough operands!')
    } else if((numArr.length - 1) > operatorArr.length) {
        console.log('Error: too many operands!')
    } else {
        console.log(numArr.join(''));
    }
}

jansNotation([31,
    2,
    '+',
    11,
    '/']
   )