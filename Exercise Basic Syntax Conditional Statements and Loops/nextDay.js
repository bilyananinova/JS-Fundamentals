function nextDay(year, month, day) {
    let next = new Date(year, month - 1, day += 1);

    let newYear = next.getFullYear();
    let newMonth = next.getMonth();
    let newDate = next.getDate();

    console.log(`${newYear}-${newMonth + 1}-${newDate}`);
}

nextDay(2016, 9, 30)