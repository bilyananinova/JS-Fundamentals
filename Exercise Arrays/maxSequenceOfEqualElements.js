function maxSequenceOfEqualElements(arr) {
    let bestSequence = [];
    let currentSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        currentSequence = [currentElement];

        for(let index = i+1; index < arr.length; i++) {
            let nextElement = arr[i + 1];
        
            if(currentElement == nextElement) {
                currentSequence.push(nextElement);
            } else {
                break;
            }
        }
        
        if(currentSequence.length > bestSequence.length) {
            bestSequence = currentSequence
        }
    }

    console.log(bestSequence.join(' '))
    
}

maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])