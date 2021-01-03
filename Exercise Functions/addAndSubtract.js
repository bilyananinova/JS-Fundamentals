function addAndSubtract(x, y, z) {

    let sumNum = sum(x, y)
    let result = subtract(sumNum, z)

    console.log(result)

    function sum(a, b) {
        return (a + b)
    }

    function subtract(a, b) {
        return (a - b)
    }

}

console.log(addAndSubtract(23, 6, 10))