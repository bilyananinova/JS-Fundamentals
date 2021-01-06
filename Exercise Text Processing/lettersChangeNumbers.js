function lettersChangeNumbers(str) {
    let a = str.split(' ');
    let result = 0;
    for (let word of a) {
        if(word < 1) {
            continue;
        }
        let letters = word.split('');

        let firstLetter = letters.shift();
        let lastLetter = letters.pop();

        let number = Number(letters.join(''));

        if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
            let divider = firstLetter.charCodeAt() - 64;
            number /= divider;
        } else if (firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122) {
            let multiply = firstLetter.charCodeAt() - 96;
            number *= multiply;
        }

        if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
            let subtract = lastLetter.charCodeAt() - 64;
            number -= subtract;
        } else if (lastLetter.charCodeAt() >= 97 && lastLetter.charCodeAt() <= 122) {
            let add = lastLetter.charCodeAt() - 96;
            number += add;
        }

        result += number
    }
    console.log(result.toFixed(2));
}

lettersChangeNumbers('a1A')