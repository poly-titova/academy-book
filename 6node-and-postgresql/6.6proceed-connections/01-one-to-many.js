'use strict';

const { db, sequelize } = require(`./db`);

(async () => {

  // получение книги с идентификатором 2, включая информацию об авторе
  const book = await db.Book.findByPk(2, {
    include: [`author`],
  });

  const { title, author } = book;
  console.log(`${title} — ${author.firstname} ${author.lastname}`);

  // все книги автора
  const someAuthor = await db.Author.findByPk(2);
  const allAuthorsBooks = await someAuthor.getBooks({ raw: true });
  console.log(allAuthorsBooks);

  // добавление новой книги для автора
  const newBook = {
    title: `Звёзды — холодные игрушки`,
    pageCount: 999,
    releaseDate: `1998-02-01`
  };

  await someAuthor.createBook(newBook);
  await sequelize.close();
})();
