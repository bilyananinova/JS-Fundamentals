function spiceMustFlow(startingYield) {
    let totalAmount = 0;
    let day = 0;
    let leaving = 0;
    let workConsumer = 0;

    while (startingYield >= 100) {
        day++;
        leaving += startingYield;
        workConsumer += 26;
        totalAmount = leaving - workConsumer;
        startingYield -= 10;


        if (startingYield < 26) {
            totalAmount = startingYield;
        }

        if (startingYield < 100) {
            totalAmount -= 26;

        }
    }

    console.log(day)
    console.log(totalAmount)

}

spiceMustFlow(111)