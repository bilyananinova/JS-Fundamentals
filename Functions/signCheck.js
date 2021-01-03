function signCheck(numOne, numTwo, numThree) {
    let result = 0;
    for (let i = 0; i <= 1; i++) {
        result += numOne;

        for (let i = 0; i <= 1; i++) {
            result += numTwo;

            for (let i = 0; i <= 1; i++) {
                result += numThree;
            }
        }
    }

    if (result < 0) {
        console.log('Negative')
    } else if (result >= 0) {
        console.log('Positive')
    }
}

signCheck(-1,
    0,
   1
   
    
)    