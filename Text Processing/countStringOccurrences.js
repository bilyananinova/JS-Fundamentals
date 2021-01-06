function countStringOccurrences(text, search) {
    let matcher = ` ${search} `;
    let index = text.indexOf(matcher);
    let count = 0;
    while (index != -1) {
        count++;

        index = text.indexOf(matcher, index + 1)
    }

    if (text.startsWith(search)) {
        count++;
    }

    if (text.endsWith(search)) {
        count++;
    }

    console.log(count);
}

countStringOccurrences("This is a word and it also is a sentence", "is")