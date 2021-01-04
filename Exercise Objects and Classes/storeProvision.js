function storeProvision(stockArray, orderArray) {
    let stocks = {}
    let stock = storeFunction(stockArray, stocks);
    let delivery = storeFunction(orderArray, stocks);
    
    for (let line of Object.entries(stocks)) {
        console.log(`${line[0]} -> ${line[1]}`);
    }

    function storeFunction(arr, obj) {
        for (let i = 0; i < arr.length; i += 2) {
            let product = arr[i];
            let quantity = Number(arr[i + 1]);

            if (!obj[product]) {
                obj[product] = 0;
            }

            obj[product] += quantity;
        }
    }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])