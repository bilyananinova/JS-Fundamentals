function grades(grade) {
    if (grade < 3.00) {
        console.log('Fail (2)')
    } else if (grade >= 3.0 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`)
    } else if (grade >= 3.5 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`)
    } else if (grade >= 4.5 && grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`)
    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`)
    }

} 

grades(3.33)

