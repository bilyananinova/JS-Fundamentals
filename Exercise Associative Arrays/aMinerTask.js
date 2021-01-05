function aMinerTask(arr) {
    let list = {}
    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);

        if (!list[resource]) {
            list[resource] = 0;
        }

        list[resource] += quantity
    }

    for (let info of Object.keys(list)) {
        console.log(`${info} -> ${list[info]}`);
    }

}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
)