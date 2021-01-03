function nxnMatrix(num) {
    let result = '';

    for (let i = 1; i <= num; i++) {
        if (i < num) {
            result += num + ' '
        } else {
            result += num
        }

    }

    for (let i = 0; i < num; i++) {

        console.log(result);

    }

}

nxnMatrix(3)