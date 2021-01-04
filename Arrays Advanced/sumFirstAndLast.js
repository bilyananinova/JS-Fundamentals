function sumFirstAndLast (arr) {
    let sum = Number(arr.shift()) + Number(arr.pop())

    console.log(sum)
}

sumFirstAndLast(['5', '10'])