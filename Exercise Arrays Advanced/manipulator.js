function arrayManipulator(arrNum, arrString) {

    for (let i = 0; i < arrString.length; i++) {
        let element = arrString[i].split(' ');
        let command = element.shift();

        if (command == 'add') {

            let index = element.shift();
            let num = Number(element.shift());

            arrNum.splice(index, 0, num);

        } else if (command == 'addMany') {
            let index = Number(element.shift());
            let num = element

            for (let j = 0; j < num.length; j++) {
                arrNum.splice(index, 0, Number(num[j]));
                index++;
            }

        } else if (command == 'contains') {

            let index = Number(element.shift());

            if (arrNum.includes(Number(index))) {
                let i = arrNum.indexOf(Number(index));
                console.log(i);
            } else {
                console.log('-1');
            }

        } else if (command == 'remove') {
            arrNum.splice(3, 1);
        } else if (command == 'shift') {
            let rot = element.shift();

            for (let k = 0; k < rot; k++) {
                let item = arrNum.shift()
                arrNum.push(item)
            }
        } else if (command == 'sumPairs') {

            let temporaryArr = [];

            for (let m = 0; i < arrNum.length / 2; m++) {
                let firstN = arrNum[m]
                let secondN = arrNum[m + 1]
                let sumPairs = firstN + secondN;
                temporaryArr.push(sumPairs);
               
                if (temporaryArr.length == (arrNum.length / 2)) {
                    break;
                }
            }

            arrNum = temporaryArr;

        } else if (command == 'print') {
            break;
        }
    }

    console.log('[ ' + arrNum.join(', ') + ' ]');
}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
// arrayManipulator([2, 4, 2, 4, 2, 4], ["sumPairs", "print"]);
// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2] ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])    //[ -1, -2, -3, 6, 6, 6 ] - expected output
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])    //[ -1, -2, -3, 6, 6, 6 ] - expected output