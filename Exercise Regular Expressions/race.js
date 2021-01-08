function race(arr) {
    let participants = arr.shift().split(', ');
    let partic = {};
    
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i];
        let name = line.replace(/[^A-Za-z]/g, "");
        let km = 0;
        
        if (participants.includes(name)) {
            let kms = line.replace(/[^0-9]/g, "")
                .split('')
                .forEach(element => {
                    element = Number(element);
                    km += element;
                });
            if (!partic[name]) {
                partic[name] = 0
            }

            partic[name] += km;

        }
    }

    let sort = Object.entries(partic).sort((a, b) => b[1] - a[1]).slice(0, 3);

    console.log(`1st place: ${sort[0][0]}`);
    console.log(`2nd place: ${sort[1][0]}`);
    console.log(`3rd place: ${sort[2][0]}`);

}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])