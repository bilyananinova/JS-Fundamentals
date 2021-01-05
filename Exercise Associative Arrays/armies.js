function armiesSolve(arr) {
    //Porter: { armiesName: { Legion: 55000, Retix: 3205 }, totalArmyCount: 58205 }
    let armyObject = {}

    for (let line of arr) {
        if (line.includes('arrives')) {
            let leader = line.substring(0, line.indexOf('arrives')).trim();
            armyObject[leader] = { armies: {}, total: 0 }
        } else if (line.includes(': ')) {
            let [leader, army] = line.split(': ');
            if (armyObject.hasOwnProperty(leader)) {
                let [armyName, count] = army.split(', ');
                if (!armyObject[leader].armies.hasOwnProperty(armyName)) {
                    count = Number(count);
                    armyObject[leader].armies[armyName] = count;
                    armyObject[leader].total += count;
                }
            }
        } else if (line.includes(' + ')) {
            let [armyName, count] = line.split(' + ');
            count = Number(count);
            for (let leader of Object.keys(armyObject)) {
                if (armyObject[leader].armies[armyName]) {
                    armyObject[leader].armies[armyName] += count;
                    armyObject[leader].total += count;
                }
            }
        } else if (line.includes('defeated')) {
            let leader = line.substring(0, line.indexOf('defeated')).trim();
            if (armyObject.hasOwnProperty(leader)) {
                delete armyObject[leader]
            }
        }
    }


    let sort = Object.entries(armyObject)
        .sort((a, b) => b[1].total - a[1].total)
    for (let [k, v] of sort) {
        console.log(`${k}: ${v.total}`);
        for (const key of Object.keys(v)) {
            let sorts = Object.entries(v[key]).sort((a, b) => b[1] - a[1])
            for (let el of sorts) {
                console.log(`>>> ${el[0]} - ${el[1]}`);
            }

        }
    }


}

armiesSolve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'])