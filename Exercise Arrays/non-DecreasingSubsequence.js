function nonDecreasingSubsequence(arr) {
    let resultArr = [];
    resultArr.push(arr[0])
    let biggerNum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        for (let index = i + 1; index < arr.length; index++) {
            let nextElement = arr[i + 1];

            if (currentElement <= nextElement) {
                biggerNum = nextElement;
                resultArr.push(biggerNum)
                break
            }

        }

    }

    console.log(resultArr.join(' '))
}

nonDecreasingSubsequence([ 20, 3, 2, 15, 6, 1])