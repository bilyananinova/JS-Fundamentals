function equalArrays(firstArray, secondArray) {
    let sum = 0;
    let isEaqual = false;
    let index = 0;

    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
    }

    for (let i = 0; i < secondArray.length; i++) {
        secondArray[i] = Number(secondArray[i]);
    }

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] == secondArray[i]) {
            sum += firstArray[i];
            isEaqual = true;

        } else {
            index = i;
            isEaqual = false;
            break;
        }
    }
    if (isEaqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {

        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }

}
equalArrays(['1'], ['10'])