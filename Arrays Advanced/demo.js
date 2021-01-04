function pushExample(arr) {
    console.log(arr.join(' ') + ' - първоначален масив');

    let array = arr
    array.push(6)

    console.log(array.join(' ') + ' push(добавя елемент в края на масива)');
}

pushExample([1, 2, 3, 4, 5])

function popExample(arr) {
    let array = arr
    array.pop(5)

    console.log(array.join(' ') + ' pop(трие последния елемент на масива)');
}

popExample([1, 2, 3, 4, 5])

function unshiftExample(arr) {
    let array = arr
    array.unshift(0)

    console.log(array.join(' ') + ' unshift(добавя елемент в началото на масива)');
}

unshiftExample([1, 2, 3, 4, 5])

function shiftExample(arr) {
    let array = arr
    array.shift()

    console.log(array.join(' ') + ' shift(трие първият елемент в масива)');
}

shiftExample([1, 2, 3, 4, 5])

function includesExample(arr) {
    let array = arr.includes(3)

    console.log(array + ' includes(проверява дали включва елемент в масива и връща true или false)');
}

includesExample([1, 2, 3, 4, 5])

function indexOfExample(arr) {
    let array = arr.indexOf(4)

    console.log(array + ' indexOf(проверява елемента на кой индекс се намира, връща номера на интекса)');
}

indexOfExample([1, 2, 3, 4, 5])

function sliceExample(arr) {
    let array = arr.slice(1,4)
    let arrays = arr.slice(2)

    console.log(array + ' slice(създава нов масив с отрязък от числата между началното и крайното)');
    console.log(arrays + ' slice(създава нов масив с отрязък от числата като се подава само началния индекс на масива)');
}

sliceExample([1, 2, 3, 4, 5])

function spliceExample(arr) {
    let array = arr.splice(2)

    console.log(array + ' splice(трие елементи на масива/подава се интекса до който да изтрие)');
    
}

spliceExample([1, 2, 3, 4, 5])

function mapExample(arr) {
    let array = arr.map(x => x.length) 

    console.log(array + ' map(в арол функцията се завърта фор цикъл който в случая проверява дължината на елементите в масива)');
    
}

mapExample(['one', 'two', 'three', 'four', 'five'])

function filterExample(arr) {
    let array = arr.filter('five') 

    console.log(array + ' filter()');
    
}

filterExample(['one', 'two', 'three', 'four', 'five'])


