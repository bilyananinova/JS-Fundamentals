function town(arr) {
    let obj = {}
    for (let line of arr) {
        let [town, latitude, longitude] = line.split(' | ');
        obj.town = town,
            obj.latitude = Number(latitude).toFixed(2),
            obj.longitude = Number(longitude).toFixed(2),

        console.log(obj);
    }

}

town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])