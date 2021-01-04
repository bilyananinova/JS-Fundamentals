function schoolRegister(arr) {
    let register = {};

    for (let line of arr) {
        let tokens = line.split(', ')
        let name = tokens[0].split(': ')[1];
        let grade = tokens[1].split(': ').map(Number)[1] + 1;
        let score = tokens[2].split(': ').map(Number)[1];
        if (score >= 3) {
            if (!register.hasOwnProperty(grade)) {
                register[grade] = [];
            }
            register[grade].push({ name, score });
        }
    }

    //As result of your work, you have to print the entire school register sorted in ascending order by grade 
    let sort = Object.keys(register).sort((a, b) => a - b);


    for (let grade of sort) {
        console.log(`${grade} Grade `);
        let names = Object.values(register[grade]).map(x => x.name);
        console.log(`List of students: ${names.join(', ')}`);
        let gradesAverage = average(Object.values(register[grade]).map(x => x.score));
        console.log(`Average annual grade from last year: ${gradesAverage.toFixed(2)}`);
        console.log();
    }

    function average(array) {
        return array.reduce((acc, s) => acc + s, 0) / array.length;
    }
}


schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])