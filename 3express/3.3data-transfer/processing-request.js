'use strict';

const express = require(`express`);
const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
  // Обработка параметров в строке запроса
  console.log(req.query);
});

app.listen(port);