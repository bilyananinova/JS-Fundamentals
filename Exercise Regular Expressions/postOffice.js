function postOffice(arr) {
    let [f, s, t] = arr[0].split('|');
    const regex = /([#$%*&])(?<cap>[A-Z]+)\1/g;
    const lettersAndLengthRegex = /[0-9][0-9]:[0-9][0-9]/g;
    let capitals = regex.exec(f);
    let capitalList = capitals[0].split('').slice(1, -1);
    let lettersAndLength = s.match(lettersAndLengthRegex);
    let list = t.split(' ');
    let array = [];

    for (const c of capitalList) {
        for (const line of lettersAndLength) {
            let [lett, len] = line.split(":").filter(x => x != '');
            let letter = String.fromCharCode(+lett);
            let length = Number(len) + 1;
            if (c == letter) {
                for (const word of list) {
                    if (word[0] == letter && word.length == length) {
                        if (!array.includes(word)) {
                            array.push(word);
                            break;
                        }
                    }
                }
            }
        }
    }
    array.forEach(element => {

        console.log(element);
    });
}

postOffice([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
]);

console.log('-------');

postOffice([
    'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
]);


