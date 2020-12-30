function primeNumberChecker(num) {
    let isPrime = false
    if (num <= 1) {
        console.log('false');
    }

    if (num <= 2) {
        console.log('true');
    }

    for (let i = 2; i <= num; i++) {

        if(i % 2 === 0) {
            isPrime = false;
        } else {
            isPrime = true;
        }
    }

    if(isPrime == true) {
        console.log('true');
    } else {
        console.log('false');
    }
}

primeNumberChecker(8)