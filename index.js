// @ts-check

import half from './src/half.js';

export default half;

const library = { 
    bookShelf: [],
    addBook: function(name, author, year, genre, pageCount) {
    this.bookShelf.push({
        name,
        author,
        year,
        genre,
        pageCount,
        });
    },
    deleteBook: function(bookName) {
        this.bookShelf = this.bookShelf.filter((book) => {
            const { name } = book;
            if (bookName === name) {
                return false
            }
            return true;
        });
        return this.bookShelf;
    },
    
};

library.addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
library.addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
library.addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);


console.log(library.deleteBook('Хоббит'));




