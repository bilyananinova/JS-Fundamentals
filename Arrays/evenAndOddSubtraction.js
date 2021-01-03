function evenAndOddSubtraction(array) {
    let diff = 0;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);

        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }

    } 

    diff = evenSum - oddSum;

    console.log(diff);

}
evenAndOddSubtraction([2,4,6,8,10])