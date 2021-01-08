function fullName(arr) {
    let text = arr.toString();
    let patern = /\b[A-Z][a-z]+[ ][A-Z][a-z][a-z]+\b/g;
    let match = patern.exec(text);
    let res =[];

    while(match !== null) {
        res.push(match[0]);
        match = patern.exec(text);
        text = arr.toString();
    }

    console.log(res.join(' '));
    
}

fullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
])