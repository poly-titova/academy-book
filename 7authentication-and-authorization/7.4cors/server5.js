const express = require(`express`);
const path = require(`path`);
const app = express();
const port = 3000;

app.use((req, res, next) => {
	res.headers[`Access-Control-Allow-Origin`] = `*`;
	next();
});

app.options(`/`, (req, res) => {
  res.headers[`Access-Control-Allow-Method`] = `DELETE`;
	res.sendStatus(200);
});

app.delete(`/user`, (req, res) => {
	// Выполняем запрос
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
