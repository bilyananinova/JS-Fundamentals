function meetings(arr) {
    let schedule = {};

    for (let line of arr) {
        let [day, name] = line.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }

    Object.keys(schedule).forEach(key => { console.log(`${key} -> ${schedule[key]}`); })
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])