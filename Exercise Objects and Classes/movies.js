function movies(arr) {

    let moviesObject = {};
    let moviesArray = []

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ')

        if (line.includes('addMovie')) {
            let movieName = line.splice(1).join(' ');
            addMovie(movieName);
        } else if (line.includes('directedBy')) {
            let movieName = line.splice(0, line.indexOf('directedBy')).join(' ');
            let director = line.splice(line.indexOf('directedBy') + 1).join(' ');
            directedBy(movieName, director);
        } else if (line.includes('onDate')) {
            let movieName = line.splice(0, line.indexOf('onDate')).join(' ');
            let date = line.splice(line.indexOf('onDate') + 1).join(' ');
            onDate(movieName, date);
        }
    }

    function addMovie(str) {
        if (!moviesObject.hasOwnProperty(str)) {
            moviesObject = {
                name: str
            }
        }
        moviesArray.push(moviesObject);
        return moviesArray
    }

    function directedBy(movieName, director) {
        if (moviesArray.find(x => x.name == movieName)) {
            let movie = moviesArray.find(x => x.name == movieName);
            movie.director = director
        }

        return moviesArray
    }

    function onDate(movieName, date) {
        if (moviesArray.find(x => x.name == movieName)) {
            let movie = moviesArray.find(x => x.name == movieName);
            movie.date = date
        }

        return moviesArray
    }

    moviesArray.forEach(element => {
        if(element.hasOwnProperty('name') && element.hasOwnProperty('date') && element.hasOwnProperty('director'))
        console.log(JSON.stringify(element));
    });
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)