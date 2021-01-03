function dungeonestDark(arr) {

    let dungen = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let rooms = 0;

    for (let i = 0; i < dungen.length; i++) {
        let currentRoom = dungen[i].split(' ');
        let monster = currentRoom[0];
        let points = Number(currentRoom[1]);
        rooms++;

        if (monster == 'potion') {
            health += points;

            if (health > 100) {
                health = health - points;
                points = Math.abs(100 - health)
                health = 100;
            }

            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (monster == 'chest') {
            coins += points;
            console.log(`You found ${points} coins.`);

        } else if (monster !== 'potion' && monster !== 'chest') {

            health -= points;
            if (health <= 0) {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${rooms}`)
                break;
            } else if (health > 0) {
                console.log(`You slayed ${monster}.`);
            }
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])