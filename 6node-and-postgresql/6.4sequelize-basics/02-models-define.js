'use strict';

const Sequelize = require(`sequelize`);

(async () => {
  // для установки соединения с СУБД создадим экземпляр объекта Sequelize
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = require(`./models/reader`)(sequelize);

  // синхронизация модели с базой данных
  await sequelize.sync()
    .catch((err) => console.err(err));

  // Добавление записей
  const result = await Reader.create({
      firstname: `Ivan`,
      lastname: `Ivanov`,
      birthDate: new Date(`1986-01-01`),
  });

  console.log(`Идентификатор новой записи: ${result.id}`);
})();
