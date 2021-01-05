function wordTracker(arr) {
    let searchWords = arr.shift().split(' ');

    let track = new Map();
    let counter = 0

    for (let line of searchWords) {
        track.set(line, counter);
    }

    for (let word of arr) {

        if (track.has(word)) {
            let counter = track.get(word)
            track.set(word, counter += 1);
        }
    }

    Array.from(track).sort((a, b) => b[1] - a[1])
        .forEach(kvp => {
            console.log(`${kvp[0]} - ${kvp[1]}`);
        });
}



wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)