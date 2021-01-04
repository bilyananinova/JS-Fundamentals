function bombNumber(initialSequence, pow) {
    let specialNumber = Number(pow[0]);
    let power = Number(pow[1]);

    for (let i = 0; i < initialSequence.length; i++) {
        let index = initialSequence.indexOf(specialNumber);
        if (index !== -1) {
            initialSequence.splice(index, power+1);
            initialSequence.splice((index - power), power);
        } else {
            break;
        }

    }

    let sum = 0;

    for (let element of initialSequence) {
        sum += Number(element);
    }

    console.log(sum);
}

bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]

)

