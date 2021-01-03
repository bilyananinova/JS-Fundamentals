function pointsValidation(arr) {
    let x1 = +arr[0];
    let y1 = +arr[1];
    let x2 = +arr[2];
    let y2 = +arr[3];

    function firstPointFunction() {
        let sumFirstPoint = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return sumFirstPoint
    }

    function secondPointFunction() {
        let sumSecondPoint = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return sumSecondPoint;
    }

    function thirdPointFunction() {
        let checkDistance = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return checkDistance;
    }

    let firstPointCheck = firstPointFunction(x1, y1)

    let secondPointCheck = secondPointFunction(x2, y2)

    let distance = thirdPointFunction(x1, y1, x2, y2)

    if (firstPointCheck === Math.trunc(firstPointCheck)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondPointCheck === Math.trunc(secondPointCheck)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (distance === Math.trunc(distance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

pointsValidation([2, 1, 1, 1])