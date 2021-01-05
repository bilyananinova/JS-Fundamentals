function oddOccurrences(str) {
    let words = str.split(' ');
    let wordsMap = new Map();

    for (let word of words) {
        word = word.toLowerCase()
        if (!wordsMap.has(word)) {
            wordsMap.set(word,1);
        } else {
            wordsMap.set(word, wordsMap.get(word)+1)
        }
    }

    let print = [];
    
    for (let kvp of Array.from(wordsMap)){
        if(kvp[1] % 2 == 1) {
           print.push(kvp[0])
        } 
    }
   
    console.log(print.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')