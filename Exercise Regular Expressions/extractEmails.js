function extractEmails(arr) {
    let regex = / \b([^ -_.])([\w\.\-\_]+)?([(?<user>[\w]+\.\-)*@(?<domain>([a-z]+)?(\-)?([a-z]+)(\.)([a-z]+)?(\.)?([a-z]+)?)\b/g;
    let match = arr.shift().match(regex);

    while (match !== null) {
        for(let m of match){
            console.log(m.trim());
        }
        match = arr.shift().match(regex);
    }

}
extractEmails(['Examples of invalid emails: --123@gmail.com, …@mail.bg, .info@info.info, _steve@yahoo.cn, mike@helloworld, mike@.unknown.soft., s.johnson@invalid-.'])