function addressBook(arr) {
    let people = new Map();

    for (let line of arr) {
        let [name, place] = line.split(':');
        people.set(name, place)
    }

   Array.from(people).sort((a,b) => a[0].localeCompare(b[0]))
   .forEach(el => console.log(`${el[0]} -> ${el[1]}`))
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)