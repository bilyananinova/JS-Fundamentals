function equalSums(arr) {
    let result = 'no';

    for (let index = 0; index < arr.length; index++) {
        let leftSum = 0;
        let rightSum = 0;

        // sum left side
        for (let i = 0; i < index; i++) {
            let leftNum = Number(arr[i])
            leftSum += leftNum;
        }

        // sum right sum
        for (let i = index + 1; i < arr.length; i++) {
            let rightNum = Number(arr[i])
            rightSum += rightNum;
        }

        if (leftSum == rightSum) {
            result = index
        }
    }

    console.log(result);
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])