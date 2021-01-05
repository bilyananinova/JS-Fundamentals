function garage(arr) {
    let garages = new Map();
    for (const line of arr) {
        let [garage, carInfo] = line.split(' - ');
        if (!garages.has(garage)) {
            garages.set(garage, [carInfo]);
        } else {
            let oldInfo = garages.get(garage);
            garages.set(garage, oldInfo.concat(carInfo))
        }
    }

    Array.from(garages).forEach(([g, i]) => {
        console.log(`Garage № ${g}`);
        i.forEach(el => {
            el = el.replace(/:/g, ' -')
            console.log(`--- ${el}`);
        })
    });
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])