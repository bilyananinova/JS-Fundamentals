function pascalCaseSplitter(str) {
    let word = '';
    let resultArray = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        let nextLetter = str[i + 1];

        if (nextLetter == undefined) {
            word += letter;
            resultArray.push(word);
            break;
        }

        if (nextLetter.charCodeAt() >= 97 && nextLetter.charCodeAt() <= 122) {
            word += letter;
        } else {
            word += letter;
            resultArray.push(word);
            word = '';
        }

    }

    console.log(resultArray.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

// function pascalCaseSplitter(str) {
//     let regex = /[A-Z][a-z]+/g;
//     let match = regex.exec(str)
//     let push = []
//     while (match !== null) {
//         push.push(match[0])
//         match = regex.exec(str)
//     }

//     console.log(push.join(', '));
// }

// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')