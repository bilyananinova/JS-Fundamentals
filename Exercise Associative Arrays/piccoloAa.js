function piccolo(arr) {

    let record = new Map();

    for (let line of arr) {
        let [direction, number] = line.split(', ');

        if (direction == 'OUT') {
            record.delete(number);
            continue
        }

        record.set(number, direction);
    }
    if (record.size > 0) {
        let print = Array.from(record).sort((a, b) => a[0].localeCompare(b[0]));

        for (let kvp of print) {
            console.log(`${kvp[0]}`);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

)