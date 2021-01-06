function serializeString(input) {
    let str = input[0]
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (!obj.hasOwnProperty(str[i])) {
            obj[str[i]] = []
        }

        obj[str[i]].push(i)
    }

    let arr = Object.entries(obj)
    arr.forEach(element => {
        console.log(`${element[0]}:${element[1].join('/')}`);
    });
}

serializeString(['abababa'])