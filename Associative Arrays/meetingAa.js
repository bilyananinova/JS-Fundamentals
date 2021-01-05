function meetings(arr) {
    let schedule = new Map();

    for (let line of arr) {
        let [day, name] = line.split(' ');

        if (schedule.has(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule.set(day, name);
            console.log(`Scheduled for ${day}`);
        }

    }

    Array.from(schedule).forEach(kvp => { console.log(`${kvp[0]} -> ${kvp[1]}`); })
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])