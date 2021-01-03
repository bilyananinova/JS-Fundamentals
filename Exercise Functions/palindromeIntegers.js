function palindromeIntegers(arr) {

    for (let number of arr) {
        let reversedValueNumber = reversedValue(number);

        console.log(number == reversedValueNumber)
    }

    function reversedValue(num) {
        let reverse = '';

        while (num > 0) {
            let lastDigit = num % 10
            reverse += lastDigit
            num = parseInt((num / 10))
        }

        return reverse
    }
}

palindromeIntegers([123,323,421,121])