// @ts-check

import half from './src/half.js';

export default half;

const library = {
  bookShelf: [],
  addBook(name, author, year, genre, pageCount) {
    const book = {
      name,
      author,
      year,
      genre,
      pageCount,
    };
    this.bookShelf.push(book);
  },
  removeBook(bookName) {
    this.bookShelf = this.bookShelf.filter((book) => {
      const { name } = book;
      if (bookName === name) {
        return false;
      }
      return true;
    });
    return this.bookShelf;
  },
  findBooksByAuthor(bookAuthor) {
    const foundBooks = this.bookShelf.filter((book) => {
      const { author } = book;
      if (bookAuthor === author) {
        return true;
      }
      return false;
    });
    return foundBooks;
  },
  filterBooksByGenre(bookGenre) {
    const foundByGenre = this.bookShelf.filter((book) => {
      const { genre } = book;
      if (bookGenre === genre) {
        return true;
      }
      return false;
    });
    return foundByGenre;
  },
  genreReport() {
    const countBooksGenre = {};
    this.bookShelf.map((book) => {
      const { genre } = book;
      countBooksGenre[genre] = (countBooksGenre[genre] ?? 0) + 1;
      return countBooksGenre[genre];
    });
    return countBooksGenre;
  },
  averagePagesReport() {
    const average = this.bookShelf.reduce((acc, book) => {
      const { pageCount } = book;
      return pageCount + acc;
    }, 0) / this.bookShelf.length;
    return Math.ceil(average);
  },
  sortBooks() {
    return [...this.bookShelf].sort((a, b) => b.year - a.year);
  },
};

library.addBook('Хоббит', 'Дж. Р. Р. Толкиен', 1937, 'Фэнтези', 310);
library.addBook('Гарри Поттер и философский камень', 'Дж. К. Роулинг', 1997, 'Фэнтези', 223);
library.addBook('1984', 'Джордж Оруэлл', 1949, 'Антиутопия', 328);
// Поиск книг по автору
console.log(library.findBooksByAuthor('Дж. Р. Р. Толкиен'));
// Фильтрация книг по жанру
console.log(library.filterBooksByGenre('Фэнтези'));
// Генерация отчета по количеству книг каждого жанра
console.log(library.genreReport());
// Генерация отчета по среднему количеству страниц
console.log(`Среднее количество страниц: ${library.averagePagesReport()}`);
// Удаление книги и вывод обновленной библиотеки
library.removeBook('1984'); console.log(library.bookShelf);
