function addressBook(arr) {
    let people = {}

    for (let line of arr) {
        let [name, place] = line.split(':');
        people[name] = place;
    }

    let sort = Object.entries(people).sort((a, b) => a[0].localeCompare(b[0]))
    sort.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)