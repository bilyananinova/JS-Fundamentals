function oddAndEvenSum (number) {
    let oddSum = isOddNumber(number);
    let evenSum = isEvenNumber(number);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function isOddNumber (num) {
        let sumOdd = 0;

        while(num >0) {
            let lastDigit = num % 10

            if(lastDigit % 2 == 1) {
                sumOdd += lastDigit
            }

            num = Math.trunc((num/10))
        }
        
        return sumOdd
    }

    function isEvenNumber (num) {
        let sumEven = 0;

        while(num >0) {
            let lastDigit = num % 10

            if(lastDigit % 2 == 0) {
                sumEven += lastDigit
            }

            num = Math.trunc((num/10))
        }
        
        return sumEven
    }
}

oddAndEvenSum (3495892137259234)