function ladybugs(arr) {
    let fieldSize = arr.shift();
    let startPosition = arr.shift()
        .split(' ')
        .map(Number);
    let ladybugArr = [];

    // fill the array with 0
    for (let i = 0; i < fieldSize; i++) {
        ladybugArr.push(0)
    }
    // mark starting ladybugs index
    for (let i = 0; i < fieldSize; i++) {
        let ladybugPositionArr = startPosition[i];
        if (ladybugPositionArr >= 0 && ladybugPositionArr < fieldSize) {
            ladybugArr[ladybugPositionArr] = 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let [startIndex, direction, length] = arr[i].split(' ')
        startIndex = Number(startIndex);
        length = Number(length);
        //If you are given ladybug index that does not have ladybug there, nothing happens. If you are given ladybug index that is outside the field, nothing happens. 
        if (ladybugArr[startIndex] !== 1 || startIndex < 0 || startIndex >= ladybugArr.length) {
            continue;
        }

        // check for negative steps
        if (length < 0) {
            length = Math.abs(length)
            if (direction == 'left') {
                direction = 'right'
            } else if (direction == 'right') {
                direction = 'left'
            }
        }
        // Free Position
        ladybugArr[startIndex] = 0;
        if (direction == 'right') {
            // Ladybug jumps one time
            let nextPosition = startIndex + length;
            // Jump another time if there is a lady bug
            if (ladybugArr[nextPosition] == 1) {
                nextPosition = nextPosition + length
            }

            if (nextPosition < ladybugArr.length) {
                ladybugArr[nextPosition] = 1;
            }
        }
        else {
            // Lady bug jumps to the left
            let nextPosition = startIndex - length;
            // Jump another time if there is a lady bug
            if (ladybugArr[nextPosition] == 1) {
                nextPosition = nextPosition - length
            }

            if (nextPosition >= 0) {
                ladybugArr[nextPosition] = 1;
            }
        }
    }

    console.log(ladybugArr.join(' '));

}

ladybugs([5, '3',
    '3 left 2',
    '1 left -2']
)