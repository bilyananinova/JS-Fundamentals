function wordOccurrences(arr) {
    let words = new Map();
    for (let word of arr) {

        if (words.has(word)) {
            let old = words.get(word);
            let newW = old + 1;
            words.set(word, newW);
        } else {
            words.set(word, 1);
        }
    }

    Array.from(words.entries()).sort((a, b) => b[1] - a[1])
    .forEach(kvp => {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    });
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And", "finally", "the", "third", "sentence"])