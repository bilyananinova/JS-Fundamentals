function storage(arr) {
    let storageList = new Map();

    for (let line of arr) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity)

        if (storageList.has(product)) {
           let oldQuantity = storageList.get(product)
            storageList.set(product, oldQuantity + quantity);
        } else {
            storageList.set(product, quantity);
        }

    }

    Array.from(storageList).forEach(kvp => console.log(`${kvp[0]} -> ${kvp[1]}`))
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)