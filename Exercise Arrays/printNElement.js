function printNElement(arr) {
    let newArr = [];

    let step = arr.pop(arr.length - 1);
    let counter = 0;
    newArr.push(arr[0]);

    for (let i = 0; i < arr.length; i++) {

        if(counter == step) {
            counter = 0;
            newArr.push(arr[i])
        }

        counter++;
    }
    console.log(newArr.join(' '))
}

printNElement(['1', '2', '3', '4', '5', '6'])