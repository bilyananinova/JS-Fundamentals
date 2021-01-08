function date(arr) {
    let dates = arr.toString()
    // let pattern = new RegExp('(?<day>\d{2})(?<sep>[-,\/,.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})</year>', 'g');
    let pattern = /(?<day>\d{2})(?<sep>[-,\/,.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g; 
    let match = pattern.exec(dates)
    while(match !== null) {
        let day = match.groups.day;
        let month = match.groups.month;
        let year = match.groups.year;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        match = pattern.exec(dates)
    }
    
}

date([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
  ])