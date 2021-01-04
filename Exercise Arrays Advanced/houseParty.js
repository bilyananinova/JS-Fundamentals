function houseParty(arr) {
    let guestList = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].includes('is going!')) {
            let type = arr[i].split(' ');
            let name = type[0];

            if (guestList.includes(name) === true) {
                console.log(`${name} is already in the list!`);
                continue;
            }

            guestList.push(name);            
            
        } else {
            let type = arr[i].split(' ');
            let name = type[0];

            if (guestList.includes(name) === false) {
                console.log(`${name} is not in the list!`);
                continue;
            }

            if (guestList.includes(name) === true) {
                let index = guestList.indexOf(name);
                guestList.splice(index,1)
            }
        }

    }

    console.log(guestList.join('\n'))
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)