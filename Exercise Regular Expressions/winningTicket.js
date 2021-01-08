function tickets(arr) {
    let split = /([, ]+)/;
    let ticketArray = arr[0].split(split);
    let winningSymbols = /\${6,}|@{6,}|#{6,}|\^{6,}/;

    for (let i = 0; i < ticketArray.length; i++) {
        let currentTicket = ticketArray[i].trim()
        if (ticketArray[i].includes(' ') || ticketArray[i].includes(',')) {
            continue;
        }


        if (currentTicket.length == 20) {
            let half = currentTicket.length / 2;
            let leftHalf = currentTicket.substring(0, half);
            let rightHalf = currentTicket.substring(half);
            let leftMatch = winningSymbols.exec(leftHalf);
            let rightMatch = winningSymbols.exec(rightHalf);

            if (leftMatch && rightMatch) {
                let length = Math.min(leftMatch[0].length, rightMatch[0].length);
                let sym = '';
                leftMatch = leftMatch[0].split('');
                for (const char of leftMatch) {
                    if (char == '$' || char == '@' || char == '#' || char == '^') {
                        sym = char;
                        break;
                    }
                }

                if (length >= 6 && length <= 9) {
                    console.log(`ticket "${currentTicket}" - ${length}${sym}`);
                } else if (length == 10) {
                    console.log(`ticket "${currentTicket}" - ${length}${sym} Jackpot!`);
                }

            } else {
                console.log(`ticket "${currentTicket}" - no match`);
            }

        } else {
            console.log('invalid ticket');
        }
    }
}

tickets(['Cash$$$$$$Ca$$$$$$sh'])

console.log('------------');

tickets(['$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey'])

console.log('------------');

tickets(['validticketnomatch:('])