function firstAndLastKNumbers(arr) {
   let k = arr.shift()

   let firstArray = arr.slice(0, k);
   let secondArray = arr.slice(arr.length - k, arr.length);

   console.log(firstArray.join(' '));
   console.log(secondArray.join(' '));

}

firstAndLastKNumbers([3, 6, 7, 8, 9])