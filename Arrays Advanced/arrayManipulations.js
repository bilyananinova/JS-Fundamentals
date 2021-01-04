function arrayManipulations(arr) {
    let array = arr.shift()
        .split(' ')
        .map(Number)

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ');
        let command= line[0];
        let num = line[1];
        let index = line[2];

        if (command == 'Add') {
            add(num);
        } else if (command == 'Remove') {
            remove(num)
        } else if (command == 'RemoveAt') {
            removeAt(num)
        } else if (command == 'Insert') {
            insert(num, index)
        }
    }

    function add(num) {
        array.push(Number(num));
        return array;
    }

    function remove (num) {
        num = Number(num)
        array = array.filter(e => e != num);
        return array;
    }

    function removeAt (num) {
        index = Number(num)
        array.splice(index, 1);
        return array;
    } 

    function insert(num, index) {
        num = Number(num)
        index = Number(index)
        array.splice(index, 0, num);
        return array;
    }

    console.log(array.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])