function printAndSum(start, end) {
    let printLine = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        printLine += i + ' ';
        sum += i;
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60)