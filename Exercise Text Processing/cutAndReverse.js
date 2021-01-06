function cutAndReverse(str) {
    let firstHalf = str.substring(0, str.length / 2).split('');
    let secondHalf = str.substring(str.length / 2).split('');
    console.log(firstHalf.reverse().join(''));
    console.log(secondHalf.reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')