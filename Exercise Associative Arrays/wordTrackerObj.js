function wordTracker(arr) {
    let words = arr.shift().split(' ');
    let sentence = arr;
    let wordsObject = {};

    for (let word of words) {
        if (!wordsObject.hasOwnProperty(word)) {
            wordsObject[word] = 0;
        }
    }

    for (let word of sentence) {
        if (wordsObject.hasOwnProperty(word)) {
            wordsObject[word] += 1;
        }
    }

    let sort = Object.entries(wordsObject).sort((a, b) => b[1] - a[1]);
    sort.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);

    });
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
    'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this',
    'is', 'your', 'task'])