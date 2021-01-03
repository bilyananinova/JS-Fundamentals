function perfectNumber(num) {

    if (!isPerfectNumer(num)) {
        console.log("It's not so perfect.");
    } else {
        console.log("We have a perfect number!");
    }

    function isPerfectNumer(n) {

        let isPerfect = false;
        let dividerSum = 0;

        for (let i = 1; i <= num; i++) {

            let perfectNumber = (num / i);

            if(perfectNumber % 1 == 0) {
                dividerSum += i
            }

            if ((perfectNumber > 0) && (perfectNumber !== num) && (perfectNumber % 1 == 0) && (dividerSum == perfectNumber)) {
                isPerfect = true;
            }
        }

        return isPerfect;

    }

}

perfectNumber(33550336)