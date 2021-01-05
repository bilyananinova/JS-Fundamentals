function bookShelf(input) {

    let books = {};

    for (let line of input) {
        if (line.includes(' -> ')) {
            let [shelfId, genre] = line.split(' -> ');

            if (!books.hasOwnProperty(shelfId)) {
                books[+shelfId] = {
                    genre: genre,
                    book: []
                }
            }
        } else {
            let [tokens, genre] = line.split(', ');

            for (let id of Object.keys(books)) {
                Object.keys(books[id]).forEach(x => {
                    if (books[id][x] == genre) {
                        books[id].book.push(tokens);
                    }
                })
            }
        }

    }

    let sort = Object.keys(books).sort((a, b) => books[b].book.length - books[a].book.length)

    for (let line of sort) {
        console.log(`${line} ${books[line].genre}: ${books[line].book.length}`);
        books[line].book.forEach(x => {
            console.log(`--> ${x}`);
        })
    }

}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])