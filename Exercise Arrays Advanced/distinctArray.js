function distinctArray(input) {
    let output = [];

    for (const element of input) {
        if(!output.includes(element)) {
            output.push(element)
        }
    }


    console.log(output.join(' '))
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])