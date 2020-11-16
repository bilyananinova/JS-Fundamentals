function vacation(groupOfPeople, typeOfGroup, dayOfTheWeek) {
    let price = 0;

    if (typeOfGroup == 'Students') {
        if (dayOfTheWeek == 'Friday') {
            price = 8.45;
        } else if (dayOfTheWeek == 'Saturday') {
            price = 9.80;
        } else if (dayOfTheWeek == 'Sunday') {
            price = 10.46;
        }
    } else if (typeOfGroup == 'Business') {
        if (dayOfTheWeek == 'Friday') {
            price = 10.90;
        } else if (dayOfTheWeek == 'Saturday') {
            price = 15.60;
        } else if (dayOfTheWeek == 'Sunday') {
            price = 16;
        }
    } else if (typeOfGroup == 'Regular') {
        if (dayOfTheWeek == 'Friday') {
            price = 15;
        } else if (dayOfTheWeek == 'Saturday') {
            price = 20;
        } else if (dayOfTheWeek == 'Sunday') {
            price = 22.50;
        }
    }

    let result = price * groupOfPeople;

    if (typeOfGroup == 'Students' && groupOfPeople >= 30) {
        result = (price * groupOfPeople) * 0.85;
    } else if (typeOfGroup == 'Business' && groupOfPeople >= 100) {
        result = groupOfPeople * price - (10 * price);
    } else if (typeOfGroup == 'Regular' && groupOfPeople >= 10 && groupOfPeople <= 20) {
        result = (price * groupOfPeople) * 0.95;
    }

    console.log(`Total price: ${result.toFixed(2)}`)
}

vacation(400,
    "Business",
    "Saturday"
)