function gramophone(band, album, song) {
    let time = (album.length * band.length) * song.length / 2;
    let rotate = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotate} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')