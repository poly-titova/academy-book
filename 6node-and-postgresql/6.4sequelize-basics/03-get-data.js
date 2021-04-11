'use strict';

const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = require(`./models/reader`)(sequelize);

  // Все записи из таблицы `Readers`
  const allEntries = await Reader.findAll({raw: true});
  console.log(allEntries);

})();
