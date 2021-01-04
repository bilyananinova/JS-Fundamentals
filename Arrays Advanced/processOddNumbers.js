function processOddNumbers(arr) {
    let filtered = arr.filter((v, i) => i % 2 == 1);
    let mapped = filtered.map(x => x * 2);
    let reversed = mapped.reverse()

    console.log(reversed.join(' '));
}

processOddNumbers([10, 15, 20, 25])