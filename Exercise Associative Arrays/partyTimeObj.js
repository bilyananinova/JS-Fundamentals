function partyTime(arr) {

    let register = {
        VIP: [],
        regular: []
    }

    let questList = quests(arr.slice(0, arr.indexOf('PARTY')));
    let isCommingList = comming(arr.slice(arr.indexOf('PARTY') + 1));
    let printing = print(register)


    function quests(array) {
        for (let i = 0; i < array.length; i++) {
            let quest = array[i];
            let firstLetter = quest[0].split('');
            if (!isNaN(firstLetter)) {
                register.VIP.push(quest);
            } else {
                register.regular.push(quest);
            }
        }
        return register
    }

    function comming(array) {
        for (let i = 0; i < array.length; i++) {
            let quest = array[i];
            if (register['regular'].includes(quest)) {
                let index = register.regular.indexOf(quest);
                register.regular.splice(index, 1);
            } else if (register['VIP'].includes(quest)) {
                let index = register.VIP.indexOf(quest);
                register.VIP.splice(index, 1);
            }
        }
        return register
    }

    function print(object) {
        console.log(register['regular'].length + register['VIP'].length);
        register.VIP.forEach(el => {
            console.log(el);
        })
        register.regular.forEach(el => {
            console.log(el);
        })
    }
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])