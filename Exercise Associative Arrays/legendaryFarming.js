function legendaryFarming(str) {
    str = str.split(' ');

    let junk = {};
    let items = { shards: 0, fragments: 0, motes: 0 };

    for (let i = 0; i < str.length; i += 2) {
        let quantity = Number(str[i]);
        let material = str[i + 1].toLowerCase();

        if (material == 'shards') {
            items[material] += quantity;

            if (items[material] >= 250) {
                console.log(`Shadowmourne obtained!`);
                items[material] -= 250;
                break;
            }
        } else if (material == 'fragments') {
            items[material] += quantity;

            if (items[material] >= 250) {
                console.log(`Valanyr obtained!`);
                items[material] -= 250;
                break;
            }
        } else if (material == 'motes') {
            items[material] += quantity;

            if (items[material] >= 250) {
                console.log(`Dragonwrath obtained!`);
                items[material] -= 250;
                break;
            }
        } else {
            if (junk.hasOwnProperty(material)) {
                junk[material] += quantity
            } else if (!junk.hasOwnProperty(material)) {
                junk[material] = quantity
            }
        }
    }

    let sort = Object.keys(items).sort((a, b) => items[b] - items[a] || a.localeCompare(b));

    for (let key of sort) {
        console.log(`${key}: ${items[key]}`);
    }

    let sortJunk = Object.keys(junk).sort((a, b) => a.localeCompare(b));

    for (let key of sortJunk) {
        console.log(`${key}: ${junk[key]}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')

console.log('----------');

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')