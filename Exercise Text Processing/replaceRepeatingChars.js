function replaceRepeatingChars(str) {
    str = str.split('');
    let resultArray = [];

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let nextChar = str[i + 1];

        if(currentChar !== nextChar) {
            resultArray.push(currentChar)
        }
    }
    console.log(resultArray.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')