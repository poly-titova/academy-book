'use strict';

const Sequelize = require(`sequelize`);

(async () => {
  // для установки соединения с СУБД создадим экземпляр объекта Sequelize
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  // чтобы убедиться, что соединение установилось, выполним аутентификацию
  try {
    await sequelize.authenticate();
    console.log(`Соединение с сервером установлено!`);
  } catch (err) {
    console.error(`Не удалось установить соединение по причине: ${err}`);
  }
})();
