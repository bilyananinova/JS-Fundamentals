function asciiSumator(arr) {
    let startNum = arr.shift().charCodeAt(0);
    let endNum = arr.shift().charCodeAt(0);;
    let str = arr.shift()
    let sum = 0;

    let start = Math.min(startNum,endNum)
    let end = Math.max(startNum,endNum)

    for (let i = 0; i < str.length; i++) {
        let curr = str.charCodeAt(i);
        if (str.charCodeAt(i) > start && end > str.charCodeAt(i)) {
            sum += curr;
        }
    }

    console.log(sum);
}

asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$'])