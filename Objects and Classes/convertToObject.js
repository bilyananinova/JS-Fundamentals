function convertToObject (jsonStr) {

    let toObj = JSON.parse(jsonStr);

    for (let [key, value] of Object.entries(toObj)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject ('{"name": "George", "age": 40, "town": "Sofia"}');