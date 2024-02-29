# nodejs-package

[![Node CI](https://github.com/hexlet-boilerplates/nodejs-package/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-boilerplates/nodejs-package/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/maintainability)](https://codeclimate.com/github/hexlet-boilerplates/nodejs-package/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/test_coverage)](https://codeclimate.com/github/hexlet-boilerplates/nodejs-package/test_coverage)

## Setup

```bash
make install
```

## Run tests

```bash
make test
```

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=nodejs-package)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=nodejs-package).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).

"Генератор отчетов по книгам"
Разработать программу на JavaScript, которая создает и обрабатывает объекты, представляющие книги в библиотеке. Программа должна позволять добавлять книги в библиотеку, удалять их, а также генерировать различные отчеты.

Задачи:
Создание структуры данных книги:

Создайте объекты для книг с полями: название, автор, год издания, жанр и количество страниц.
Предусмотрите функцию для добавления книги в библиотеку. Библиотека должна быть представлена в виде массива объектов.
Функциональность библиотеки:

Реализуйте функцию для удаления книги из библиотеки по названию.
Реализуйте функцию для поиска книг по автору и вывода списка всех книг этого автора.
Создайте функцию для фильтрации книг по жанру.
Генерация отчетов:

Разработайте функцию для генерации отчета о количестве книг каждого жанра в библиотеке.
Реализуйте функцию для генерации отчета о среднем количестве страниц по всем книгам в библиотеке.
Дополнительно!
Создайте функцию, которая выводит список всех книг, отсортированный по году издания, от новых к старым.
// Добавление книг в библиотеку

addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);
// Поиск книг по автору
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));
// Фильтрация книг по жанру
console.log(filterBooksByGenre("Фэнтези"));
// Генерация отчета по количеству книг каждого жанра
console.log(genreReport());
// Генерация отчета по среднему количеству страниц
console.log(`Среднее количество страниц: ${averagePagesReport()}`);
// Удаление книги и вывод обновленной библиотеки
removeBook("1984"); console.log(library);