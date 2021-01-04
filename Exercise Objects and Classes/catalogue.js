function catalogue(input) {
    input = input.sort((a, b) => a.localeCompare(b));
    let obj = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');
        obj[product] = price
    }

    let letter = '';
    for (let keys of Object.keys(obj)) {
        let currentLetter = keys[0];
        if(currentLetter != letter) {
            letter = currentLetter;
            console.log(currentLetter);
        }
        console.log(`  ${keys}: ${obj[keys]}`);
    }
}


catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])