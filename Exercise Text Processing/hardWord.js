function hardWord(input) {
    let text = input.shift().split(' ')
    let words = input.shift()
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        for (let j = 0; j < text.length; j++) {
            let currentWord = text[j];
            if (currentWord.endsWith(',') || currentWord.endsWith('.')) {
                currentWord = currentWord.substring(0, text[j].length - 1)
            }
            if (currentWord.length == word.length && currentWord == '_'.repeat(word.length)) {
                text[j] = text[j].replace(currentWord, word);
                break;
            }

        }
    }

    console.log(text.join(' '));
}

hardWord([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])

