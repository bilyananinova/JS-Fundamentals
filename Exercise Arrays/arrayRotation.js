function arrayRotation(arr, rotations) {

    let rot = rotations % arr.length;
    let myArr = []

    for (const index in arr) {

        if (index >= rot) {
            let element = arr[index]
            myArr.push(element)
        }
    }

    for (const index in arr) {

        if (index < rot) {
            let element = arr[index]
            myArr.push(element)
        }
    }

    console.log(myArr.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 7)