function piccolo(arr) {

    let record = {};

    for (let line of arr) {
        let [status, number] = line.split(', ');
        if (!record[number] && status == 'IN') {
            record[number] = status;
        } else if(status == 'OUT') {
            delete record[number]
        }
    }

    let sort = Object.keys(record).sort((a, b) => a.localeCompare(b));
    if (Object.keys(record).length > 0) {
        sort.forEach(element => {
            console.log(`${element}`);
        });
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)