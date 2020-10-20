const express = require(`express`);
const app = express();

const port = 3000;
app.listen(port);

// req (request). Объект запроса;
// res (response). Объект ответа;
// next (function). Ссылка на функцию со следующим middleware.
app.use((req, res, next) => {
  // Тело middleware
  if (req.path === `/`) {
    res.send(`Hello`);
  }
});