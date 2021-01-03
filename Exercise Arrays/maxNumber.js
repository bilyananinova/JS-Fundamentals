function maxNumber(arr) {

    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isBigger = true;
        for (let index = i + 1; index < arr.length; index++) {
            let nextElemnt = arr[index];

            if (currentElement <= nextElemnt) {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            result += `${currentElement} `
        }
    }
    console.log(result)
}
maxNumber([41, 41, 34, 20])