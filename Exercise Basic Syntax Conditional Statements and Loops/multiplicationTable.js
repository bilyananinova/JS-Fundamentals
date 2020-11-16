function multiplicationTable(num) {
    let times = 1;
    let result = 0;
    while (times <= 10) {
        result = num * times;
        console.log(`${num} X ${times} = ${result}`);
        times++;
    }
}

multiplicationTable(2)