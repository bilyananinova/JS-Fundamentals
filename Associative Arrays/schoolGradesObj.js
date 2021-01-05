function schoolGrades(arr) {

    let register = {}

    for (let student of arr) {
        let name = student.split(' ').shift()
        let grades = student.split(' ').slice(1).map(Number)

        if (register.hasOwnProperty(name)) {
            let old = register[name];
            let newG = old.concat(grades)
            register[name] = newG
        } else {
            register[name] = grades;
        }
    }

    Object.entries(register).sort((a, b) => average(a[1]) - average(b[1]))
    .forEach(element => {
        console.log(`${element[0]}: ${element[1].join(', ')}`);
    });
    
    function average(array) {
        return array.reduce((acc, n) => acc + n, 0) / array.length;
    }

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)