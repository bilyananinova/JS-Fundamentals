function train(arr) {
    let wagons = arr.shift()
        .split(' ')
        .map(Number)
    let capacity = Number(arr.shift())

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].includes('Add')) {
            let commands = arr[i].split(' ');
            let command = commands[0];
            let pasangers = commands[1]
            wagons.push(pasangers)
        } else {
            let pasangers = Number(arr[i])
            for (let j = 0; j < wagons.length; j++) {
                if (pasangers + wagons[j] <= capacity) {
                    wagons[j] += pasangers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
    
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',])
