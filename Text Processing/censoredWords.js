function censoredWords(sentence, word) {
    let result = sentence.split(word).join('*'.repeat(word.length));
    console.log(result);
}

censoredWords("A small sentence with some words", "small")