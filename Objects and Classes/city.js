function city(obj) {
    let keysOfObj = Object.keys(obj)
    for (let key of keysOfObj) {
        let value = obj[key]
        console.log(`${key} -> ${value}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)