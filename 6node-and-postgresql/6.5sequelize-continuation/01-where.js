'use strict';

const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = require(`./models/reader`)(sequelize);
  const Operator = Sequelize.Op;

  // Читатели с именами Ivan и Jon
  console.info(`*** Jon и Ivan`)
  const entries = await Reader.findAll({
      where: {
        [Operator.or]: [{firstname: `Ivan`}, {firstname: `Jon`}],
      },
      raw: true
    });

 console.log(entries); // 2 записи
})();
