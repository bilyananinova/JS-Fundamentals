function arenaTier(arr) {
    let arena = {};
    let skills = {}
    // {
    //     Pesho: {  Duck: 400 },
    //     Julius: {  Shield: 150  },
    //     Gladius: {  Heal: 200, Support: 250, Shield: 250 }
    // }
    for (let line of arr) {
        if (line.includes(' -> ')) {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = +skill
            if (!arena.hasOwnProperty(gladiator)) {
                arena[gladiator] = {};
                skills[gladiator] = 0;
            }

            if (arena.hasOwnProperty(gladiator)) {
                if (!arena[gladiator].hasOwnProperty(technique)) {
                    arena[gladiator][technique] = skill;
                    skills[gladiator] += skill;
                } else {
                    let currentSkill = arena[gladiator][technique];
                    if (currentSkill < skill) {
                        arena[gladiator][technique] = skill;
                    }
                }
            }
        } else if (line.includes(' vs ')) {
            let [gladOne, gladTwo] = line.split(' vs ');
            if (arena[gladOne] && arena[gladTwo]) {
                let gladOneTech = Object.keys(arena[gladOne]);
                let gladTwoTech = Object.keys(arena[gladTwo]);

                let common = gladOneTech.filter(x => gladTwoTech.includes(x));

                if (common.length > 0) {
                    if (skills[gladOne] > skills[gladTwo]) {
                        delete skills[gladTwo]
                        delete arena[gladTwo]
                    } else if (skills[gladOne] < skills[gladTwo]) {
                        delete skills[gladOne]
                        delete arena[gladOne]
                    }
                }
            }
        } else if (line.includes('Ave Cesar')) {
            let sort = Object.keys(skills).sort((a, b) => skills[b] - skills[a]
                || a.localeCompare(b));

            for (let glad of sort) {
                console.log(`${glad}: ${skills[glad]} skill`);
                let sortTech = Object.keys(arena[glad])
                    .sort((a, b) => arena[glad][b] - arena[glad][a] || a.localeCompare(b))
                    .forEach(element => {
                        console.log(`- ${element} <!> ${arena[glad][element]}`);
                    });
            }
        }
    }
}

arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
])

console.log('--------');

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
])
