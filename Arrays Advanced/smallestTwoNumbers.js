function smallestTwoNumbers(arr) {
    let sortedArray = arr.sort((x, y) => x - y);
    let slisedSortedArray = sortedArray.slice(0,2)

    console.log(slisedSortedArray.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])