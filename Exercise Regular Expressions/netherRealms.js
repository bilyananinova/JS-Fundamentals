function netherRealms(arr) {
    let split = /([, ]+)/g;
    let line = arr[0].split(split);
    let demons = {};
    let regexName = /(?<name>[^0-9+\-*/.])/g;
    let regexNum = /((\-|\+)?\d+\.?\d*)/g;
    let regexSym = /(\*|\/)/g;

    for (let i = 0; i < line.length; i++) {
        let currentDemon = line[i];
        if (currentDemon.includes(',') || currentDemon.includes(' ')) {
            continue;
        }
        let matchName = regexName.exec(currentDemon);
        let matchNum = regexNum.exec(currentDemon);
        let matchSym = regexSym.exec(currentDemon);
        let name = '';
        let hp = 0;
        let dm = 0;
        while (matchName != null) {
            name += matchName[0];
            matchName = regexName.exec(currentDemon);
        }

        for (let letter of name) {
            hp += letter.charCodeAt();
        }

        while (matchNum != null) {
            dm += +matchNum[0];
            matchNum = regexNum.exec(currentDemon);
        }

        while (matchSym != null) {
            if (matchSym[0] == '*') {
                dm *= 2;
            } else if (matchSym[0] == '/') {
                dm /= 2;
            }
            matchSym = regexSym.exec(currentDemon)
        }

        demons[currentDemon] = {
            health: hp,
            demage: dm.toFixed(2),
        }

    }

    let sort = Object.keys(demons).sort((a, b) => a.localeCompare(b));
    for (let demon of sort) {
        console.log(`${demon} - ${demons[demon].health} health, ${demons[demon].demage} damage`);

    }
}

netherRealms(['m15*/c-5.0'])
netherRealms(['M3ph-0.5s-0.5t0.0**'])
netherRealms(['M3ph1st0** Azazel'])
netherRealms(['Gos/ho'])