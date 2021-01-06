function valueOfAString(input) {
    let text = input[0];
    let command = input[1];
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        if (command == 'UPPERCASE') {
            if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
                sum += text.charCodeAt(i);
            }
        } else if (command == 'LOWERCASE') {
            if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
                sum += text.charCodeAt(i);
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['AC/DC', 'UPPERCASE'])