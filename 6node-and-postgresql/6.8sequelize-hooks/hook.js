'use strict';

const { db, sequelize, initDb } = require(`./db`);

(async () => {
  await db.Author.create({ firstname: `Марио`, lastname: `Пьюзо` });
  await sequelize.close();

  beforeValidate: (author, options) => {
    if (! author.birthDate) {
        author.birthDate = new Date(`1990-02-01`);
    }
  }

  beforeCreate: (author, options) => {
    console.log(`Новый автор: ${author.lastname} ${author.birthDate}`);
  }
})();
