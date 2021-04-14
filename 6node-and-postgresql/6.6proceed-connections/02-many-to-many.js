'use strict';

const { db, sequelize, initDb } = require(`./db`);
const { Op } = require(`sequelize`);

(async () => {

  const { Genre, Book } = db;

  // пересоздание всех таблиц и заполнение начальными данными
  await initDb();

  // нахождение жанров «Драма» и «Фантастика»
  const genres = await Genre.findAll({
    where: {
      id: {
        [Op.in]: [1, 3]
      }
    },
  });

  // книга «Черновик»
  const book = await Book.findByPk(7);
  await book.addGenres(genres);

  // получение всех жанров для книги «Черновик»
  const bookGenres = await book.getGenres({ raw: true });
  console.log(bookGenres);

  // все книги для жанра «Фантастика»
  const [fantasyGenre] = genres;
  const fantasyBooks = await fantasyGenre.getBooks({ raw: true });
  console.log(fantasyBooks);

  // удаление жанров для книги
  await book.removeGenre(fantasyGenre);

  await sequelize.close();
})();
