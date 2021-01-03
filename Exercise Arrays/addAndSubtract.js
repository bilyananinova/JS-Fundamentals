function addAndSubtract(array) {
    let myArray = [];
    let myArraySum = 0;
    let arraySum = 0;

    for (let i = 0; i < array.length; i++) {

       if(array[i] % 2 == 0) {
           myArray[i] = array[i] + i
       } else {
        myArray[i] = array[i] - i
       }

       arraySum += array[i]
       myArraySum += myArray[i]

    }

    console.log(myArray);
    console.log(arraySum);
    console.log(myArraySum);

}

addAndSubtract([5, 15, 23, 56, 35])