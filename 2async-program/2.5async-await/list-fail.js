'use strict';

const fs = require(`fs`);
const util = require(`util`);

const printFiles = async path => {
const readdir = util.promisify(fs.readdir);

  try {
     const files = await readdir(path);
     console.log(files);
  } catch (error) {
     // Добавляем обработку ошибок
    console.log(`Произошла ошибка: ${error}`);
  }
};

printFiles(``); // Передаём пустую строку
console.log(`Список файлов: `);