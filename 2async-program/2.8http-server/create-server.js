'use strict';

// подключили модуль http
const http = require(`http`);

// получение запроса, и отправка ответа
const onClientConnect = (request, response) => {
  const userAgent = request.headers[`user-agent`];
  // html-код
  const getResponseText = (userAgent) => (`
    <!Doctype html>
    <html lang="ru">
      <head>
        <title>From Node with love!</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Привет!</h1>
        <p>Ты используешь: ${userAgent}.</p>
      </body>
    </html>
  `);

  // стили
  const styles = `
  h1 {
    color: red;
    font-size: 24px;
  }

  p {
    color: green;
    font-size: 16px;
    }`;

  // код состояний
  const HTTP_SUCCESS_CODE = 200;
  const HTTP_NOT_FOUND_CODE = 404;

  // для разбирания запросов клиента и оттования соответствующих ресурсов
  switch (request.url) {
    case `/style.css`:
      response.writeHead(HTTP_SUCCESS_CODE, {
        'Content-Type': `text/css; charset=UTF-8`,
      });

      response.end(styles);
      break;

    case `/`:
      const userAgent = request.headers[`user-agent`];
      const responseText = getResponseText(userAgent);

      response.writeHead(HTTP_SUCCESS_CODE, {
        'Content-Type': `text/html; charset=UTF-8`,
      });

      response.end(responseText);
      break;

    default:
      response.writeHead(HTTP_NOT_FOUND_CODE, {
        'Content-Type': `text/plain; charset=UTF-8`,
      });
      response.end(`Упс, ничего не найдено :(`);
  }

  // формирование и отправление заголовока ответа на запрос
  response.writeHead(HTTP_SUCCESS_CODE, {
    // чтобы клиент мог определить тип содержимого
    'Content-Type': `text/html; charset=UTF-8`,
  });

  response.end(getResponseText);
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
