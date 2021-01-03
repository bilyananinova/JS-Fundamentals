function rotateArray(arr) {

    let rot = Number(arr.pop());
    let rotations = rot % arr.length


    for (let i = 0; i < rotations; i++) {
        let element = arr.pop()
        arr.unshift(element)
    }

    console.log(arr.join(' '));

}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])