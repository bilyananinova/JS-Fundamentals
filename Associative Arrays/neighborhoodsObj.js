function neighborhoods(arr) {
    let listOfNeighborhoods = arr.shift().split(', ');
    let neighborhood = {};

    for (let line of listOfNeighborhoods) {
        neighborhood[line] = [];
    }

    for (let line of arr) {
        let [neighborhoodName, person] = line.split(' - ');
        if (listOfNeighborhoods.includes(neighborhoodName)) {

            if (neighborhood.hasOwnProperty(neighborhoodName)) {
                neighborhood[neighborhoodName].push(person);
            } else {
                neighborhood[neighborhoodName].push(person);

            }
        }
    }

    Object.entries(neighborhood).sort((a, b) => b[1].length - a[1].length)
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].length}`);
            for (let item of element[1]) {
                console.log(`--${item}`);
            }

        });
}


neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)