function charactersInRange(firstChar, lastChar) {

    let first = getCharValue(firstChar);
    let last = getCharValue(lastChar);

    let min = Math.min(first, last);
    let max = Math.max(first, last);
    let allSymbols = getCharInRange(min, max);

    console.log(joinSymbol(allSymbols, ' '));

    function getCharValue(char) {
        return char.charCodeAt(0);
    }

    function getChar(num) {
        return String.fromCharCode(num);
    }

    function getCharInRange(start, end) {
        let charList = [];

        for (let i = (start + 1); i < end; i++) {
            let symbol = getChar(i);
            charList.push(symbol);
        }
        return charList;
    }

    function joinSymbol(arr, separator) {
        let result = '';
        for (let index in arr) {
            let character = arr[index];

            if (index <= (arr.length - 2)) {
                result += `${character}${separator}`;
            } else {
                result += character;
            }
        }
        return result;
    }
}

charactersInRange('a','d')