function sortAnArrayBy2Criteria(arr) {

    let sort = arr.sort()
    sort.sort((a, b) => a.length - b.length)
    console.log(sort.join('\n'));
}

sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])