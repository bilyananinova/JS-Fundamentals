function inventory(arr) {
    let heroesArray = [];
    let obj = {};
    //[{}, {}, {}]

    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(' / ');
        items = items.split(', ').sort((a, b) => a.localeCompare(b))
        obj = {
            name: name,
            level: level,
            items: items
        }

        heroesArray.push(obj);
    }

    heroesArray.sort((a, b) => a.level - b.level);

    heroesArray.forEach(element => {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items.join(', ')}`);
    });
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)