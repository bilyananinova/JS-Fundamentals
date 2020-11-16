function sortNumbers(firstNumber, secondNumber, thirdNumber) {
    let firstPosition = 0;
    let secondPosition = 0;
    let thirdPosiotion = 0;

    if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
        if (secondNumber >= thirdNumber) {
            firstPosition = secondNumber;
            secondPosition = thirdNumber;
            thirdPosiotion = firstNumber;
        } else if (secondNumber <= thirdNumber) {
            firstPosition = thirdNumber;
            secondPosition = secondNumber;
            thirdPosiotion = firstNumber;
        }
    } else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
        if (firstNumber <= thirdNumber) {
            firstPosition = thirdNumber;
            secondPosition = firstNumber;
            thirdPosiotion = secondNumber;
        } else if (thirdNumber <= firstNumber) {
            firstPosition = firstNumber;
            secondPosition = thirdNumber;
            thirdPosiotion = secondNumber;
        }
    } else if (thirdNumber <= firstNumber && thirdNumber <= secondNumber) {
        if (firstNumber <= secondNumber) {
            firstPosition = secondNumber;
            secondPosition = firstNumber;
            thirdPosiotion = thirdNumber;
        } else if (secondNumber >= firstNumber) {
            firstPosition = firstNumber;
            secondPosition = secondNumber;
            thirdPosiotion = thirdNumber;
        }
    }

    console.log(firstPosition);
    console.log(secondPosition);
    console.log(thirdPosiotion);
}

sortNumbers(0, 0, 2)