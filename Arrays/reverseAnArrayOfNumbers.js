function reverseAnArrayOfNumbers(n, array) {
    let newArr = [];
    let print = '';

    for (let i = 0; i < n; i++) {
        newArr[i] = array[i]        
    }

    for(let i = 0; i < newArr.length; i++) {
        print += newArr[i] + ' '
    }


    console.log(print)
}

reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])