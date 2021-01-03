function printDNA(length) {
    let sequence = 'ATCGTTAGGG'
    let count = 0;
    for (let i = 0; i < length; i++) {
        let a = sequence[(count % 10)] 
        let b = sequence[(count % 10) + 1]; 
        if (i % 4 == 0) {

            console.log(`**${a}${b}**`);
        } else if (i % 4 == 1) {

            console.log(`*${a}--${b}*`);

        } else if (i % 4 == 2) {

            console.log(`${a}----${b}`);

        } else if (i % 4 == 3) {

            console.log(`*${a}--${b}*`);

        }

        count += 2
    }
}
printDNA(10)