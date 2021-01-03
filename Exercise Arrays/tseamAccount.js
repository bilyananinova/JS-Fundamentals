function tseamAccount(arr) {
    let allGames = arr[0].split(',')
    let gameList = allGames[0].split(' ')

    for (let i = 1; i < arr.length; i++) {
        let commandAndGame = arr[i].split(' ')
        let command = commandAndGame[0]
        let game = commandAndGame[1]

        if (command == 'Install') {
            for (let i = 0; i < gameList.length; i++) {
                if (gameList.includes(game) == false) {
                    gameList.push(game)
                }
            }
        } else if (command == 'Uninstall') {
            if (gameList.includes(game) == true) {
                let index = gameList.indexOf(game);
                gameList.splice(index, 1)
            }
        } else if (command == 'Update') {
            if (gameList.includes(game) == true) {
                let index = gameList.indexOf(game);
                gameList.splice(index, 1)
                gameList.push(game)
            }
        } else if (command == 'Expansion') {
            let expandedGame = game.split('-')
            let expansion = expandedGame[1]
            if (gameList.includes(expandedGame[0]) == true) {
                let index = gameList.indexOf(expandedGame[0])
                gameList.splice(index+1,0,expandedGame.join(':'))
            }
        }
        
    }
    console.log(gameList.join(' '));

}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)
