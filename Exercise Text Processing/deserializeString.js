function deserializeString(arr) {
    let array = []
    let command = arr.shift();

    while (command != 'end') {
        let [letter, index] = command.split(':');
        index = index.split('/').map(Number);

        for (let i = 0; i < index.length; i++) {
            array[index[i]] = letter
        }

        command = arr.shift()
    }

    console.log(array.join(''));

}

deserializeString([
    'a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'
  ])