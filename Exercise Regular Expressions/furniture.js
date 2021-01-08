function furniture(arr) {
    let regex = />>(?<fur>\w+)<<(?<price>\d+(\.\d+)?)!(?<quant>\d+)/;
    let total = 0;
    console.log(`Bought furniture:`);
    for (let cost of arr) {
        let match = regex.exec(cost)
        if (cost == 'Purchase') {
            break;
        }

        if (match) {
            let furn = match.groups.fur;
            console.log(furn);
            let price = match.groups.price;
            let quantity = match.groups.quant
            total += +price * +quantity;
        }
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])