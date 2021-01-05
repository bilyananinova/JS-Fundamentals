function travelTime(arr) {
    let list = {}

    for (let i = 0; i < arr.length; i++) {
        let [country, town, cost] = arr[i].split(' > ');

        if (!list.hasOwnProperty(country)) {
            list[country] = {};
            list[country][town] = cost;
        }

        if (list.hasOwnProperty(country)) {
            let towns = list[country];
            if (towns.hasOwnProperty(town)) {
                let oldCost = list[country][town];
                if (oldCost < cost) {
                    continue;
                } else {
                    list[country][town] = cost;
                }
            } else {
                list[country][town] = cost;
            }
        }
    }

    let sortCountry = Object.keys(list).sort((a, b) => a[0].localeCompare(b[0]));

    for (let country of sortCountry) {
        let print = ''
        print = `${country} -> `
        let sortTowns = Object.entries(list[country]).sort((a, b) => a[1] - b[1])
        sortTowns.forEach(element => {
            print += `${element[0]} -> ${element[1]} `
        });

        console.log(print);
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10',
])