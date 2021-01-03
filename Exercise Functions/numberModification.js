function numberModification(number) {

    while (average(number) < 5) {
        number += '9';
    }

    function sum(n) {
        let numString = n.toString();
        let sum = 0;
        for (let i = 0; i < numString.length; i++) {
            sum += Number(numString[i]);
        }
        return sum;
    }

    function average(num) {
        return sum(num) / num.toString().length;
    }

    console.log(number);
}

numberModification(101)