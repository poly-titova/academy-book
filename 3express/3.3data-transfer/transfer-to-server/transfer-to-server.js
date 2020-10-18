const express = require(`express`);
const DEFAULT_PORT = 3000;

const app = express();

app.use(express.json());

app.get(`/`, (req, res) => res.send(`Hello, Express.js!`));
app.listen(DEFAULT_PORT,
  () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));

app.post(`/company`, (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
