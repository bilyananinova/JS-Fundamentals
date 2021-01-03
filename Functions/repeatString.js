function repeatString(string, times) {
    let result = '';

    for (let i = 0; i < times; i++) {
        result += string;
    }

    return result
}

let string = repeatString('abc', 3);
console.log(string)
