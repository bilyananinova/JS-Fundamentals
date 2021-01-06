function revealWords(words, templates) {
    let word = words.split(', ');
    for (let i = 0; i < word.length; i++) {
        let a = word[i];
        let b = '*'.repeat(word[i].length)
        templates = templates.replace(b, a);
    }

    console.log(templates);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')