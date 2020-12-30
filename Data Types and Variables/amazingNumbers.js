function amazingNumbers(n) {
    n = n.toString();
    let sum = 0;
    let isAmazing = true;

    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }

    let result = sum.toString()

    for (let i = 0; i < result.length; i++) {
        if (result[i] == '9') {
            isAmazing = true;
        } else{
            isAmazing = false;
        }
    }

    if (isAmazing == true) {
        console.log(`${n} Amazing? True`);
    } else {
        console.log(`${n} Amazing? False`);
    }
}

amazingNumbers(999
    )