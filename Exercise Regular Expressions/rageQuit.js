function rageQuit(arr) {

    let numregex = /\d+/g;
    let strregex = /[^\d]+/g;

    let string = arr[0].split('')
        .filter((x) => x !== "")
        .join('');

    let print = '';
    let unique = new Set();

    let str = strregex.exec(string);
    let mul = numregex.exec(string);

    while (str !== null) {
        mul = Number(mul)
        str = str[0].toUpperCase();

        if (mul > 0) {
            str.split('')
            .map(x => {
                unique.add(x)
            });
        }

        print += str.repeat(mul);


        str = strregex.exec(string);
        mul = numregex.exec(string);
    }


    console.log(`Unique symbols used: ${unique.size}`);
    console.log(print);
}

rageQuit([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
])