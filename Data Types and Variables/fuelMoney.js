function fuelMoney(distance, passengers, price) {
    let neededFuel = (distance / 100 * 7) + (passengers * 0.100);
    let money = neededFuel * price;
    console.log(`Needed money for that trip is ${money}lv.`)
}

fuelMoney(260, 9, 2.49)