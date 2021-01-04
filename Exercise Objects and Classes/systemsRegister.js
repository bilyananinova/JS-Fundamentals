function systemsRegister(input) {
    let system = {};
    //{SULS {Mine Site [Home Page, Login page, Register page]}}
    for (let line of input) {
        let [sys, comp, sub] = line.split(' | ');

        if (!system.hasOwnProperty(sys)) {
            system[sys] = {};
        }

        if (!system[sys].hasOwnProperty(comp)) {
            system[sys][comp] = [];
        }

        system[sys][comp].push(sub)
    }

    let sort = Object.keys(system)
        .sort((a, b) => Object.keys(system[b]).length - Object.keys(system[a]).length
            || a.localeCompare(b));

    for (let s of sort) {
        console.log(s);
        let sortComponents = Object.keys(system[s])
            .sort((a, b) => system[s][b].length - system[s][a].length)
            .forEach(comp => {
                console.log(`|||${comp}`);
                Object.values(system[s][comp]).forEach(sub => {
                    console.log(`||||||${sub}`);
                })
            })
    }
}

systemsRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])