function magicSum(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        for (let index = i + 1; index < arr.length; index++) {
            let nextNum = arr[index];
            if ((currentNum + nextNum) == sum) {
                console.log(`${currentNum} ${nextNum}`);
            }
        }
    }

}

magicSum([14, 20, 60, 13, 7, 19, 8], 27)