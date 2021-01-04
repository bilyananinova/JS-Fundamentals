function еmployees(arr) {
    let obj = {};
    for (let name of arr) {
        obj[name] = name.length;
    }

    Object.entries(obj)
    .forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    });
}

еmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)