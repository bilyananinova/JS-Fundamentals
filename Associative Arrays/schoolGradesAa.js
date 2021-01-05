function schoolGrades(arr) {

    let register = new Map()

    for (let student of arr) {
        let name = student.split(' ').shift()
        let grades = student.split(' ').slice(1).map(Number)

        if (register.has(name)) {
            register.set(name, register.get(name).concat(grades))
        } else {
            register.set(name, grades)
        }
    }

    Array.from(register).sort((a,b) => average(a[1]) - average(b[1]))
    .forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    });

    function average(array) {
        return array.reduce((acc, grade) => acc + grade) / array.length
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)