'use strict';

// подключили модуль http
const http = require(`http`);

// получение запроса, и отправка ответа
const onClientConnect = (request, response) => {
  const userAgent = request.headers[`user-agent`];
  response.end(`Hello, ${userAgent}!`);
};

// создали переменную для определения порта, на котором будут приниматься подключения
const port = 8000;
// будет вызвана при подключении очередного клиента
const httpServer = http.createServer(onClientConnect);

// запуск сервера
httpServer.listen(port, (err) => {
  if (err) {
    return console.error(`Ошибка при создании http-сервера.`, err);
  }

  return console.info(`Принимаю подключения на ${port}`);
});
