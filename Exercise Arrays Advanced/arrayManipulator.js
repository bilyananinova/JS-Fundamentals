function arrayManipulator(arrNum, arrString) {

    for (let command of arrString) {

        command = command.split(" ");
        let com = command.shift();

        if (com === 'add') {

            let index = Number(command[0]);
            let element = Number(command[1]);
            arrNum.splice(index, 0, Number(element));

        } else if (com === 'addMany') {

            let index = command.shift();
            let nums = command.map(Number)
            arrNum.splice(Number(index), 0, ...nums);

        } else if (com === 'contains') {

            let element = Number(command);
            console.log(arrNum.indexOf(element))

        } else if (com === 'remove') {

            let index = Number(command);
            arrNum.splice(index, 1)

        } else if (com === 'shift') {

            let positions = Number(command);

            for (let i = 0; i < positions; i++) {
                let el = arrNum.shift();
                arrNum.push(el);
            }

        } else if (com === 'sumPairs') {
            let result = [];

            if (arrNum.length % 2 === 0) {
                for (let i = 0; i < arrNum.length; i += 2) {
                    result.push(arrNum[i] + arrNum[i + 1]);
                }
            } else {
                for (let i = 0; i < arrNum.length - 1; i += 2) {
                    result.push(arrNum[i] + arrNum[i + 1]);
                }
                result.push(arrNum.pop());
            }

            arrNum = result;

        } else if (com === 'print') {

            console.log('[ ' + arrNum.join(', ') + ' ]');

        }
    }
    // console.log(arrNum);

}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log('*'.repeat(50));

arrayManipulator([1, 2, 3, 4, 5], ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);
console.log('*'.repeat(50));

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
console.log('*'.repeat(50));

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
console.log('*'.repeat(50));

arrayManipulator([1, 2, 3, 4, 5, 6], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "contains 15", 'add 1 8', "remove 3", "print"]);

