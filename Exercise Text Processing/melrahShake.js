function melrahShake(arr) {
    let text = arr.shift();
    let pattern = arr.shift();

    while (pattern.length > 0) {
        let firstMatch = text.indexOf(pattern);
        let lastMatch = text.lastIndexOf(pattern);

        if(firstMatch == -1 && lastMatch == -1) {
            break;
        }
        let partOne = text.substring(0, firstMatch);
        let partTwo = text.substring(firstMatch + pattern.length);
        text = partOne + partTwo;
        partOne = text.substring(0, lastMatch-pattern.length);
        partTwo = text.substring(lastMatch);
        text = partOne + partTwo;
        let newPaternOne = pattern.substring(0, pattern.length / 2);
        let newPaternTwo = pattern.substring(pattern.length / 2 + 1);
        pattern = newPaternOne + newPaternTwo;
        console.log('Shaked it.');
    }

    console.log('No shake.');
    console.log(text);

}

melrahShake([ 'astalavista baby', 'sta'])