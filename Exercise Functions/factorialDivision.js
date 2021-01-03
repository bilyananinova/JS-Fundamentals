function factorialDivision(factorial, divider) {

    console.log((factorials(factorial)/factorials(divider)).toFixed(2))

    function factorials(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }

        return result
    }

}

factorialDivision(1, 2)