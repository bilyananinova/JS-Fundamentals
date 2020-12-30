function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        i = i.toString();

        let sum = 0;

        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);

        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

    }

}

specialNumbers(15)