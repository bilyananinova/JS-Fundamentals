function neighborhoods(arr) {
    let listOfNeighborhoods = arr.shift().split(', ');
    let neighborhood = new Map();

    for (let line of listOfNeighborhoods) {
        neighborhood.set(line, []);
    }

    for (let line of arr) {
        let [neighborhoodName, person] = line.split(' - ')

        if (listOfNeighborhoods.includes(neighborhoodName)) {
            neighborhood.get(neighborhoodName).push(person)
        }
    }

    let sort = Array.from(neighborhood)
    let sorted = sort.sort((a, b) => b[1].length - a[1].length)

    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].length}`)
        for (let v of kvp[1]) {
            console.log(`--${v}`);
        }
    }
}


neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)