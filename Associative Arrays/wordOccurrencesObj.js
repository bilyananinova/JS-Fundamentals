function wordOccurrences(arr) {
    let words = {};
    for (let word of arr) {

        if (Object.keys(words).find(el => el == word)) {
            words[word] += 1;
        } else {
            words[word] = 1;
        }
    }

    let a = Object.entries(words).sort((a,b) => b[1] - a[1])
    .forEach(element => {
        console.log(`${element[0]} -> ${element[1]} times`);    
    });

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And", "finally", "the", "third", "sentence"])