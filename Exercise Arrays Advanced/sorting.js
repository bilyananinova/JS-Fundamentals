function sorting(arr) {
    let sortedArr = arr.sort(function (a, b) {
        return a - b
    });

    let resultArr = [];

    while(sortedArr != 0) {
        resultArr.push(sortedArr[sortedArr.length - 1]);
        sortedArr.pop();
        resultArr.push(sortedArr[0]);
        sortedArr.shift();

    }
    console.log(resultArr.join(' '));
}

sorting([1, 10, 9, 15, 2, 3, 4]);