function lastKNumbersSequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let lastKArray = result.slice(-k);
        let sum = 0;

        for (let j = 0; j < lastKArray.length; j++) {
            sum += lastKArray[j];
        }

        result.push(sum)

    }

    console.log(result.join(' '))
}

lastKNumbersSequance(6, 3)