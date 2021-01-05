function partyTime(arr) {

    let list = new Map();

    list.set('VIP', []);
    list.set('regular', []);

    let name = arr.shift();
    while (name != 'PARTY') {
        let firstChar = name[0];

        if (!isNaN(firstChar)) {
            list.get('VIP').push(name);
        } else if (isNaN(firstChar)) {
            list.get('regular').push(name);
        }

        name = arr.shift();
    }

    for (let name of arr) {

        if (list.get('VIP').includes(name)) {
            list.get('VIP').splice(list.get('VIP').indexOf(name), 1);
        } else if (list.get('regular').includes(name)) {
            list.get('regular').splice(list.get('regular').indexOf(name), 1);
        }
    }

    console.log(list.size);
    Array.from(list).forEach(element => {
        console.log(element[1].join('\n'));
    })
    
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])