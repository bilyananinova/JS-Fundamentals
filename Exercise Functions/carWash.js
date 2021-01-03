function carWash(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element == 'soap') {
            soap();
        } else if (element == 'water') {
            water();
        } else if (element == 'vacuum cleaner') {
            vacuumCleaner();
        } else if (element == 'mud') {
            mud();
        }

    }

    function soap(element) {
        result += 10;
    }

    function water(element) {
        result *= 1.2;
    }

    function vacuumCleaner(element) {
        result *= 1.25;
    }

    function mud(element) {
        result *= 0.90;
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])