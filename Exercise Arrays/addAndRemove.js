function addAndRemove(arr) {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 'add') {
            newArr.push(i + 1)
        } else {
            newArr.pop()
        }

    }

    if (newArr.length > 0) {
        console.log(newArr.join(' '));
    } else {
        console.log('Empty');
    }

}
addAndRemove(['remove', 'remove', 'remove'])