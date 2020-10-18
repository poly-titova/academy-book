const express = require(`express`);
const DEFAULT_PORT = 3000;

const app = express();

app.use(express.json());

app.listen(DEFAULT_PORT,
  () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));

const companies = [
  `HTML Academy`,
  `Microsoft`,
  `Google`,
];

app.get(`/company/:id`, (req, res) => {
  const companyId = Number.parseInt(req.params.id, 10);

  if (!companies[companyId]) {
    return res.status(404).send(`Not Found`);
  }

  return res.send(companies[companyId]);
});