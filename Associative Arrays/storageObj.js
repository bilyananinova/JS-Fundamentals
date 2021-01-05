function storage(arr) {
    let storageList = {}

    for (let line of arr) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity)

        if (storageList[product]) {
            storageList[product] += quantity
        } else {
            storageList[product] = quantity;
        }

    }

    for (let key of Object.keys(storageList)) {
        console.log(`${key} -> ${storageList[key]}`);        
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)