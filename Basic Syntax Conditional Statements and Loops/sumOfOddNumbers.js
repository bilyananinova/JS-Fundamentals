function sumOfOddNumbers(n) {
    let sum = 0;
    let odd = 0;

    for (let i = 0; i <= 100; i++) {

        if (i % 2 !== 0) {
            sum += i;
            odd++;
            console.log(i)
        }

        if (odd == n) {
            break;
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5)