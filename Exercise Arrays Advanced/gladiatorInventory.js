function gladiatorInventory(arr) {
    let inventoryList = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(' ')
        let command = element[0];

        if (command == 'Buy') {
            let inventory = element[1];
            if (inventoryList.includes(inventory) === false) {
                inventoryList.push(inventory);
            } else {
                break;
            }
        } else if (command == 'Trash') {
            let inventory = element[1];
            if (inventoryList.includes(inventory) === true) {
                let index = inventoryList.indexOf(inventory);
                inventoryList.splice(index, 1);
            } else {
                break;
            }
        } else if (command == 'Repair') {
            let inventory = element[1];
            if (inventoryList.includes(inventory) === true) {
                let index = inventoryList.indexOf(inventory);
                let repairItem = inventoryList.splice(index, 1).toString();
                inventoryList.push(repairItem);
            } else{
                break;
            }
        } else if (command == 'Upgrade') {
            let inventory = element[1].split('-');
            let inventoryItem = inventory[0];
            if (inventoryList.includes(inventoryItem) === true) {
                let index = inventoryList.indexOf(inventoryItem);
                inventoryList.splice(index+1,0, inventory.join(':'));
            } else {
                break;
            }
        }

    }
    
    console.log(inventoryList.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)