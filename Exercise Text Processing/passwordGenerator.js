function passwordGenerator(arr) {
    let text = arr[0] + arr[1];
    let word = arr[2].toUpperCase();
    let password = text.split('');
    let counter = 0;

    for (let i = 0; i < password.length; i++) {
        let letter = password[i];
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            password[i] = word[counter];
            counter++;
            if (counter == word.length) {
                counter = 0;
            }
        }

    }

    password = password.reverse().join('');
    console.log(`Your generated password is ${password}`);

}

passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])