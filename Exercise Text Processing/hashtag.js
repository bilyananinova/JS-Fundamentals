// function hashtag(str) {
//     let words = str.split(' ')
//     for (let word of words) {
//         if (word[0] == '#' && word.length > 1) {
//             word = word.substring(1);
//             let isWithoutNum = true;
//             for (let char of word) {
//                 let c = char.charCodeAt()
//                 if (c < 65 || c > 90 && c < 97 || c > 122) {
//                     isWithoutNum = false
//                     break;
//                 }
//             }
//             if(isWithoutNum) {
//                 console.log(word);
//             }
//         }

//     }
// }

// hashtag('Nowadays everyone uses # to tag a #speci4al word in #socialMedia')

function hashtag(str) {
    let words = str.split(' ')
    let regex = /#[A-Za-z]+\b/g;
    let match = regex.exec(words);
    while (match !== null) {
       console.log(match[0].substring(1));
        match = regex.exec(words)
    }
    
}

hashtag('Nowadays everyone uses # to tag a #speci4al word in #socialMedia')