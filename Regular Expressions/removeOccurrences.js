function removeOccurrences(word, text) {
    let old = ''
    while (old != text) {
        old = text
        text = old.replace(word, '')
    }

    console.log(text);
}

removeOccurrences('ice', 'kicegiciceeb')