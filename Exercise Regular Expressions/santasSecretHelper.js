function santasSecretHelper(arr) {
    let key = arr.shift();

    let kids = new Map()

    for (let i = 0; i < arr.length; i++) {
        let regex = /(?<name>@[A-Za-z]+)[^-@!:>]+(?<type>![G]!)/;
        let message = [];
        if (arr[i] == 'end') {
            break;
        }

        let m = arr[i].split('');

        for (let char of m) {
            let fromStringToCode = char.charCodeAt(0) - key;
            let fromCodeToString = String.fromCharCode(fromStringToCode);
            message.push(fromCodeToString);
        }

        let string = message.join('');
        let match = regex.exec(string)
        if (match) {
            kids.set(match.groups.name, match.groups.type)
        }

    }

    for (const kvp of Array.from(kids)) {
        console.log(kvp[0].substring(1));
    }
}

santasSecretHelper(
    [
        '3',
        "N}eideidmk$'(mnyenmCNlpamnin$J$",
        'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
        'ppqmkkkmnolmnnCEhq/vkievk$Q$',
        'yyegiivoguCYdohqwlqh/kguimhk$J$',
        'end'
    ]
)