function companyUsers(arr) {
    let obj = {};

    for (let line of arr) {
        let [company, id] = line.split(' -> ');

        if (!obj[company]) {
            obj[company] = new Set();
            obj[company].add(id);
        } else {
            obj[company].add(id);
        }

    }

    let sort = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    
    for (let companyName of sort) {
        console.log(companyName[0]);

        companyName[1].forEach(id => {
            console.log(`-- ${id}`);
        });

    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])