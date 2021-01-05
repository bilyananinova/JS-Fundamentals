function phoneBook(arr) {
    
    let person = new Map();

    for (let line of arr) {
        let [name, phone] = line.split(" ");
        person.set(name, phone)
    }

    Array.from(person.entries()).forEach(kvp => {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    });
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)